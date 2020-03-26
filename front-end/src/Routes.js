import React from 'react';

import {Route, Switch} from "react-router-dom";

import Artists from "./containers/Artists/Artists";
import TrackHistory from "./containers/TrackHistory/TrackHistory";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Artist from "./containers/Artist/Artist";
import Album from "./containers/Album/Album";
import NewArtist from "./containers/NewArtist/NewArtist";
import NewAlbum from "./containers/NewAlbum/NewAlbum";
import NewTrack from "./containers/NewTrack/NewTrack";


const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Artists} />
			<Route path="/trackHistory" exact component={TrackHistory} />
			<Route path="/register" exact component={Register} />
			<Route path="/login" exact component={Login} />
			<Route path="/artists/new" exact component={NewArtist}/>
			<Route path="/albums/new" exact component={NewAlbum}/>
			<Route path="/tracks/new" exact component={NewTrack}/>
			<Route path="/artists/:id" exact component={Artist} />
			<Route path="/albums/:id" exact component={Album} />
		</Switch>
	);
};

export default Routes;