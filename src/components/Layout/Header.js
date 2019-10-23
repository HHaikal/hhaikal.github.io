import React from 'react'
import { IconContext } from 'react-icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import './Header.css'

export default function Header(){
	return (
		<header className="header--header">
			<div className="layout--init">
				<div>
					<h1 className="header--name">Haikal Hikmi</h1>
					<h2 className="header--title">Web Developer</h2>
				</div>
				<div className="header--icon--section">
					<IconContext.Provider value={{ color: "white", className: "header--social--account", size: '2em'  }}>
						<a href="https://www.linkedin.com/in/haikal-hikmi-093b7617b/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
						<a href="https://github.com/HHaikal" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
					</IconContext.Provider>
				</div>
			</div>
		</header>
	)
}