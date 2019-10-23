import React from 'react'
import './Skill.css'

export default function Skill({name, percentage}){
	const styles ={
		backgroundColor: '#00723f',
		height: '100%',
		width: percentage
	}	

	return (
		<div className="skill-grid" style={{ margin: '10px 0'}}>
			<div>
				{name}
			</div>

			<div class="progress-bar horizontal">
				<div class="progress-fill" style={styles}>
				</div>
			</div>
		</div>
	)
}