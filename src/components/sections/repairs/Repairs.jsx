import React from 'react'
import SectionIcon from '../../sectionIcon/SectionIcon'
import PageTitle from '../../pageTitle/PageTitle'

import "./repairs.scss"

import sectionIcon from "./img/Vector.svg"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import Opportunities from '../opportunities/Opportunities'

const data = [
	{
		img: img1,
		title: "redecorating",
		list: ["Dismantling of old coatings", "Wallpapering", "Painting walls and ceilings", "Laying flooring", "Replacing plumbing", "Replacing sockets and switches", "Replacing doors"],
		price: "900",
		units: "RUB / M2"
	},
	{
		img: img2,
		title: "Overhaul",
		list: [
			"Dismantling of old structures",
			"Demolition work",
			"Electrical rewiring",
			"Plumbing and pipe replacement",
			"HVAC system installation",
			"Insulation installation",
			"Wall and ceiling reconstruction",
			"Floor replacement or refinishing",
			"Kitchen and bathroom remodeling",
			"Roof repair or replacement",
			"Exterior painting and siding installation",
			"Landscaping and outdoor improvements",
		],
		price: "1800",
		units: "RUB / M2"
	},
	{
		img: img3,
		title: "Designer Repair",
		list: [
			"Interior design consultation",
			"Space planning and layout",
			"Color scheme selection",
			"Furniture and decor selection",
			"Lighting design",
			"Custom cabinetry and millwork",
			"Flooring and wall treatments",
			"Window treatments",
			"Artwork and accessories",
			"Project management",
			"Styling and finishing touches",
		],
		price: "4000",
		units: "RUB / M2"
	}
]



function Repairs() {
	return (
		<section className='repair'>
			<PageTitle className="repair__title">Types of repair</PageTitle>
			<SectionIcon>
				<img src={sectionIcon} alt="repair" />
			</SectionIcon>
				<div className='container repair__cards'>
					{data.map(card => {
						return <div className='repair__card' key={card.title}>
							<img className='repair__img' src={card.img} alt={card.title} />
							
							<ul className='repair__list'>
							<h3 className='repair__title'>{ card.title}</h3>
								{card.list.map((item, index) => {
									return <li className='repair__li' key={index}>{item}</li>
								})}
							<div className='repair__bottom'>from {card.price} { card.units}</div>

							</ul>
						</div>
					})}</div>
			<Opportunities/>
		</section>
	)
}

export default Repairs