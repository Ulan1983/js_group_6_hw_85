import React, {Component, Fragment} from 'react';
import {fetchArtists} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import ArtistsList from "../../components/ArtistsList/ArtistsList";

class Artists extends Component {
	componentDidMount() {
		this.props.fetchArtists();
	}

	render() {
		return (
			<Fragment>
				{this.props.artists.map(artist => (
					<ArtistsList
						key={artist._id}
						name={artist.name}
						id={artist._id}
						image={artist.image}
					/>
				))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
	fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);