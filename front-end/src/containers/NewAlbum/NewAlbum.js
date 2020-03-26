import React, {Component, Fragment} from 'react';
import {createAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import AlbumForm from "../../components/UI/Form/AlbumForm";
import {fetchArtists} from "../../store/actions/artistsActions";

class NewAlbum extends Component {
	componentDidMount() {
		this.props.fetchArtists();
	}

	createAlbum = albumData => {
		this.props.createAlbum(albumData);
	};

	render() {
		return (
			<Fragment>
				<h3>Create new album</h3>
				<AlbumForm
					artists={this.props.artists}
					onSubmit={this.createAlbum}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
	createAlbum: albumData => dispatch(createAlbum(albumData)),
	fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAlbum);