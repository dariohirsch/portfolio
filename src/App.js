// import logo from "./logo.svg"
import "./App.css"

import About from "./components/About"
import Contact from "./components/Contact"
import HardSkills from "./components/HardSkills"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Welcome from "./components/Welcome"
import { useState } from "react"

const App = () => {
	const [language, setLanguage] = useState("EN")

	const handleLanguage = () => {
		setLanguage(!language)
	}

	return (
		<>
			<Navbar handleLanguage={handleLanguage} language={language} />
			<Welcome language={language} />
			<About language={language} />
			<HardSkills language={language} />
			<Projects language={language} />
			<Contact />
		</>
	)
}

export default App
