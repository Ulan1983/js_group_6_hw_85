const path = require('path');
const express = require('express');
const nanoid = require('nanoid');
const multer = require('multer');

const config = require('../config');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const Artist = require('../models/Artist');
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
	try {
		const artists = await Artist.find();

		if (!artists) {
			return res.status(404).send({message: "Not found!"});
		}
		return res.send(artists);
	} catch (e) {
		return res.status(404).send({message: "Not found", e});
	}
});

router.get('/:id', async (req, res) => {
	try {
		const artist = await Artist.findById(req.params.id);

		if (!artist) {
			return res.status(404).send({message: "No found!"})
		}
		return res.send(artist);
	} catch (e) {
		return res.status(404).send({message: "Not found", e});
	}
});

router.post('/', [auth, permit('user', 'admin'), upload.single('image')], async (req, res) => {
	const artistData = req.body;
	const user = req.user._id;

	if (req.file) {
		artistData.image = req.file.filename;
	}

	const artist = new Artist({
		name: artistData.name,
		image: artistData.image,
		user: user,
	});

	try {
		await artist.save();

		return res.send(artist);
	} catch (e) {
		return res.status(400).send(e);
	}
});

router.delete('/:id', [auth, permit('admin')], async (req, res) => {
	await Artist.deleteOne({_id: req.params.id});

	await Album.find({artist: req.params.id}).then(result => {
		result.forEach(album => {
			Track.deleteMany({album: album._id})
				.catch(error => res.status(400).send(error))
		})
	});
	await Album.deleteMany({artist: req.params.id});

	res.send({message: 'Deleted successfully!'});

});

module.exports = router;