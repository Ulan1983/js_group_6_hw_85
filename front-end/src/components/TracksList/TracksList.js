import React from 'react';
import {Button, Card, CardBody, CardText} from "reactstrap";

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
				<Button type="submit"
						color="primary"
						onClick={props.onClick}
				>
					Добавить в историю
				</Button>
			</CardBody>
		</Card>
	);
};

export default TracksList;