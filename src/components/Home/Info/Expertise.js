import React from 'react'

import './Expertise.css'

import Skill from './Skill'

export default function Expertise(){
	return (
		<div style={{ borderRight: '1px black solid', paddingRight: '10px' }}>
			<h2 className="info--top--title">Expertise</h2>
			<hr style={{ color: 'black', height: '2px', marginBottom: '0' }} />

			<h3 className="expertise--title">Backend</h3>
			<Skill name="Nodejs" percentage={75} />
			<Skill name="Graphql" percentage={75} />

			<h3 className="expertise--title">Frontend</h3>
			<Skill name="ReactJs" percentage={75} />
			<Skill name="CSS, SASS, & LESS" percentage={75} />
			
			<h3 className="expertise--title">Databases</h3>
			<Skill name="Mysql" percentage={75} />
			<Skill name="Postgres" percentage={75} />

			<h3 className="expertise--title">Cloud Services</h3>
			<Skill name="AWS" percentage={30} />
			<Skill name="GCP" percentage={30} />
		</div>
	)
}