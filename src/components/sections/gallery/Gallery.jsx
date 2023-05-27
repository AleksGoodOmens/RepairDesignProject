import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./gallery.scss"

import img1 from "./imgs/1.jpg"
import img2 from "./imgs/2.jpg"
import img3 from "./imgs/3.jpg"
import img4 from "./imgs/4.jpg"
import img6 from "./imgs/6.jpg"
import img7 from "./imgs/7.jpg"
import img8 from "./imgs/8.jpg"
import img9 from "./imgs/9.jpg"
import img10 from "./imgs/10.jpg"
import img11 from "./imgs/11.jpg"
import bg from "./imgs/BG.jpg"





const data = [
	{
		title: "American classic",
		imgsLeft: [img6, img3],
		imgsRight: [img4, img2]

	},
	{
		title: "Empire",
		imgsLeft: [img1, img7],
		imgsRight: [img8, img9]
	},
	{
		title: "Classical",
		imgsLeft: ["https://a0.muscache.com/im/pictures/miso/Hosting-47964637/original/2d9d1014-d4b1-4568-bf45-34e8641646a4.jpeg?im_w=720", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155800176.jpg?k=6e1c4dbf2725f3642fc587d297c13f262f8adc5da8764d2f0b45355aa6f4d47c&o=&hp=1"],
		imgsRight: ["https://a0.muscache.com/im/pictures/55f4333a-4c35-4e98-ba9c-4836a3642444.jpg?aki_policy=x_large","https://avatars.mds.yandex.net/get-altay/4614377/2a0000017947d657b9aff1b1231bbfa7b0ab/XXL"]

	},
	{
		title: "Loft",
		imgsLeft: [img6, img3],
		imgsRight: [img4, img2]
	},
	{
		title: "Minimalism",
		imgsLeft: [img1, img7],
		imgsRight: [img8, img9]
	},
	{
		title: "Provence",
		imgsLeft: [img10, img7],
		imgsRight: [img11,img9]
	},
	{
		title: "Romanticism",
		imgsLeft: [img1, img7],
		imgsRight: [img8, img9]
	},
	{
		title: "Scandinavian style",
		imgsLeft: [img10, img7],
		imgsRight: [img11,img9]
	},
	{
		title: "Mediterranean style",
		imgsLeft: [img6, img3],
		imgsRight: [img4, img2]
	},
	{
		title: "High tech",
		imgsLeft: [img1, img7],
		imgsRight: [img8, img9]
	},
	{
		title: "Eclecticism",
		imgsLeft: [img10, img7],
		imgsRight: [img11,img9]
	},

]


function Gallery() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<section className='gallery'>
			<div className='gallery__bg'></div>

			<div className="container">
				
				<div className='gallery__menu'>
					<h2 className='gallery__title slide__h2'>We realize your wildest fantasies</h2>
					<Swiper
							modules={[Navigation, Thumbs]}
							loop={true}
							onSwiper={setThumbsSwiper}
							spaceBetween={20}
							slidesPerView={100}
							freeMode={true}
							watchSlidesProgress={true}
							direction={"vertical"}
							className="gallery__thumbs"
						>
	
								{data.map(thumb => {
									return <SwiperSlide key={thumb.title}>{ thumb.title}</SwiperSlide>
								})}
	
						</Swiper>
				</div>
					<Swiper
						modules={[FreeMode, Navigation, Thumbs]}
						navigation={true}
						slidesPerView={1}
						spaceBetween={300}
						loop={true}
						direction= 'horizontal'
						speed={1500}
						thumbs={{ swiper: thumbsSwiper }}
						className='gallery__slider'

						breakpoints={
							{
								768: {
									
									needUpdate:"true",
									direction: "vertical",
									autoHeight:"false"

								}
							}
						}
					>
						{data.map(slide => {
							return <SwiperSlide key={slide.title} className="gallery__slides">
								{slide.imgsLeft.map((item, i) => {
									return <div key={i}><img  src={ item} alt={`pic ${i}`} /></div>
								})}
								{slide.imgsRight.map((item, k) => {
									return <div key={k}><img  src={item} alt={`pic ${k}`} /></div>
								})}
							</SwiperSlide>
						})}
					</Swiper>
				</div>
			
		</section>
	)
}

export default Gallery