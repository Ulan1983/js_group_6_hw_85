import axiosApi from "../../axiosApi";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const fetchArtistSuccess = artist => ({type: FETCH_ARTIST_SUCCESS, artist});

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