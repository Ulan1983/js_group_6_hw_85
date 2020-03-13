import axiosApi from "../../axiosApi";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const fetchAlbumSuccess = album => ({type: FETCH_ALBUM_SUCCESS, album});

// export const fetchAlbums = () => {
// 	return async (dispatch) => {
// 		try {
// 			const response = await axiosApi.get('/albums');
// 			dispatch(fetchAlbumsSuccess(response.data));
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// };

export const fetchArtistAlbums = id => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/albums/?artist=' + id);
			dispatch(fetchAlbumsSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};

export const fetchAlbum = id => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/albums/' + id);
			dispatch(fetchAlbumSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};