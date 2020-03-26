const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	releaseYear: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	artist: {
		type: Schema.Types.ObjectID,
		ref: "Artist",
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectID,
		ref: 'User',
		required: true
	},
	published: {
		type: Boolean,
		default: false
	}
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;