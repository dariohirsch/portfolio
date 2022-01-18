const HardSkills = (props) => {
	return (
		<div id="hard-skills">
			{props.language ? <h2>SKILLS</h2> : <h2>HABILIDADES</h2>}

			<div className="skills-logo">
				<img src="/html logo.svg" alt="html"></img>
				<img src="/css logo.svg" alt="css"></img>
				<img src="/js logo.png" alt="js"></img>
				<img src="/mongodb logo.svg" alt="mongo"></img>
				<img src="/express logo.svg" alt="express"></img>
				<img src="/react logo.svg" alt="react"></img>
				<img src="/nodejs logo.svg" alt="node"></img>
			</div>
		</div>
	)
}

export default HardSkills
