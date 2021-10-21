import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonal } from '../App';
import { useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap';

export const formStyle = {
	display: 'flex',
	'flex-direction': 'column',
	width: '80vw',
};

function PersonalDetails() {
	const [personalInfo, setpersonalInfo] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	const handleInput = (e) => {
		console.log(e.target.id);
		const newObj = {};
		newObj[e.target.id] = e.target.value;
		setpersonalInfo({ ...personalInfo, ...newObj });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(personalInfo);
		dispatch(addPersonal(personalInfo));
		history.push('/account');
	};

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Form.Group className='mb-3'>
				<Form.Label>First Name</Form.Label>
				<Form.Control id='firstName' onChange={(e) => handleInput(e)} required />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Last Name</Form.Label>
				<Form.Control id='lastName' onChange={(e) => handleInput(e)} required />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Address</Form.Label>
				<Form.Control id='address' onChange={(e) => handleInput(e)} required />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>zipcode</Form.Label>
				<Form.Control id='zipcode' onChange={(e) => handleInput(e)} required />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>pincode</Form.Label>
				<Form.Control id='pincode' onChange={(e) => handleInput(e)} required />
			</Form.Group>

			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
		// <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
		// 	<label htmlFor='first-name'>First Name</label>
		// 	<input type='text' id='firstName' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='last-name'>Last Name</label>
		// 	<input type='text' id='lastName' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='address'>Address</label>
		// 	<input type='text' id='address' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='zipcode'>Zipcode</label>
		// 	<input type='number' id='zipcode' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='zipcode'>Pincode</label>
		// 	<input type='number' id='pincode' onChange={(e) => handleInput(e)} minLength={10} required />
		// 	<button type='submit'>Submit</button>
		// </form>
	);
}

export default PersonalDetails;
