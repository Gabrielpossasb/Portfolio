import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { NavigationProvider } from './hooks/useNavigation';
import { MyThemeProvider } from './hooks/useThemeApi';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<NavigationProvider>
			<MyThemeProvider>
				<App />
			</MyThemeProvider>
		</NavigationProvider>
	</React.StrictMode>
);


