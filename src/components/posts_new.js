import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a new post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
					<label htmlFor="">Title</label>
					<input {...title} type="text" className="form-control" />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
					<label htmlFor="">Categories</label>
					<input {...categories} type="text" className="form-control" />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
					<label htmlFor="">Content</label>
					<textarea {...content} className="form-control" />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	};
}

function validate(values) {
	const errors = {};

	if(!values.title) {
		errors.title = 'Enter a username';
	}

	if(!values.categories) {
		errors.categories = 'Enter categories';
	}

	if(!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);