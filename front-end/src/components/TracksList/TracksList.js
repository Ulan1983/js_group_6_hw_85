import React from 'react';
import {Button, Card, CardBody, CardText} from "reactstrap";
import ShowTo from "../../hoc/ShowTo";

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
				<ShowTo role='admin'>
						<Button
							type="submit"
							color="primary"
							style={{marginLeft: '20px'}}
							onClick={props.delete}
						>
							Delete
						</Button>
				</ShowTo>
			</CardBody>
		</Card>
	);
};

export default TracksList;