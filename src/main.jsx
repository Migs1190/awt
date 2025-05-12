import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import MainNav from './components/MainNav';
import App from './App';
import { BrowserRouter } from 'react-router';
import MainBg from './components/MainBg';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<MainBg />
			<MainNav />
			<div className='mt-32' />
			<App />
		</BrowserRouter>
	</StrictMode>
);
