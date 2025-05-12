import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

const App = () => {
	return (
		<div className='mx-8'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/timetables' element={<div>Timetables</div>} />
				<Route path='/about' element={<div>About</div>} />
			</Routes>
		</div>
	);
};

export default App;
