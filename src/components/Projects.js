const Projects = () => {
	return (
		<div id="projects-container">
			<h2>PROJECTS</h2>

			<div id="projects">
				<div className="project-card">
					<img src="/messi in paris.jpeg" alt="" />
					<div className="project-text">
						<h3>Messi In Paris</h3>
						<p> Game created using Canvas. The goal is to score as much as possible dodging cones.</p>
						<p className="tech">HTML - JS - CSS</p>

						<p>
							<a className="gh-link" href="asda">
								Github
							</a>
						</p>

						<div className="workLinksContainer"></div>
					</div>
				</div>
				<div className="project-card">
					<img src="my wish list.png" alt="" />
					<div className="project-text">
						<h3>My Wish List</h3>
						<p> Game created using Canvas. The goal is to score as much as possible dodging cones.</p>
						<p className="tech">HTML - CSS - JS - MONGODB - NODE.JS</p>
						<p>
							<a className="gh-link" href="asda">
								Github
							</a>
						</p>
						<div className="workLinksContainer"></div>
					</div>
				</div>
				<div className="project-card">
					<img src="/betandfriends.png" alt="" />
					<div className="project-text">
						<h3>Bet & Friends</h3>
						<p> Game created using Canvas. The goal is to score as much as possible dodging cones.</p>
						<p className="tech">MONGODB - EXPRESS.JS - REACT.JS - NODE.JS</p>
						<p>
							<a className="gh-link" href="asda">
								Github
							</a>
						</p>
						<div className="workLinksContainer"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
