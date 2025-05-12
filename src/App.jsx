import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import TimeTables from './pages/TimeTables';

const App = () => {
	return (
		<div className='mx-8'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/scheduler' element={<TimeTables />} />
				<Route path='/about' element={<div>About</div>} />
				<Route path='*' element={<div className='text-7xl font-bold text-white'>404 Not Found</div>} />
			</Routes>
		</div>
	);
};

export default App;
