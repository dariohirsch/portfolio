const Contact = () => {
	return (
		<div id="contact">
			<div id="contact-info">
				<span className="to-align">
					<img className="contact-logo" src="/icons8-gmail-48.png" alt="" />
					<span>darohirsch@gmail.com</span>
				</span>

				<span className="to-align">
					<img className="contact-logo" src="/icons8-teléfono-celular-50.png" alt="" />
					<span>+34 670 34 98 43</span>
				</span>
				<a className="to-align" href="http://www.linkedin.com/in/dario-hirsch" target="_blank" rel="noreferrer">
					<img className="contact-logo" src="/icons8-linkedin-48.png" alt="" />
					<span>/dario-hirsch</span>
				</a>
				<a className="to-align" href="http://www.github.com/dariohirsch" target="_blank" rel="noreferrer">
					<img className="contact-logo" src="/icons8-github-48.png" alt="" />
					<span>/dariohirsch</span>
				</a>
			</div>
		</div>
	)
}

export default Contact
