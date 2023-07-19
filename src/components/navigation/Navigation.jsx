import React, { useState } from 'react'
import {  Outlet, } from "react-router-dom";
import { NavLink, Link } from "react-router-dom"

import "./navigation.scss"

import Button from '../UI/buttons/Button';
import Burger from '../burger/Burger';
import Modal from '../modals/Modal';



function Navigation() {
	const [data, setData] = useState({
		logo: 'IC "Repair Design Project"',
		links: ["home", "projects", "measurement", "team", "reviews", "contacts"],
		telephone: "+7 (927) 768-32-39",
		modalL: false
	})
	const windowWidth = document.documentElement.clientWidth;

	const { logo, links, telephone, modal } = data;
	const openModal = () => {
		document.body.style.overflow = "hidden";
		setData({
			...data,
			modal:true
		})
	}
	const closeModal = (e) => {
		document.body.style.overflow = "";
		if (e.getAttribute("data-Close")) {
			setData({
				...data,
				modal:false
			})
		} 
		
	}

	return (
	<>
			<header className="page__header">
        <div className="container">
          <nav className='navigation'>
            <NavLink to={"/"}>
              <span className='logo'>{logo}</span>
            </NavLink>
            <div className='navigation__links'>
              {links.map(link => {
                return <NavLink key={link} to={"/" + link}>{link}</NavLink>
              })}
            </div>
            <Burger></Burger>
            <div className='navigation__end'>
              <a href={"tel:+" + cleanNumbers(telephone)}>{telephone}</a>
              <Button onClick={openModal} className="navigation__btn">Request a call</Button>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className='page__footer'>
        <div className="container">

					<NavLink to={"/"}>
              <span className='logo'>{logo}</span>
          </NavLink>
					<span>If you like this website, feel free to contact me by <Link to="mailto:agsfinks@gmail.com">Email</Link></span>
        </div>
      </footer>

			{modal ? <Modal closeModal={closeModal}/> : ''}
	</>
	)
}

export default Navigation


function cleanNumbers(string) {

	return string.split("").map(i => {
		return +i ? i : "";
	} ).join("")
}