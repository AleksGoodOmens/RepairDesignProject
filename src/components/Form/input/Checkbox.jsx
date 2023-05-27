import "../form.scss"

const Checkbox = ({ label,name, value, onChange, }) => {
	return (
		<label className='checkbox' >

			<input className='checkbox__input' onChange={onChange} checked={value} name={name} type="checkbox" required />
			<span className='checkbox__label' >{label}</span>


		</label>
  );
};

export default Checkbox
