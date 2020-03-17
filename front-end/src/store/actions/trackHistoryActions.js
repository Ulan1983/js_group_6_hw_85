import {push} from "connected-react-router";
import axiosApi from "../../axiosApi";

export const FETCH_TRACK_HISTORY_SUCCESS = 'FETCH_TRACK_HISTORY_SUCCESS';
export const FETCH_TRACK_HISTORY_FAILURE = 'FETCH_TRACK_HISTORY_FAILURE';

export const ADD_TRACK_TO_TRACK_HISTORY_SUCCESS = 'ADD_TRACK_TO_TRACK_HISTORY_SUCCESS';
export const ADD_TRACK_TO_TRACK_HISTORY_FAILURE = 'ADD_TRACK_TO_TRACK_HISTORY_FAILURE';

export const fetchTrackHistorySuccess = trackHistory => ({type: FETCH_TRACK_HISTORY_SUCCESS, trackHistory});
export const fetchTrackHistoryFailure = error => ({type: FETCH_TRACK_HISTORY_FAILURE, error});

export const addTrackToTrackHistorySuccess = () => ({type: ADD_TRACK_TO_TRACK_HISTORY_SUCCESS});
export const addTrackToTrackHistoryFailure = error => ({type: ADD_TRACK_TO_TRACK_HISTORY_FAILURE, error});

export const fetchTrackHistory = () => {
	return async (dispatch, getState) => {
		try {
			const user = getState().users.user;

			if (!user) {
				dispatch(push('/login'));
			}
			const response = await axiosApi.get('/trackHistories', {headers: {'Authorization': 'Token ' + user.token}});
			dispatch(fetchTrackHistorySuccess(response.data));
		} catch (error) {
			dispatch(fetchTrackHistoryFailure(error.response.data));
		}
	}
};

export const addTrackToTrackHistory = trackData => {
	return async (dispatch, getState) => {
		try {
			const user = getState().users.user;

			if (!user) {
				dispatch(push('/login'));
			}
			await axiosApi.post('/trackHistories', trackData, {headers: {'Authorization': 'Token ' + user.token}});
			dispatch(addTrackToTrackHistorySuccess());
		} catch (error) {
			dispatch(addTrackToTrackHistoryFailure(error.response.data));
		}
	}
};