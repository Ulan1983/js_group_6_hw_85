const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	published: {
		type: Boolean,
		default: false,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectID,
		ref: 'User',
		required: true
	}
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;