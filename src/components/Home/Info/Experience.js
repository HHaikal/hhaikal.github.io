import React from 'react'

import './Experience.css'
import Project from './Experience/Project'

export default function Experience(){
	return (
		<div style={{padding: '0 20px'}}>
			<h2 className="info--top--title">Experience</h2>
			<hr style={{ color: 'black', height: '2px', marginBottom: '0' }} />

			<div className="experience--column">
				<div>
					August 2019 - Now
				</div>
				<div className="experience--content">
					<div>
						<b>Backend Core Developer, Finansial Integrasi Teknologi</b>
					</div>
					<Project title="Pinjam Modal" description="Build & integrate payment services." link="http://pinjammodal.id" />
				</div>
			</div>

			<div className="experience--column">
				<div>
					Sept 2017 - January 2018
				</div>
				<div className="experience--content">
					<div>
						<b>Full Stack Developer, Thortech Asia Software</b>
					</div>
					<Project title="Agasya (Aplikasi Gadai Syariah)" description="Planned, Developed, Tested and Maintainted a web application for agasya pawn system" link="http://arrahmangroup.com/"/>
					<Project title="SIMRS (Sitem Informasi Manajemen Rumah Sakit)" description="Planned, Developed, and Tested web application for SIMRS" link="https://simrsudaws.com" />					
					<Project title="IQLAND" description="Technology Consultant" link="http://iqland.id"/>
					<Project title="Kreditumat" description="Planned, Developed, Tested and Maintain a web appilcation" link="https://kreditumat.com"/>
				</div>
			</div>
		</div>
	)
}