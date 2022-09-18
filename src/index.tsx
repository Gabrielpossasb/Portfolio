import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { MyThemeProvider } from './hooks/useThemeApi';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<MyThemeProvider>
			<App />
		</MyThemeProvider>
	</React.StrictMode>
);


