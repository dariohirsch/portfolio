const About = (props) => {
	return (
		<div id="about-me">
			<div id="img-container">
				<img src="/Foto Dario.jpeg" alt="profile" />
			</div>
			{props.language ? (
				<div id="about-text">
					<p>hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello </p>
				</div>
			) : (
				<div id="about-text">
					<p>hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola </p>
				</div>
			)}
		</div>
	)
}

export default About
