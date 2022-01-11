import React, { useState } from "react"
import Link from "react-scroll/modules/components/Link"

import "../App.css"

const Navbar = () => {
	const [click, setClick] = useState(false)

	return (
		<div className="navbar">
			<Link to="welcome" smooth={true} duration={1000}>
				<img src="/DH (2).png" alt="logo" id="logo" />
			</Link>

			<div>
				<ul id="links" className={click ? "nav-options active" : "nav-options"}>
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
			</div>
		</div>
	)
}

export default Navbar
