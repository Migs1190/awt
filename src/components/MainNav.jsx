import React, { useState } from 'react';
import { Link } from 'react-router';

const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Timetables', path: '/timetables' },
	{ name: 'About', path: '/about' },
];

const MainNav = () => {
	const [active, setActive] = useState('Home');
	return (
		<nav>
			<div className='flex justify-around bg-slate-800 text-slate-400 outline outline-[6px] outline-slate-800/50 mx-24 rounded-lg'>
				{navItems.map((item, i) => (
					<Link
						to={item.path}
						key={i}
						className={`p-3 hover:text-slate-100 transition-colors ${
							active === item.name ? 'text-slate-100' : ''
						}`}
						onClick={() => setActive(item.name)}>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default MainNav;
