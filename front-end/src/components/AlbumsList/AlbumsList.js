import React from 'react';
import {Card, CardBody, CardText} from "reactstrap";
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";

const AlbumsList = props => {
	return (
		<Card style={{marginTop: '10px'}}>
			<CardBody>
				<Link to={"/albums/" + props.id} style={{textDecoration: 'none', color: 'black'}}>
					<Thumbnail image={props.image}/>
					<CardText>
						<b>Название альбома: </b>
						{props.title}
					</CardText>
					<CardText>
						<b>Год выхода: </b>
						{props.releaseYear}
					</CardText>
				</Link>
			</CardBody>
		</Card>
	);
};

export default AlbumsList;