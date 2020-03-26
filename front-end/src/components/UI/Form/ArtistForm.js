import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "./FormElement";


class ArtistForm extends Component {
	state = {
		name: '',
		image: ''
	};

	inputChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	fileChangeHandler = event => {
		this.setState({
			[event.target.name]: event.target.files[0]
		});
	};

	submitFormHandler = event => {
		event.preventDefault();

		const formData = new FormData();

		Object.keys(this.state).forEach(key => {
			formData.append(key, this.state[key]);
		});

		this.props.onSubmit(formData);
	};

	render() {
		return (
			<Form onSubmit={this.submitFormHandler}>
				<FormElement
					propertyName="name"
					title="Name"
					type="text" required
					onChange={this.inputChangeHandler}
					value={this.state.name}
				/>

				<FormElement
					propertyName="image"
					title="Image"
					type="file"
					onChange={this.fileChangeHandler}
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

export default ArtistForm;