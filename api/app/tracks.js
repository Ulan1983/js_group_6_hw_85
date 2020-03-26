const express = require('express');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
	if (req.query.album) {
		try {
			const tracks = await Track.find({album: req.query.album}).populate('album').sort({number: 1});

			if (!tracks) {
				return res.status(404).send({message: "Not found"})
			} return res.send(tracks);
		} catch (e) {
			return res.status(404).send({message: "Not found", e});
		}
	} else {
		try {
			const tracks = await Track.find();

			if (!tracks) {
				return res.status(404).send({message: "Not found"});
			}
			return res.send(tracks);
		} catch (e) {
			return res.status(404).send({message: "Not found", e});
		}
	}
});

router.post('/', [auth, permit('user', 'admin')], async (req, res) => {
	const user = req.user._id;
	const number = await Track.find({album: req.body.album});
	const track = new Track({
		title: req.body.title,
		number: number.length + 1,
		duration: req.body.duration,
		album: req.body.album,
		user: user
	});
	try {
		await track.save();

		return res.send(track);
	} catch (e) {
		return res.status(400).send(e);
	}
});

router.delete('/:id', [auth, permit('admin')], async (req, res) => {
	try {
		await Track.deleteOne({_id: req.params.id});

		return res.send({message: 'Deleted successfully!'});
	} catch (e) {
		return res.status(400).send(e);
	}
});

module.exports = router;