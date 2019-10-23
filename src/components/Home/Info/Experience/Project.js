import React from 'react'

import { FaLink } from 'react-icons/fa'

export default function Project({title, description, link}){
	return (
		<li style={{ margin: '0', padding: '20px 0' }}>
			<b>{title}</b>
			<div style={{ paddingLeft: '25px', paddingTop: '15px' }}>
				<div>
					{description}
				</div>
				<div style={{ padding: '5px 0' }}>
					<a style={{ color: 'black' }} href={link} target="_blank" rel="noopener noreferrer"><FaLink/></a>
				</div>
			</div>
		</li>
	)
}