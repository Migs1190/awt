import React from 'react';
import { Link } from 'react-router';

const options = [
	{
		id: 'manual',
		name: 'Manually',
	},
	{
		id: 'auto',
		name: 'Generate Automatically',
	},
];

const TimeTables = () => {
	return (
		<div>
			<h1 className='-mt-10 mb-10 text-5xl font-bold'>Generate a Timetable</h1>
			<div
				id='switch'
				className='flex rounded-lg overflow-hidden outline outline-4 outline-slate-800/30'>
				{options.map((option, i) => (
					<Link
						to={`/scheduler/${option.id}`}
						id={option.id}
						key={i}
						className='bg-slate-900/70 p-4 w-1/2 text-slate-200 hover:bg-slate-900/60 transition-colors cursor-pointer'>
						{option.name}
					</Link>
				))}
			</div>

			<div></div>
		</div>
	);
};

export default TimeTables;
