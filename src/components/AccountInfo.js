import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addAccount } from '../App';
import { formStyle } from './PersonalDetails';
import { Form,Button } from 'react-bootstrap';


function AccountInfo() {
	const [AccountInfo, setAccountInfo] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	const handleInput = (e) => {
		console.log(e.target.id);
		const newObj = {};
		newObj[e.target.id] = e.target.value;
		setAccountInfo({ ...AccountInfo, ...newObj });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(AccountInfo);
		dispatch(addAccount(AccountInfo));
		history.push('/success');
	};

	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
		<Form.Group className='mb-3'>
			<Form.Label>Bank Name</Form.Label>
			<Form.Control id='bankName' onChange={(e) => handleInput(e)} required />
		</Form.Group>
		<Form.Group className='mb-3'>
			<Form.Label>Account Number</Form.Label>
			<Form.Control id='accountNumber' onChange={(e) => handleInput(e)} required />
		</Form.Group>
		<Form.Group className='mb-3'>
			<Form.Label>Bank Branch</Form.Label>
			<Form.Control id='branch' onChange={(e) => handleInput(e)} required />
		</Form.Group>
		<Form.Group className='mb-3'>
			<Form.Label>IFSC code</Form.Label>
			<Form.Control id='ifscCode' onChange={(e) => handleInput(e)} required />
		</Form.Group>

		<Button variant='primary' type='submit'>
			Submit
		</Button>
	</Form>



		// <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
		// 	<label htmlFor='bank-name'>Bank Name</label>
		// 	<input type='text' id='bankName' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='account-number'>Account Number</label>
		// 	<input
		// 		type='number'
		// 		id='accountNumber'
		// 		onChange={(e) => handleInput(e)}
		// 		required
		// 		minLength={12}
		// 	/>
		// 	<label htmlFor='branch'>Bank Branch</label>
		// 	<input type='text' id='branch' onChange={(e) => handleInput(e)} required />
		// 	<label htmlFor='IFSC-code'>IFSC code</label>
		// 	<input type='text' id='ifscCode' onChange={(e) => handleInput(e)} required />
		// 	<button type='submit'>Submit</button>
		// </form>

		
	);
}

export default AccountInfo;
