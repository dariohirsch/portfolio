import React, { useState } from "react"
import Link from "react-scroll/modules/components/Link"
import { GiHamburgerMenu } from "react-icons/gi"

import "../App.css"

const Navbar = (props) => {
	const [click, setClick] = useState("nav-options")

	const handleNavbar = () => {
		if (click === "nav-options") {
			setClick("nav-options nav-mobile")
		} else {
			setClick("nav-options")
		}
	}

	console.log("estas son la props que recibe el nav", props)

	return (
		<>
			{" "}
			<div className="navbar">
				<Link to="welcome" smooth={true} duration={1000}>
					<img src="/dh logo.png" alt="logo" id="logo" />
				</Link>

				<div>
					{props.language ? (
						<ul id="links" className={click}>
							<li className="option">
								<Link to="about-me" smooth={true} duration={1000} className="link">
									About me
								</Link>
							</li>
							<li className="option">
								<Link to="projects-container" smooth={true} duration={1000} className="link">
									Projects
								</Link>
							</li>
							<li className="option">
								<Link to="contact" smooth={true} duration={1000} className="link">
									Contact
								</Link>
							</li>
						</ul>
					) : (
						<ul id="links" className={click}>
							<li className="option">
								<Link to="about-me" smooth={true} duration={1000} className="link">
									Sobre mí
								</Link>
							</li>
							<li className="option">
								<Link to="projects-container" smooth={true} duration={1000} className="link">
									Projectos
								</Link>
							</li>
							<li className="option">
								<Link to="contact" smooth={true} duration={1000} className="link">
									Contacto
								</Link>
							</li>
						</ul>
					)}

					<div>{props.language ? <button onClick={props.handleLanguage}>CA</button> : <button onClick={props.handleLanguage}>EN</button>}</div>
				</div>
				<div>
					<GiHamburgerMenu className="hamburger" onClick={handleNavbar} />
				</div>
			</div>
		</>
	)
}

export default Navbar
