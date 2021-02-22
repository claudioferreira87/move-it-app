import React from 'react';

import '../../styles/global.css';

export default function ExperienceBar() {
	return (
		<header className="experience-bar">
			<span>0 xp</span>
			<div>
				<div style={{ width: '50%' }} />
				<span className="current-experience" style={{ left: '50%' }}>
					300 xp
				</span>
			</div>
			<span>600 xp</span>
		</header>
	);
}
