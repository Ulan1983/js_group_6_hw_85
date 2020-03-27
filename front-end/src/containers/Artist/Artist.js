import React, {Component, Fragment} from 'react';
import {fetchArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import {deleteAlbum, fetchArtistAlbums, publishAlbum} from "../../store/actions/albumsActions";
import AlbumsList from "../../components/AlbumsList/AlbumsList";
import ShowTo from "../../hoc/ShowTo";

class Artist extends Component {
	componentDidMount() {
		this.props.fetchArtist(this.props.match.params.id);
		this.props.fetchArtistAlbums(this.props.match.params.id);
	}

	publishAlbum = async (id) => {
		await this.props.publishAlbum(id);
	};

	render() {
		return (
			<Fragment>
				<h3><b>Исполнитель: </b>{this.props.artist}</h3>
				{this.props.albums && this.props.albums.map(album => (
					album.published ?
					<AlbumsList
						key={album._id}
						title={album.title}
						id={album._id}
						releaseYear={album.releaseYear}
						image={album.image}
						published={album.published}
						delete={() => this.props.deleteAlbum(album._id)}
						publish={() => this.publishAlbum(album._id)}
					/> :
						<ShowTo role='admin' key={album._id}>
							<AlbumsList
								title={album.title}
								id={album._id}
								releaseYear={album.releaseYear}
								image={album.image}
								published={album.published}
								delete={() => this.props.deleteAlbum(album._id)}
								publish={() => this.publishAlbum(album._id)}
							/>
						</ShowTo>
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
	fetchArtistAlbums: id => dispatch(fetchArtistAlbums(id)),
	deleteAlbum: id => dispatch(deleteAlbum(id)),
	publishAlbum: id => dispatch(publishAlbum(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Artist);