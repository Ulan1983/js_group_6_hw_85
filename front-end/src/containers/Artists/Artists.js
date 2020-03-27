import React, {Component, Fragment} from 'react';
import {deleteArtist, fetchArtists, publishArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import ShowTo from "../../hoc/ShowTo";

class Artists extends Component {
	componentDidMount() {
		this.props.fetchArtists();
	}

	deleteArtist = async (id) => {
		await this.props.deleteArtist(id);
		await this.props.fetchArtists();
	};

	publishArtist = async (id) => {
		await this.props.publishArtist(id);
	};

	render() {
		return (
			<Fragment>
				{this.props.artists && this.props.artists.map(artist => (
					artist.published ?
					<ArtistsList
						key={artist._id}
						name={artist.name}
						id={artist._id}
						image={artist.image}
						published={artist.published}
						delete={() => this.deleteArtist(artist._id)}
						publish={() => this.publishArtist(artist._id)}
					/> :
						<ShowTo role='admin' key={artist._id}>
							<ArtistsList
								name={artist.name}
								id={artist._id}
								image={artist.image}
								published={artist.published}
								delete={() => this.deleteArtist(artist._id)}
								publish={() => this.publishArtist(artist._id)}
							/>
						</ShowTo>
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
	deleteArtist: id => dispatch(deleteArtist(id)),
	publishArtist: id => dispatch(publishArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);