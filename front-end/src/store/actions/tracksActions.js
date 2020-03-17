import axiosApi from "../../axiosApi";
import {push} from "connected-react-router";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const fetchTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});

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
	return async (dispatch, getState) => {
		try {
			const user = getState().users.user;

			if (!user) {
				dispatch(push('/login'));
			}

			const response = await axiosApi.get('/tracks/?album=' + id, {headers: {'Authorization': 'Token ' + user.token}});
			dispatch(fetchTracksSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};