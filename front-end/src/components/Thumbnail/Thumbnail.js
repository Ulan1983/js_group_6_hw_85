import React from 'react';

import imageNotAvailable from '../../assets/images/image_not_available.jpg';
import {apiURL} from "../../constants";

const styles = {
	width: '120px',
	height: '120px',
	marginRight: '10px'
};

const Thumbnail = props => {
	let image = imageNotAvailable;

	if (props.image) {
		image = apiURL + '/uploads/' + props.image;
	}

	return <img alt="product" src={image} style={styles} className="img-thumbnail" />;
};

export default Thumbnail;