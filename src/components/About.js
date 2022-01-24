import Fade from "react-reveal/Fade"

const About = (props) => {
	return (
		<Fade left cascade>
			<div id="about-me">
				<div id="img-container">
					<img src="/Foto Dario.jpeg" alt="profile" />
				</div>
				{props.language ? (
					<div id="about-text">
						<p id="text">
							{" "}
							I'm a Jr. Fullstack Web Developer living in Barcelona. <br />
							In my previous life, I was an accountant from the University of Buenos Aires. After some years working in that field, I decided to change my career and found my passion in the IT world. In 2021 I finished a Bootcamp in Web Development in IronHack Barcelona.
							<br /> I'm a motivated person eager to grow in this new world. <br /> I like teamwork but I'm able to adapt to different scenarios.
							<br /> If you have any questions, please don't hesitate to contact me!
						</p>
					</div>
				) : (
					<div id="about-text">
						<p id="text">
							{" "}
							Soy un Desarrolador Fullstack Junior viviendo en Barcelona. <br />
							En mi vida anterior fui Contador Público, recibido de la Universidad de Buenos Aires. Luego de varios años de trabajo en esa área, decidí cambiar de carrera y encontré mi pasión en el mundo de la programación. En 2021 realicé un Bootcamp de Desarrollo Web en IronHack Barcelona.
							<br /> Soy una persona motivada y con muchas ganas de crecer en este nuevo mundo. <br /> Me gusta el trabajo en equipo pero soy capaz de adaptarme a distintos escenarios.
							<br /> Por cualquier inquietud, no dudes en ponerte en contacto conmigo!
						</p>
					</div>
				)}
			</div>
		</Fade>
	)
}

export default About
