import {FETCH_ARTIST_SUCCESS, FETCH_ARTISTS_SUCCESS} from "../actions/artistsActions";

const initialState = {
	artists: [],
	artist: null
};

const artistsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ARTISTS_SUCCESS:
			return {...state, artists: action.artists};
		case FETCH_ARTIST_SUCCESS:
			return {...state, artist: action.artist.name};
		default:
			return state;
	}
};

export default artistsReducer;