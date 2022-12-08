import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { NavigationProvider } from './hooks/useNavigation';
import { MyThemeProvider } from './hooks/useThemeApi';
import { GlobalStyle } from './styles/global';

import './styles/global.css';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<NavigationProvider>
				<MyThemeProvider>

					<App />
					<GlobalStyle/>


				</MyThemeProvider>
			</NavigationProvider>
		</ChakraProvider>
	</React.StrictMode>
);


