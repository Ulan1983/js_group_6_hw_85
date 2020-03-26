import React, {Component, Fragment} from 'react';
import {createTrack} from "../../store/actions/tracksActions";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {connect} from "react-redux";
import TrackForm from "../../components/UI/Form/TrackForm";

class NewTrack extends Component {
	componentDidMount() {
		this.props.fetchAlbums();
	}

	createTrack = trackData => {
		this.props.createTrack(trackData);
	};

	render() {
		return (
			<Fragment>
				<h3>Create new track</h3>
				<TrackForm
					albums={this.props.albums}
					onSubmit={this.createTrack}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
	createTrack: trackData => dispatch(createTrack(trackData)),
	fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTrack);