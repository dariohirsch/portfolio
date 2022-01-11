// import logo from "./logo.svg"
import "./App.css"

import About from "./components/About"
import Contact from "./components/Contact"
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
			<Contact />
		</>
	)
}

export default App
