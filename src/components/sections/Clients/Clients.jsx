import React, { useState } from 'react'
import PageTitle from '../../pageTitle/PageTitle'
import SectionIcon from '../../sectionIcon/SectionIcon'

import styles from "./clietnts.module.scss"

import icon from "./img/icon.png"
import areaIcon from "./img/area.svg"
import listIcon from "./img/list.svg"
import photo1 from "./img/1.jpg"
import photo2 from "./img/2.jpg"
import photo3 from "./img/3.jpg"

function Clients() {
	const [data, setData] = useState({
			pageTitle: "our clients",
			pageIcon: icon,
			pageSubtitle: "80% of our customers recommend us to their friends and family.",
		clients: [{
			photo: photo1,
			name: "Fedosova Maria Konstantinovna",
			text: ["I want to thank the guys for their work. We put your shower part in repair. I am very grateful that I referred to the repair as to my own. Great thanks I express the project to Georgia for its professionalism and approach.", "The repair process was turned out in terms, faster than anticipated. Team mobile and professional. Works performed qualitatively without comments. Quality satisfied. Prices democratic. I recommend these masters."],
			area: "40",
			duration: "45"
		}, {
			photo: photo2,
			name: "Afanasyev Sergey Alexandrovich",
			text: ["I want to thank the guys for their work. We put your shower part in repair. I am very grateful that I referred to the repair as to my own. Great thanks I express the project to Georgia for its professionalism and approach."],
			area: "90",
			duration: "128"
		}, {photo: photo3,
			name: "Kiriev Egor Leonidovich",
			text: ["I want to thank the guys for their work. We put your shower part in repair. I am very grateful that to Georgia for its professionalism and approach."],
			area: "56",
			duration: "86"}]
	})
	return (
		<section className={styles.clients}>
			<PageTitle className={styles.title}>{data.pageTitle}</PageTitle>
			<SectionIcon><img src={data.pageIcon} alt={data.pageTitle} /></SectionIcon>
			<p>{data.pageSubtitle}</p>
			<div className={`container d-grid g-t-c3 g50 ${styles.container}`}>
				{data.clients.map(client => {
					return <article className={`${styles.article} d-grid`} key={client.name}>
						<header>
							<img className='br50' width={"76px"} height={"78px"} src={client.photo} alt={client.name} />
							<b>{ client.name}</b>
						</header>
						<main>
							{client.text.map((text, i) => {
								return <p key={i}>{text}</p>
							})}
						</main>
						<footer className='textUpperCase'>
							<span className='p15'><img src={areaIcon} alt="area" /> {client.area} M2</span><span className='divider'></span><span className='p15'> <img src={listIcon} alt="duration" /> { client.duration} days</span>
						</footer>
					</article>
				})}
			</div>
		</section>
	)
}

export default Clients