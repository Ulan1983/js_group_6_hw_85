const mongoose = require('mongoose');
const config = require('./config');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');

const run = async () => {
	await mongoose.connect(config.database, config.databaseOptions);

	const collections = await mongoose.connection.db.listCollections().toArray();

	for (let coll of collections) {
		await mongoose.connection.db.dropCollection(coll.name);
	}

	const [art1, art2, art3] = await Artist.create({
		name: 'Alicia Keys',
		image: 'alicia-keys.jpg'
	}, {
		name: 'Armin van Buuren',
		image: 'van_buuren.jpeg'
	}, {
		name: 'Metallica',
		image: 'metallica.jpeg'
	});

	const [alb1, alb2, alb3, alb4, alb5, alb6] = await Album.create({
		title: 'As I Am',
		releaseYear: '2007',
		image: 'as_i_am.jpg',
		artist: art1
	}, {
		title: 'The Diary of Alicia Keys',
		releaseYear: '2003',
		image: 'the_diary.jpg',
		artist: art1
	}, {
		title: 'Mirage',
		releaseYear: '2010',
		image: 'Mirage.jpg',
		artist: art2
	}, {
		title: 'Intense',
		releaseYear: '2013',
		image: 'intense.jpg',
		artist: art2
	}, {
		title: 'Load',
		releaseYear: '1996',
		image: 'load.jpg',
		artist: art3
	}, {
		title: 'ReLoad',
		releaseYear: '1997',
		image: 'reload.jpg',
		artist: art3
	});

	const [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13, tr14, tr15, tr16, tr17, tr18] = await Track.create({
		number: '3',
		title: 'Diary',
		duration: '4:45',
		album: alb2
	}, {
		number: '2',
		title: 'So Simple',
		duration: '3:49',
		album: alb2
	}, {
		number: '1',
		title: 'Wake up',
		duration: '4:27',
		album: alb2
	}, {
		number: '1',
		title: 'No One',
		duration: '4:13',
		album: alb1
	}, {
		number: '2',
		title: 'Superwoman',
		duration: '4:34',
		album: alb1
	}, {
		number: '3',
		title: 'As I Am',
		duration: '1:52',
		album: alb1
	}, {
		number: '3',
		title: 'Mirage',
		duration: '6:41',
		album: alb3
	}, {
		number: '2',
		title: 'Full Focus',
		duration: '4:41',
		album: alb3
	}, {
		number: '1',
		title: 'Coming home',
		duration: '6:20',
		album: alb3
	}, {
		number: '1',
		title: 'Intense',
		duration: '8:47',
		album: alb4
	}, {
		number: '2',
		title: 'Pulsar',
		duration: '6:31',
		album: alb4
	}, {
		number: '3',
		title: 'Alone',
		duration: '4:04',
		album: alb4
	}, {
		number: '1',
		title: 'Until It Sleeps',
		duration: '4:29',
		album: alb5
	}, {
		number: '2',
		title: 'Hero of the Day',
		duration: '4:21',
		album: alb5
	}, {
		number: '3',
		title: 'Cure',
		duration: '4:54',
		album: alb5
	}, {
		number: '1',
		title: 'Fuel',
		duration: '4:29',
		album: alb6
	}, {
		number: '2',
		title: "Devil's Dance",
		duration: '5:19',
		album: alb6
	}, {
		number: '3',
		title: 'Attitude',
		duration: '5:15',
		album: alb6
	});

	mongoose.connection.close();
};

run().catch(e => {
	mongoose.connection.close();
	throw e;
});