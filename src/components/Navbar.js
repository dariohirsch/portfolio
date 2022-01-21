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

	const twoClicks = () => {
		handleNavbar()
		props.handleLanguage()
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
								<Link to="about-me" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									About me
								</Link>
							</li>
							<li className="option">
								<Link to="hard-skills" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Skills
								</Link>
							</li>
							<li className="option">
								<Link to="projects-container" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Projects
								</Link>
							</li>
							<li className="option">
								<Link to="contact" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Contact
								</Link>
							</li>
							<li>
								{props.language ? (
									<button id="lang-btn" onClick={twoClicks}>
										<img className="contact-logo" src="/kisspng-flag-of-spain-flag-of-puerto-rico-national-flag-spain-5ac7c19fef3bb7.1174884415230406719799.png" alt="" />
									</button>
								) : (
									<button id="lang-btn" onClick={twoClicks}>
										<img className="contact-logo" src="/kisspng-flag-of-england-flag-of-the-united-kingdom-england-5ab872993fcf79.0144293715220374012614.png" alt="" />
									</button>
								)}
							</li>
						</ul>
					) : (
						<ul id="links" className={click}>
							<li className="option">
								<Link to="about-me" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Sobre mí
								</Link>
							</li>
							<li className="option">
								<Link to="hard-skills" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Habilidades
								</Link>
							</li>
							<li className="option">
								<Link to="projects-container" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Proyectos
								</Link>
							</li>
							<li className="option">
								<Link to="contact" smooth={true} duration={1000} className="link" onClick={handleNavbar}>
									Contacto
								</Link>
							</li>
							<li>
								{props.language ? (
									<img className="contact-logo" src="/kisspng-flag-of-spain-flag-of-puerto-rico-national-flag-spain-5ac7c19fef3bb7.1174884415230406719799.png" alt="" />
								) : (
									<button id="lang-btn" onClick={twoClicks}>
										<img className="contact-logo" src="/kisspng-flag-of-england-flag-of-the-united-kingdom-england-5ab872993fcf79.0144293715220374012614.png" alt="" />
									</button>
								)}
							</li>
						</ul>
					)}
				</div>
				<div>
					<GiHamburgerMenu className="hamburger" onClick={handleNavbar} />
				</div>
			</div>
		</>
	)
}

export default Navbar
