import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "./FormElement";

class AlbumForm extends Component {
	state = {
		title: '',
		releaseYear: '',
		image: '',
		artist: ''
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
		const artistsOptions = this.props.artists.map(a => ({title: a.name, id: a._id}));

		return (
			<Form onSubmit={this.submitFormHandler}>
				<FormElement
					type="select"
					propertyName="artist" required
					title="Artist"
					onChange={this.inputChangeHandler}
					options={artistsOptions}
					value={this.state.artist}
				/>

				<FormElement
					propertyName="title"
					title="Title"
					type="text" required
					onChange={this.inputChangeHandler}
					value={this.state.title}
				/>

				<FormElement
					propertyName="releaseYear"
					title="ReleaseYear"
					type="text" required
					onChange={this.inputChangeHandler}
					value={this.state.releaseYear}
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

export default AlbumForm;