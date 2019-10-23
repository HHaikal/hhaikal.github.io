import React from 'react'

import Header from './Header'

import './Index.css'

export default function Layout({children}){
	return (		
		<React.Fragment>
			<Header/>
			{children}
		</React.Fragment>
	)
}