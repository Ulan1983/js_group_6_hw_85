import React from 'react';
import {Card, CardBody} from "reactstrap";
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";

const ArtistsList = props => {
	return (
		<Card style={{marginTop: '10px'}}>
			<CardBody>
				<Link to={"/artists/" + props.id} style={{textDecoration: 'none', color: 'black'}}>
					<Thumbnail image={props.image}/>
					<b>{props.name}</b>
				</Link>
			</CardBody>
		</Card>
	);
};

export default ArtistsList;