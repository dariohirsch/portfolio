import Fade from "react-reveal/Fade"

const Projects = (props) => {
	return (
		<div id="projects-container">
			{props.language ? <h2>PROJECTS</h2> : <h2>PROYECTOS</h2>}

			<Fade right>
				<div id="projects">
					{props.language ? (
						<>
							<div className="project-card">
								<img src="/messi in paris.jpeg" alt="" />
								<div className="project-text">
									<h3>Messi In Paris</h3>

									<p> Game created using Canvas. The goal is to score as much as possible dodging cones that will appear randomly.</p>
									<p className="tech">HTML - JS - CSS</p>

									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/First-project" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>

									<div className="workLinksContainer"></div>
								</div>
							</div>
							<div className="project-card">
								<img src="/my wish list.png" alt="" />
								<div className="project-text">
									<h3>My Wish List</h3>
									<p> Web app where you can search thousands of products of your interest and add them to your wishlist. You can later share the list with your contacts. It uses the MercadoLibre API, the biggest ecommerce of LATAM to get the complete info of each product.</p>
									<p className="tech">HTML - CSS - JS - MONGO.DB - NODE.JS</p>
									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/second-proyect" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>
									<div className="workLinksContainer"></div>
								</div>
							</div>
							<div className="project-card">
								<img src="/betandfriends.png" alt="" />
								<div className="project-text">
									<h3>Bet & Friends</h3>
									<p> Web app where you can create private or public leagues to bet in real sports playing against real people. It uses the Bet365 API to get all the competitions and their respective events and quotes. </p>
									<p className="tech">MONGODB - EXPRESS.JS - REACT.JS - NODE.JS</p>
									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/final-project-front" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>
									<div className="workLinksContainer"></div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="project-card">
								<img src="/messi in paris.jpeg" alt="" />
								<div className="project-text">
									<h3>Messi In Paris</h3>

									<p> Juego creado usando Canvas. El objetivo del mismo es intentar anotar la mayor cantidad de goles posibles, esquivando los obstáculos que irán apareciendo aleatoriamente.</p>
									<p className="tech">HTML - JS - CSS</p>

									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/First-project" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>

									<div className="workLinksContainer"></div>
								</div>
							</div>
							<div className="project-card">
								<img src="/my wish list.png" alt="" />
								<div className="project-text">
									<h3>My Wish List</h3>
									<p> Aplicación web en donde podrás buscar entre miles de proctos y añadirlos a tu lista de deseos. Luego podrás compartir la lista facilmente con tus contactos. Utiliza la API de MercadoLibre, el ecommerce mas grande LATAM para obtener el producto y todos sus detalles.</p>
									<p className="tech">HTML - CSS - JS - MONGO.DB - NODE.JS</p>
									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/second-proyect" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>
									<div className="workLinksContainer"></div>
								</div>
							</div>
							<div className="project-card">
								<img src="/betandfriends.png" alt="" />
								<div className="project-text">
									<h3>Bet & Friends</h3>
									<p> Aplicación web en donde podrás crear ligas públicas o privadas y apostar en deportes reales contra personas reales. Utiliza la API de Bet365 para obtener la información de las distintas competiciones y sus respectivos eventos y cuotas.</p>
									<p className="tech">MONGODB - EXPRESS.JS - REACT.JS - NODE.JS</p>
									<p>
										<a className="gh-link" href="https://github.com/dariohirsch/final-project-front	" target="_blank" rel="noreferrer">
											CODE
										</a>
									</p>
									<div className="workLinksContainer"></div>
								</div>
							</div>
						</>
					)}
				</div>
			</Fade>
		</div>
	)
}

export default Projects
