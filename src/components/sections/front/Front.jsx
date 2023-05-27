import React from 'react'
import Button from '../../UI/buttons/Button'

import "./front.scss"

const data = {
	title: "Turnkey Repair in the city of ",
	city: "Rostov-on-Don",
	subtitle: "Get ready-made turnkey repairs on time with work time saving up to 45 days and 20% from cost of materials due to the organization of work"
}


function Front() {
	const {title, city, subtitle} = data
	return (
		<section className='front'>
			<div className='container'>
				<div className='front__wrapper'>
					<h1 className='front__title'>{title}<span>{city}</span></h1>
					<p className='front__subtitle'>{subtitle}</p>
					<div className='front__btns'>
						<Button>CALCULATE THE COST</Button>
						<Button>SUBMIT YOUR APPLICATION</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Front