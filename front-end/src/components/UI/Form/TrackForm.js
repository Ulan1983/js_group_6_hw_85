import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "./FormElement";

class TrackForm extends Component {
	state = {
		title: '',
		duration: '',
		album: ''
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	submitFormHandler = event => {
		event.preventDefault();

		this.props.onSubmit(this.state);
	};
	render() {
		const albumsOptions = this.props.albums.map(a => ({title: a.title, id: a._id}));

		return (
			<Form onSubmit={this.submitFormHandler}>
				<FormElement
					type="select"
					propertyName="album" required
					title="Album"
					onChange={this.inputChangeHandler}
					options={albumsOptions}
					value={this.state.album}
				/>

				<FormElement
					propertyName="title"
					title="Title"
					type="text" required
					onChange={this.inputChangeHandler}
					value={this.state.title}
				/>

				<FormElement
					propertyName="duration"
					title="Duration"
					type="text" required
					onChange={this.inputChangeHandler}
					value={this.state.duration}
				/>

				<FormGroup row>
					<Col sm={{offset: 2, size: 10}}>
						<Button type="submit" color="primary">Create</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

export default TrackForm;