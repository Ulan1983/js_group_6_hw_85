import {FETCH_TRACK_HISTORY_FAILURE, FETCH_TRACK_HISTORY_SUCCESS} from "../actions/trackHistoryActions";

const initialState = {
	trackHistory: null,
	trackHistoryError: null
};

const trackHistoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TRACK_HISTORY_SUCCESS:
			return {...state, trackHistory: action.trackHistory};
		case FETCH_TRACK_HISTORY_FAILURE:
			return {...state, trackHistoryError: action.error};
		default:
			return state;
	}
};

export default trackHistoryReducer;