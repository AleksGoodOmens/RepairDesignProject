import React, { useState } from 'react'
import Button from '../UI/buttons/Button'

import "./form.scss"
import Input from './input/input';
import Checkbox from './input/Checkbox';

const data = {
	placeHolderForName: "What is your name:",
	placeHolderForPhone: "Your phone number:",
	labelForCheckbox: "I agree to the processing of personal data",
	labelForEmail: "Email",
	placeHolderForEmail: "Your email"
}

function Form({ children, buttonText = "submit", email = false, question=false }) {
	const [formData, setFormData] = useState({
    email: '',
    name: '',
		phone: '',
		question:"",
    checkbox: false
  });

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		const newValue = type === 'checkbox' ? checked : value;

		setFormData((prevFormData) => ({
      ...prevFormData,
			[name]: newValue,			
		}));

		
  };
	
	const handleSubmitted = (e) => {
		e.preventDefault()
		console.log(formData)
		
	}

	return (
		<form className='form' onSubmit={(e) => handleSubmitted(e)}>
			{children}
			<Input 
       label="name"
			 type="text"
			 name="name"
			 value={formData.text}
			 onChange={handleChange}
			 placeholder={data.placeHolderForName}
      />
			<Input 
      	label="phone"
      	type="phone"
				name="phone"
      	value={formData.phone}
				onChange={handleChange}
				placeholder={data.placeHolderForPhone}
			/>

			{email && <Input 
        label={data.labelForEmail}
        type="email"
				name="email"
				id="email"
        value={formData.email}
				onChange={handleChange}
				placeholder={data.placeHolderForEmail}
			/>}
			{question && <Input
				label="Question:"
				placeholder={"I want to know:"}
				type="text"
				name="question"
				id="question"
				value={formData.question}
				onChange={handleChange}
			/>}
			
			
			<Button>{buttonText}</Button>
			<Checkbox
				label={data.labelForCheckbox}
				name="checkbox"
        value={formData.checkbox}
				onChange={handleChange}
				// placeholder={data.placeHolderForPhone}
			/>

		</form>
		
	)
}

export default Form

