import React, {Component, Fragment} from 'react';
import {fetchTrackHistory} from "../../store/actions/trackHistoryActions";
import {connect} from "react-redux";
import TrackHistoryList from "../../components/TrackHistoryList/TrackHistoryList";

class TrackHistory extends Component {
	componentDidMount() {
		this.props.fetchTrackHistory();
	}

	render() {
		return (
			<Fragment>
				<h3>Track History</h3>
				{this.props.trackHistory && this.props.trackHistory.map(trackHist => (
					<TrackHistoryList
						key={trackHist._id}
						artist={trackHist.track.album.artist.name}
						track={trackHist.track}
						datetime={trackHist.datetime}
					/>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users.user,
	trackHistory: state.trackHistories.trackHistory
});

const mapDispatchToProps = dispatch => ({
	fetchTrackHistory: () => dispatch(fetchTrackHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);