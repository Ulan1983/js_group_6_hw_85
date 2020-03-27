import React, {Component, Fragment} from 'react';
import {fetchAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import {deleteTrack, fetchAlbumTracks, publishTrack} from "../../store/actions/tracksActions";
import TracksList from "../../components/TracksList/TracksList";
import {addTrackToTrackHistory} from "../../store/actions/trackHistoryActions";
import ShowTo from "../../hoc/ShowTo";


class Album extends Component {

	componentDidMount() {
		this.props.fetchAlbum(this.props.match.params.id);
		this.props.fetchAlbumTracks(this.props.match.params.id);
	}

	submitTrackToTrackHistory = trackData => {
		this.props.addTrackToTrackHistory({track: trackData});
	};

	publishTrack = async (id) => {
		await this.props.publishTrack(id);
	};

	render() {
		return (
			<Fragment>
				<h3><b>Исполнитель: </b>{this.props.artist}</h3>
				<h3><b>Название альбома: </b>{this.props.album}</h3>
				<h3><b>Список треков: </b></h3>
				{this.props.tracks && this.props.tracks.map(track => (
					track.published ?
					<TracksList
						key={track._id}
						id={track._id}
						number={track.number}
						title={track.title}
						duration={track.duration}
						published={track.published}
						onClick={() => this.submitTrackToTrackHistory(track._id)}
						delete={() => this.props.deleteTrack(track._id)}
						publish={() => this.publishTrack(track._id)}
					/> :
						<ShowTo role='admin' key={track._id}>
							<TracksList
								id={track._id}
								number={track.number}
								title={track.title}
								duration={track.duration}
								published={track.published}
								onClick={() => this.submitTrackToTrackHistory(track._id)}
								delete={() => this.props.deleteTrack(track._id)}
								publish={() => this.publishTrack(track._id)}
							/>
						</ShowTo>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	artist: state.artists.artist,
	album: state.albums.album,
	tracks: state.tracks.tracks,
	users: state.users.user
});

const mapDispatchToProps = dispatch => ({
	fetchAlbum: id => dispatch(fetchAlbum(id)),
	fetchAlbumTracks: id => dispatch(fetchAlbumTracks(id)),
	addTrackToTrackHistory: trackData => dispatch(addTrackToTrackHistory(trackData)),
	deleteTrack: id => dispatch(deleteTrack(id)),
	publishTrack: id => dispatch(publishTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);