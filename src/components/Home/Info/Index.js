import React from 'react'
import Experience from './Experience'
import Expertise from './Expertise'

import './info.css'

export default function Info(){
	return (
		<div className="layout--init home--info">			
			<Expertise/>
			<Experience/>
		</div>
	)
}