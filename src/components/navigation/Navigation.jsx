import React, { useState } from 'react'
import {  Outlet, } from "react-router-dom";
import { NavLink, Link } from "react-router-dom"

import "./navigation.scss"
import modalStyles from "./modal.module.scss"

import Button from '../UI/buttons/Button';
import Burger from '../burger/Burger';
import Form from "../Form/Form"



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
console.log(windowWidth)
		document.body.style.overflow = "hidden";
		setData({
			...data,
			modal:true
		})
	}
	const closeModal = () => {
		document.body.style.overflow = "";
	// console.log(getComputedStyle(windowWidth))

		setData({
			...data,
			modal:false
		})
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

			{modal ? <article className={modalStyles.modal}>
				<div className={modalStyles.modal__body}>
					<button onClick={closeModal} className={modalStyles.btn__close}>X</button>
					<Form>
						<h2>Leave your mobile and we are call you!</h2>
					</Form>
	
				</div>
			</article> : ''}
	</>
	)
}

export default Navigation


function cleanNumbers(string) {

	return string.split("").map(i => {
		return +i ? i : "";
	} ).join("")
}