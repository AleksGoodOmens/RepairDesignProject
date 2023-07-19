import React from 'react'

import "./burger.scss"

function Burger() {
	const addActiveClass = (e) => {
		e.target.closest("nav").classList.toggle("active")
		document.body.classList.toggle("overflow")

	}
	return (
		<button onClick={(e) => addActiveClass(e)} className='burger'>
			<div className='burger__one'></div>
			<div className='burger__two'></div>
			<div className='burger__three'></div>
		</button>
	)
}

export default Burger