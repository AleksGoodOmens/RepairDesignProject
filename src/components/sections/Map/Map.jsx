import React, { useState } from 'react'

import mailIcon from "./icons/mail.png"
import instagramIcon from "./icons/instagram.png"
import { Link } from 'react-router-dom'

import styles from "./map.module.scss"
function Map() {
	const [data, setData] = useState({
		city: "Rostov-on-Don",
		street: "Nansen St.",
		building: "239 Shopping Center",
		telephone: "+7 (928) 768 32 29",
		email: "exampleEmail@gmail.com"
})
const {city, street, building, telephone, email} = data

	return (
		<section className={`container ${styles.map}`}>
			<h2 className={styles.map__title}>
				{`${city} ${street} ${building} decorum tel`}
				<a href={`tel:+${telephone}`}> { telephone}</a>
			</h2>
			<div>
				<Link to={`mailto:${email}`}>{ <img src={mailIcon} alt="mail" />}</Link>
				<Link to="https//:instagram.com">{ <img src={instagramIcon} alt="instagram" />}</Link>
			</div>
			<div className={styles.map__map}>
						<iframe title='map' width={"100%"} height={"100%"} id="gmap_canvas" src="https://maps.google.com/maps?q=london%20soho%2015&t=k&z=13&ie=UTF8&iwloc=&output=embed">
						</iframe>
			</div>
		</section>
	)
}

export default Map