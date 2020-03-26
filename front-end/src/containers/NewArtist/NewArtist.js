import React, {Component, Fragment} from 'react';
import {createArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import ArtistForm from "../../components/UI/Form/ArtistForm";

class NewArtist extends Component {
	createArtist = artistData => {
		this.props.createArtist(artistData);
	};

	render() {
		return (
			<Fragment>
				<h3>Create new artist</h3>
				<ArtistForm
					onSubmit={this.createArtist}
				/>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	createArtist: artistData => dispatch(createArtist(artistData))
});

export default connect(null, mapDispatchToProps)(NewArtist);