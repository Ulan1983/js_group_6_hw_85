const express = require('express');

const Track = require('../models/Track');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
	if (req.user && req.query.album) {
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

router.post('/', async (req, res) => {
	const track = new Track(req.body);
	try {
		await track.save();

		return res.send(track);
	} catch (e) {
		return res.status(400).send(e);
	}
});

module.exports = router;