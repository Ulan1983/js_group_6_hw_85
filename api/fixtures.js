const mongoose = require('mongoose');
const config = require('./config');
const nanoid =require('nanoid');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');
const User = require('./models/User');

const run = async () => {
	await mongoose.connect(config.database, config.databaseOptions);

	const collections = await mongoose.connection.db.listCollections().toArray();

	for (let coll of collections) {
		await mongoose.connection.db.dropCollection(coll.name);
	}

	const [user, admin] = await User.create({
		username: 'user',
		password: '123',
		role: 'user',
		token: nanoid(),
		displayName: 'John Doe',
		avatarImage: 'fixtures/user.png'

	}, {
		username: 'admin',
		password: 'admin123',
		role: 'admin',
		token: nanoid(),
		displayName: 'Admin',
		avatarImage: 'fixtures/user.png'
	});

	const [art1, art2, art3] = await Artist.create({
		name: 'Alicia Keys',
		image: 'fixtures/alicia-keys.jpg',
		published: true,
		user: user
	}, {
		name: 'Armin van Buuren',
		image: 'fixtures/van_buuren.jpeg',
		published: true,
		user: admin
	}, {
		name: 'Metallica',
		image: 'fixtures/metallica.jpeg',
		published: true,
		user: user
	});

	const [alb1, alb2, alb3, alb4, alb5, alb6] = await Album.create({
		title: 'As I Am',
		releaseYear: '2007',
		image: 'fixtures/as_i_am.jpg',
		artist: art1,
		published: true,
		user: user
	}, {
		title: 'The Diary of Alicia Keys',
		releaseYear: '2003',
		image: 'fixtures/the_diary.jpg',
		artist: art1,
		published: true,
		user: user
	}, {
		title: 'Mirage',
		releaseYear: '2010',
		image: 'fixtures/Mirage.jpg',
		artist: art2,
		published: true,
		user: user
	}, {
		title: 'Intense',
		releaseYear: '2013',
		image: 'fixtures/intense.jpg',
		artist: art2,
		published: true,
		user: user
	}, {
		title: 'Load',
		releaseYear: '1996',
		image: 'fixtures/load.jpg',
		artist: art3,
		published: true,
		user: user
	}, {
		title: 'ReLoad',
		releaseYear: '1997',
		image: 'fixtures/reload.jpg',
		artist: art3,
		published: true,
		user: user
	});

	await Track.create({
		number: '3',
		title: 'Diary',
		duration: '4:45',
		album: alb2,
		published: true,
		user: user
	}, {
		number: '2',
		title: 'So Simple',
		duration: '3:49',
		album: alb2,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'Wake up',
		duration: '4:27',
		album: alb2,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'Dragon Days',
		duration: '4:36',
		album: alb2,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Nobody Not Really',
		duration: '2:56',
		album: alb2,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'No One',
		duration: '4:13',
		album: alb1,
		published: true,
		user: user
	}, {
		number: '2',
		title: 'Superwoman',
		duration: '4:34',
		album: alb1,
		published: true,
		user: user
	}, {
		number: '3',
		title: 'As I Am',
		duration: '1:52',
		album: alb1,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'Go Ahead',
		duration: '4:36',
		album: alb1,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Prelude to a Kiss',
		duration: '2:08',
		album: alb1,
		published: true,
		user: user
	}, {
		number: '3',
		title: 'Mirage',
		duration: '6:41',
		album: alb3,
		published: true,
		user: user
	}, {
		number: '2',
		title: 'Full Focus',
		duration: '4:41',
		album: alb3,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'Coming home',
		duration: '6:20',
		album: alb3,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'Feels So Good',
		duration: '3:58',
		album: alb3,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Virtual Friend',
		duration: '7:11',
		album: alb3,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'Intense',
		duration: '8:47',
		album: alb4,
		published: true,
		user: user
	}, {
		number: '2',
		title: 'Pulsar',
		duration: '6:31',
		album: alb4,
		published: true,
		user: user
	}, {
		number: '3',
		title: 'Alone',
		duration: '4:04',
		album: alb4,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'This is What it Feels Like',
		duration: '3:23',
		album: alb4,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Last Stop Before Heaven',
		duration: '6:27',
		album: alb4,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'Until It Sleeps',
		duration: '4:29',
		album: alb5,
		published: true,
		user: user
	}, {
		number: '2',
		title: 'Hero of the Day',
		duration: '4:21',
		album: alb5,
		published: true,
		user: user
	}, {
		number: '3',
		title: 'Cure',
		duration: '4:54',
		album: alb5,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'Ronnie',
		duration: '5:17',
		album: alb5,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Poor Twisted Me',
		duration: '4:00',
		album: alb5,
		published: true,
		user: user
	}, {
		number: '1',
		title: 'Fuel',
		duration: '4:29',
		album: alb6,
		published: true,
		user: user
	}, {
		number: '2',
		title: "Devil's Dance",
		duration: '5:19',
		album: alb6,
		published: true,
		user: user
	}, {
		number: '3',
		title: 'Attitude',
		duration: '5:15',
		album: alb6,
		published: true,
		user: user
	}, {
		number: '4',
		title: 'The Memory Remains',
		duration: '4:39',
		album: alb6,
		published: true,
		user: user
	}, {
		number: '5',
		title: 'Bad Seed',
		duration: '4:05',
		album: alb6,
		published: true,
		user: user
	});

	mongoose.connection.close();
};

run().catch(e => {
	mongoose.connection.close();
	throw e;
});