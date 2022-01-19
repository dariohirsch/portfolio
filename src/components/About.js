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
					<p id="text">
						{" "}
						Soy un Desarrolador Fullstack Junior viviendo en Barcelona. <br />
						En mi vida anterior fui Contador Público, recibido de la Universidad de Buenos Aires. Luego de varios años de trabajo en esa área, decidí cambiar de carrera y encontré mi pasión en el mundo de la programación. En 2021 realicé un Bootcamp de Desarrollo Web en IronHack Barcelona.
						<br /> Soy una persona motivada y con muchas ganas de crecer en este nuevo mundo. <br /> Me gusta el trabajo en equipo como principal metodología, pero con capacidad de adaptarme a los distintos escenarios.
						<br /> Por cualquier inquietud, no dudes en ponerte en contacto conmigo!
					</p>
				</div>
			)}
		</div>
	)
}

export default About
