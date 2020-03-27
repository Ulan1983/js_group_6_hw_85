import {push} from "connected-react-router";

import axiosApi from "../../axiosApi";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const CREATE_ALBUM_ERROR = 'CREATE_ALBUM_ERROR';

export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
export const DELETE_ALBUM_ERROR = 'DELETE_ALBUM_ERROR';

export const PUBLISH_ALBUM_SUCCESS = 'PUBLISH_ALBUM_SUCCESS';
export const PUBLISH_ALBUM_ERROR = 'PUBLISH_ALBUM_ERROR';

export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const fetchAlbumSuccess = album => ({type: FETCH_ALBUM_SUCCESS, album});

export const createAlbumSuccess = () => ({type: CREATE_ALBUM_SUCCESS});
export const createAlbumError = error => ({type: CREATE_ALBUM_ERROR, error});

export const deleteAlbumSuccess = () => ({type: DELETE_ALBUM_SUCCESS});
export const deleteAlbumError = error => ({type: DELETE_ALBUM_ERROR, error});

export const publishAlbumSuccess = () => ({type: PUBLISH_ALBUM_SUCCESS});
export const publishAlbumError = error => ({type: PUBLISH_ALBUM_ERROR, error});

export const fetchAlbums = () => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/albums');
			dispatch(fetchAlbumsSuccess(response.data));
		} catch (error) {
			console.error(error);
		}
	}
};

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

export const createAlbum = albumData => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/albums', albumData);
			dispatch(createAlbumSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(createAlbumError(error));
		}
	}
};

export const deleteAlbum = id => {
	return async (dispatch) => {
		try {
			await axiosApi.delete('/albums/' + id);
			dispatch(deleteAlbumSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(deleteAlbumError(error));
		}
	}
};

export const publishAlbum = id => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/albums/' + id + '/published');
			dispatch(publishAlbumSuccess());
			dispatch(push('/'));
		} catch (error) {
			dispatch(publishAlbumError(error));
		}
	}
};