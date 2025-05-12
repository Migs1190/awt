import React from 'react';

const metricBLocks = [
	{
		name: 'Metric 0',
		value: 0,
	},
	{
		name: 'Metric 1',
		value: 0,
	},
	{
		name: 'Metric 2',
		value: 0,
	},
];

const Dashboard = () => {
	return (
		<div id='dashboard'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
				{metricBLocks.map((block, i) => (
					<div
						key={i}
						className='bg-slate-800/40 rounded-lg p-4 text-slate-400 outline outline-[6px] outline-slate-800/50'>
						<h2 className='text-xl'>{block.name}</h2>
						<p className='text-3xl'>{block.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
