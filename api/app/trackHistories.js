const express = require('express');

const auth = require('../middleware/auth');

const TrackHistory = require('../models/TrackHistory');

const router = express.Router();

router.get('/', auth, async (req, res) => {
	try {
		const trackHistory = await TrackHistory.find({user: req.user._id}).populate({
			path: 'track',
			populate: {
				path: 'album',
				populate: {
					path: 'artist'
				}
			}
		}).sort({datetime: -1});

		return res.send(trackHistory);
	} catch (error) {
		return res.status(400).send(error);
	}
});

router.post('/', auth, async (req, res) => {
	try {
		const trackHistoryData = {
			user: req.user,
			track: req.body.track,
			datetime: new Date().toISOString()
		};

		const trackHistory = new TrackHistory(trackHistoryData);

		await trackHistory.save();

		return res.send(trackHistory);
	} catch (error) {
		return res.status(400).send(error);
	}
});


module.exports = router;