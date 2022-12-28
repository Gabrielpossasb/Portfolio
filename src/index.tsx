import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { NavigationProvider } from './hooks/useNavigation';
import { GlobalStyle } from './styles/global';

import './styles/global.css';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<NavigationProvider>
					<App />
					<GlobalStyle/>
			</NavigationProvider>
		</ChakraProvider>
	</React.StrictMode>
);


