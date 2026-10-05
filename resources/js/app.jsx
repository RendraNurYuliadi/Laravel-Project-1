import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './pages/LandingPage';

const appElement = document.getElementById('app');

if (appElement) {
	createRoot(appElement).render(
		<StrictMode>
			<LandingPage />
		</StrictMode>,
	);
}
