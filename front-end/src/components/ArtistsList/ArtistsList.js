import React from 'react';
import {Button, Card, CardBody} from "reactstrap";
import Thumbnail from "../Thumbnail/Thumbnail";
import {Link} from "react-router-dom";
import ShowTo from "../../hoc/ShowTo";

const ArtistsList = props => {
	return (
		<Card style={{marginTop: '10px'}}>
			<CardBody>
				<Link to={"/artists/" + props.id} style={{textDecoration: 'none', color: 'black'}}>
					<Thumbnail image={props.image}/>
					<b>{props.name}</b>
				</Link>
				<ShowTo role='admin'>
					<Button
						type="submit"
						color="primary"
						style={{marginLeft: '20px'}}
						onClick={props.delete}
					>
						Delete
					</Button>
					{!props.published &&
					<Button
						type="submit"
						color="primary"
						style={{marginLeft: '20px'}}
						onClick={props.publish}
					>
						Publish
					</Button>
					}
				</ShowTo>
			</CardBody>
		</Card>
	);
};

export default ArtistsList;