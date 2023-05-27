import React from 'react';
import "../form.scss"

const Input = ({name, label, type,  value, onChange, placeholder }) => {
  return (
    <div className='form__inputs'>
      <label className='form__label' htmlFor={name}>{label}:</label>
			<input
				className='form__input'
        type={type}
        id={name}
        name={name}
        value={value}
				onChange={onChange}
				placeholder={placeholder}
      />
    </div>
  );
};

export default Input;