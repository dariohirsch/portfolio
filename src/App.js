// import logo from "./logo.svg"
import "./App.css"

import About from "./components/About"
import HardSkills from "./components/HardSkills"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Welcome from "./components/Welcome"

const App = () => {
	return (
		<>
			<Navbar />
			<Welcome />
			<About />
			<HardSkills />
			<Projects />
		</>
	)
}

export default App
