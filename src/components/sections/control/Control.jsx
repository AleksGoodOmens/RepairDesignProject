import React from 'react'
import PageTitle from '../../pageTitle/PageTitle'
import SectionIcon from '../../sectionIcon/SectionIcon'
// import { Player, PosterImage } from 'video-react';
import ReactPlayer from "react-player"
// import videoJS from "video.js"

// import '~video-react/dist/video-react.css';
import "./control.scss"
import icon from "./img/camera.svg"
import iconPlay from "./img/play.svg"
import poster from "./img/1.jpg"
import Divider from '../../UI/divider/Divider'
import Form from '../../Form/Form'
import Input from '../../Form/input/input'


const data = {
	videoUrl:"https://www.youtube.com/watch?v=3WyiO7CfK48&t=11s&ab_channel=AGAG",
	text: "At each facility, a camera is installed that broadcasts the progress of work on the clock. At any time, you can go to our website and monitor the progress of work in your apartment. You can watch the live broadcast from one of our facilities! Leave a request below and you will receive a link to the broadcast.",
	
}

function Control() {
	const videoOptions = {
		autoPlay: false,
		controls: true,
		preload: "auto",
		width: "100%",
		height: "100%",
		light:poster,
		playIcon: <img src={iconPlay} alt="play video"/>,
		// height: "264",
		// url: "https://www.youtube.com/watch?v=WerCpkTJQTM&ab_channel=ChillMusicLab",
		url: data.videoUrl
	}

	return (
		<section className='control'>
			
			<PageTitle>online control</PageTitle>
			<SectionIcon><img src={icon} alt="camera" /></SectionIcon>
			<div className='control__wrapper'>
				<div className="container">
					<div className='video-wrapper'>
						<ReactPlayer
							{...videoOptions}
						>
		
						</ReactPlayer >
					</div>
				</div>
				

			</div>
			<div className='bg-primary '>
				<div className='container'>
					<Divider />
					<p className='control__text'>{data.text}</p>
					<Form></Form>
				</div>
			</div>
		</section>
	)
}

export default Control
