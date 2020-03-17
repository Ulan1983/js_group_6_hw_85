import React from 'react';
import {Card, CardBody, CardText} from "reactstrap";

const TrackHistoryList = props => {
	return (
		<Card style={{marginTop: '10px'}}>
			<CardBody>
				<CardText><b>Исполнитель: </b>{props.artist}</CardText>
				<CardText><b>Название трека: </b>{props.track.title}</CardText>
				<CardText><b>Дата и время: </b>{props.datetime}</CardText>
			</CardBody>
		</Card>
	);
};

export default TrackHistoryList;