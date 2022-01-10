const Welcome = () => {
	return (
		<div id="welcome">
			<div id="welcome-container">
				<h4>Hi!</h4>
				<h2>
					I`m Dario Hirsch <br />
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
						English CV
					</a>
					<a download="Dario Hirsch CV - CA" href="../Dario Hirsch CV - Castellano.pdf" id="downloadBtn" target="_blank">
						Spanish CV
					</a>
				</div>
			</div>
		</div>
	)
}

export default Welcome
