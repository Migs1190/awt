import React from 'react';
import { Link, useLocation } from 'react-router';

const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Scheduler', path: '/scheduler' },
	{ name: 'About', path: '/about' },
];

const MainNav = () => {
	const location = useLocation();

	return (
		<nav>
			<div className='flex justify-around items-center bg-slate-800 text-slate-400 outline outline-[6px] outline-slate-800/50 mx-24 rounded-lg'>
				{navItems.map((item, i) => (
					<Link
						to={item.path}
						key={i}
						className={`p-3 hover:text-slate-100 transition-colors ${
							location.pathname === item.path ? 'text-slate-100' : ''
						}`}>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default MainNav;
