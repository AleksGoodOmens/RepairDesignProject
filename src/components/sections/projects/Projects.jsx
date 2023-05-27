import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import "./projects.scss"

import { Navigation,  EffectFade, Pagination } from 'swiper';

import admiral from "./slides/admiral/1.jpg"
import sochiThieves from "./slides/sochi/1.jpg"

import nextArrow from "./img/next.svg"
import prevArrow from "./img/prev.svg"

const slides = [
	{
		name: "rostov-on-don. admiral",
		img: admiral,
		description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
		city: "Rostov-on-Don LCD admiral",
		area: "81 m2",
		time: "3.5 months",
		cost:"Upon request"
	},
	{
		name: "Sochi Thieves",
		img: sochiThieves,
		description: "This one-bedroom flat is located in the beautiful city of Sochi and offers a comfortable living space of 65 square meters. It is an ideal choice for singles or couples who value modern amenities and a convenient location.",
		city: "Sochi LCD Sochi Thieves",
		area: "65 m2",
		time: "4 months",
		cost:"Upon request"
	},
	{
		name: "Petrovskiy hights",
		img:" https://i.pinimg.com/originals/1c/17/59/1c1759f139977480a803b7a76abb0fed.jpg",
		description: "The flat measures 55 square meters and is situated on the second floor of the building. It is conveniently located only 20 minutes away from the central city area.",
		city: "Simferopol LCDPetrovskiy hights",
		area: "55 m2",
		time: "3 months",
		cost:"Upon request"
	}
]

function Projects() {
	const prefRef =useRef(".slide__prev")
	const nextRef = useRef(".slide__next")
	
	const prefRefSm =useRef(".arrowPrev")
	const nextRefSm =useRef(".arrowNext")
	const [swiper, setSwiper] = useState(null)


	return (<div className='projects'>
	<div className='container'>
	
	<Swiper className="projects__slider"
		
		// install Swiper modules
		onSwiper={(s) => {
			setSwiper(s)
		}}
		modules={[Navigation, EffectFade, Pagination]}
		effect={"fade"}
		loop={"true"}
		fadeEffect={{
			crossFade:true
		}}
		slidesPerView={1}
		navigation={{
			prevEl: prefRefSm.current,
			nextEl: nextRefSm.current
		}}
		pagination={{
			clickable: true,
			el: ".slide__pagination",
			bulletClass: 'slide__bullet',
			bulletActiveClass: 'slide__bullet-active',
		}}
		breakpoints={{
			768: {
				navigation: {
					prevEl: prefRef.current,
					nextEl: nextRef.current
				}
			}
		}}
	>
	
		{slides.map((slide,index) => {
			return <SwiperSlide key={slide.name}>
				<header className='projects__header'>{slides.map((h,j) => {
					 if( index === j) {
						return <div className="projects__header-item projects__header-item-active" key={h.name}>{h.name}</div>
					} 
					return <div className="projects__header-item" key={h.name}>{h.name}</div>
	}
	)}
	</header>
					<div className='slide'>
							<div className="slide__header">
								<h2 className='slide__h2'>Completed <br/> Projects</h2>
								<p className='slide__text'>{slide.description}</p>
							</div>
							<div className='slide__items'>
								<div>
									<h3 className='slide__h3'>city:</h3>
									<p className='slide__text'>{ slide.city}</p>
								</div>
								<div>
									<h3 className='slide__h3'>apartment area:</h3>
									<p className='slide__text'>{ slide.area}</p>
								</div>
								<div>
									<h3 className='slide__h3'>repair time:</h3>
									<p className='slide__text'>{ slide.time}</p>
								</div>
								<div>
									<h3 className='slide__h3'>repair cost:</h3>
									<p className='slide__text'>{ slide.cost}</p>
								</div>
							</div>
					
						<div className='slide__img'><div className="arrowPrev"></div><img width={"716px"} height={"482px"} src={slide.img} alt={slide.name} /><div className="arrowNext"></div>
						</div>
					</div>
			</SwiperSlide>
		})}
	</Swiper>
	<div className="slide__controls">
		<button className="slide__prev slide__btn">{<img src={prevArrow} alt="nextSlide" />}</button>
		<div className="slide__pagination"></div>
		<button className="slide__next slide__btn"><img src={nextArrow} alt="nextSlide" /></button>
	</div>
</div>
</div>)

	
	
}

export default Projects

