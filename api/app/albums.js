const path = require('path');
const express = require('express');
const nanoid = require('nanoid');
const multer = require('multer');

const config = require('../config');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Album = require('../models/Album');
const Track = require('../models/Track');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, config.uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	}
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
	if (req.query.artist) {
		try {
			const album = await Album.find({artist: req.query.artist}).sort({releaseYear: 1});
			if (!album) {
				return res.status(404).send({message: "Not found"})
			} return res.send(album);
		} catch (e) {
			return res.status(404).send({message: "Not found", e});
		}
	} else {
		try {
			const albums = await Album.find();

			if (!albums) {
				return res.status(404).send({message: "Not found"});
			}
			return res.send(albums);
		} catch (e) {
			return res.status(404).send({message: "Not found", e});
		}
	}
});

router.get('/:id', async (req, res) => {
	try {
		const album = await Album.findById(req.params.id).populate('artist');

		if (!album) {
			return res.status(404).send({message: 'Not found'});
		}

		res.send(album);
	} catch (e) {
		res.status(404).send({message: 'Not found'});
	}
});

router.post('/', [auth, permit('user', 'admin'), upload.single('image')], async (req, res) => {
	const albumData = req.body;
	const user = req.user._id;

	if (req.file) {
		albumData.image = req.file.filename;
	}

	const album = new Album({
		title: albumData.title,
		releaseYear: albumData.releaseYear,
		image: albumData.image,
		artist: albumData.artist,
		user: user
	});

	try {
		await album.save();

		return res.send(album);
	} catch (e) {
		return res.status(400).send(e);
	}
});

router.delete('/:id', [auth, permit('admin')], async (req, res) => {
	try {
		await Album.deleteOne({_id: req.params.id});
		await Track.deleteMany({album: req.params.id});

		return res.send({message: 'Deleted successfully!'});
	} catch (e) {
		return res.status(400).send(e);
	}
});

router.post('/:id/published', [auth, permit('admin')], async (req, res) => {
	try {
		const album = await Album.findById(req.params.id);
		album.published = true;

		await album.save();

		return res.send(album);
	} catch (e) {
		return res.status(400).send(e);
	}
});

module.exports = router;