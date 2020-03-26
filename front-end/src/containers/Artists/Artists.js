import React, {Component, Fragment} from 'react';
import {deleteArtist, fetchArtists} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import ArtistsList from "../../components/ArtistsList/ArtistsList";

class Artists extends Component {
	componentDidMount() {
		this.props.fetchArtists();
	}

	deleteArtist = async (id) => {
		await this.props.deleteArtist(id);
		await this.props.fetchArtists();
	};

	render() {
		return (
			<Fragment>
				{this.props.artists && this.props.artists.map(artist => (
					<ArtistsList
						key={artist._id}
						name={artist.name}
						id={artist._id}
						image={artist.image}
						delete={() => this.deleteArtist(artist._id)}
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
	fetchArtists: () => dispatch(fetchArtists()),
	deleteArtist: id => dispatch(deleteArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);