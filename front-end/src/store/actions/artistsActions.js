import {push} from "connected-react-router";

import axiosApi from "../../axiosApi";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';

export const CREATE_ARTIST_SUCCESS = 'CREATE_ARTIST_SUCCESS';
export const CREATE_ARTIST_ERROR = 'CREATE_ARTIST_ERROR';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchArtistSuccess = artist => ({type: FETCH_ARTIST_SUCCESS, artist});

export const createArtistSuccess = () => ({type: CREATE_ARTIST_SUCCESS});
export const createArtistError = error => ({type: CREATE_ARTIST_ERROR, error});

export const fetchArtists = () => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/artists');
			dispatch(fetchArtistsSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};

export const fetchArtist = id => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/artists/' + id);
			dispatch(fetchArtistSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};

export const createArtist = artistData => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/artists', artistData);
			dispatch(createArtistSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(createArtistError(error));
		}
	}
};