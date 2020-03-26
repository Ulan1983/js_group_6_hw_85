import React from 'react';
import {Button, Card, CardBody, CardText} from "reactstrap";
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";
import ShowTo from "../../hoc/ShowTo";

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
				<ShowTo role='admin'>
						<Button
							type="submit"
							color="primary"
							style={{marginLeft: '20px', marginTop: '10px'}}
							onClick={props.delete}
						>
							Delete
						</Button>
				</ShowTo>
			</CardBody>
		</Card>
	);
};

export default AlbumsList;