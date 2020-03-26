import {push} from "connected-react-router";

import axiosApi from "../../axiosApi";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const CREATE_TRACK_SUCCESS = 'CREATE_TRACK_SUCCESS';
export const CREATE_TRACK_ERROR = 'CREATE_TRACK_ERROR';

export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});

export const createTrackSuccess = () => ({type: CREATE_TRACK_SUCCESS});
export const createTrackError = error => ({type: CREATE_TRACK_ERROR, error});

// export const fetchTracks = () => {
// 	return async (dispatch) => {
// 		try {
// 			const response = await axiosApi.get('/tracks');
// 			dispatch(fetchTracksSuccess(response.data));
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// };

export const fetchAlbumTracks = id => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/tracks/?album=' + id);
			dispatch(fetchTracksSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};

export const createTrack = trackData => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/tracks', trackData);
			dispatch(createTrackSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(createTrackError(error));
		}
	}
};