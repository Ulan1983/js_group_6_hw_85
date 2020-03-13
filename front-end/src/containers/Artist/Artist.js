import React, {Component, Fragment} from 'react';
import {fetchArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import {fetchArtistAlbums} from "../../store/actions/albumsActions";
import AlbumsList from "../../components/AlbumsList/AlbumsList";

class Artist extends Component {
	componentDidMount() {
		this.props.fetchArtist(this.props.match.params.id);
		this.props.fetchArtistAlbums(this.props.match.params.id);
	}

	render() {
		return (
			<Fragment>
				<h3><b>Исполнитель: </b>{this.props.artist}</h3>
				{this.props.albums.map(album => (
					<AlbumsList
						key={album._id}
						title={album.title}
						id={album._id}
						releaseYear={album.releaseYear}
						image={album.image}
					/>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	artist: state.artists.artist,
	albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
	fetchArtist: id => dispatch(fetchArtist(id)),
	fetchArtistAlbums: id => dispatch(fetchArtistAlbums(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Artist);