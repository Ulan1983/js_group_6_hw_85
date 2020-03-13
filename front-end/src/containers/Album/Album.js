import React, {Component, Fragment} from 'react';
import {fetchAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {fetchAlbumTracks} from "../../store/actions/tracksActions";
import TracksList from "../../components/TracksList/TracksList";

class Album extends Component {
	componentDidMount() {
		this.props.fetchAlbum(this.props.match.params.id);
		this.props.fetchAlbumTracks(this.props.match.params.id);
	}

	render() {
		return (
			<Fragment>
				<h3><b>Исполнитель: </b>{this.props.artist}</h3>
				<h3><b>Название альбома: </b>{this.props.album}</h3>
				<h3><b>Список треков: </b></h3>
				{this.props.tracks.map(track => (
					<TracksList
						key={track._id}
						id={track._id}
						number={track.number}
						title={track.title}
						duration={track.duration}
					/>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	artist: state.artists.artist,
	album: state.albums.album,
	tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
	fetchAlbum: id => dispatch(fetchAlbum(id)),
	fetchAlbumTracks: id => dispatch(fetchAlbumTracks(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);