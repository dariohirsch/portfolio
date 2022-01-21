const Welcome = (props) => {
	return (
		<div id="welcome">
			<div id="welcome-container">
				{props.language ? (
					<>
						<h4>Hi!</h4>
						<h2>
							I'm Dario Hirsch <br />
							Web <span id="d">D</span>
							<span id="e">e</span>
							<span id="v">v</span>
							<span id="e">e</span>
							<span id="l">l</span>
							<span id="o">o</span>
							<span id="p">p</span>
							<span id="e">e</span>
							<span id="r">r</span>
						</h2>
						<div id="link-cont">
							<a dowload="Dario Hirsch CV - EN" href="../Dario Hirsch CV - English.pdf" id="downloadBtn" target="_blank">
								English Resume
							</a>
							<a download="Dario Hirsch CV - CA" href="../Dario Hirsch CV - Castellano.pdf" id="downloadBtn" target="_blank">
								Spanish Resume
							</a>
						</div>
					</>
				) : (
					<>
						<h4>Hola!</h4>
						<h2 id="spanish-title">
							Soy Dario Hirsch <br />
							Desarrollador <span>Web</span>
							{/* <span id="e">e</span>
							<span id="v">v</span>
							<span id="e">e</span>
							<span id="l">l</span>
							<span id="o">o</span>
							<span id="p">p</span>
							<span id="e">e</span>
							<span id="r">r</span> */}
						</h2>
						<div id="link-cont">
							<a dowload="Dario Hirsch CV - EN" href="../Dario Hirsch CV - English.pdf" id="downloadBtn" target="_blank">
								CV en Español
							</a>
							<a download="Dario Hirsch CV - CA" href="../Dario Hirsch CV - Castellano.pdf" id="downloadBtn" target="_blank">
								CV en Inglés
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Welcome
