const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
	user: {
		type: Schema.Types.ObjectID,
		ref: 'User',
		required: true
	},
	number: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	duration: {
		type: String,
		required: true
	},
	album: {
		type: Schema.Types.ObjectID,
		ref: "Album",
		required: true
	},
});

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;