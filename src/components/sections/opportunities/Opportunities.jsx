import React from 'react'
import Form from "../../Form/Form"

import "./opportunities.scss"

import pig from "./img/pig.svg"

const opportunities = {
	list: ["Our specialist will arrive for measurements per day contact, or appoint a date convenient for you", "Free metering", "Free consultation", "Get a cost estimate and the timing of your future repairs"],
	pig: pig,
	pigComment: "Help save 10 - 20% of the cost of materials"
}

function Opportunities() {
	return (
		<section className='opportunities'>
			<div className='opportunities__bg'>
					<div className="opportunities__container container">
						<div className="opportunities__item">
						<ul className="opportunities__list">
							{opportunities.list.map((item, index) => {
								return (<li className="opportunities__list-item" key={index}><div className='opportunities__item-number'>{"0" + (1+index)}</div>{ item}</li>)
							})}
							</ul>
					</div>
					<div className="opportunities__item">
						<Form buttonText='Call the measurer' email>{ <h3 className='opportunities__title'>Leave a request for free departure of the measurer</h3>}</Form>
					</div>
					<div className="opportunities__pig">
					<div className="opportunities__pig-icon"><img src={opportunities.pig} alt="piggy"  /></div>
					<span>{opportunities.pigComment}</span>
				</div>
				</div>
			</div>
			
		</section>
	)
}

export default Opportunities