import React from 'react';
import {Card, CardBody, CardText} from "reactstrap";

const TracksList = props => {
	return (
		<Card style={{marginTop: '10px'}}>
			<CardBody>
					<CardText>
						<b>Номер: </b>
						{props.number}
					</CardText>
					<CardText>
						<b>Название: </b>
						{props.title}
					</CardText>
				<CardText>
					<b>Длительность: </b>
					{props.duration}
				</CardText>
			</CardBody>
		</Card>
	);
};

export default TracksList;