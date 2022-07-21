import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export interface ThemeSelectProps {
	theme: {
		id: string,
		background: string,
		textFundo: string,
		button: string,
		border: string,  
		navSide: string,
		light: string,
	}
 }

export function App() {
	const themes = 
	[
		{
		id: 'red',
		background: '#1D1D1E',
		textFundo:'#cc1616',
		button:'#c72e2e',
		border: '#862f2f',  
		navSide: '#861c18',
		light: 'rgba(156, 39, 176, 0.7)',

		},
		{
		id: 'cian',
		background: '#1D1D1E',
		textFundo:'#2dd9e6',
		button:'#155d63',
		border: '#62afb4',
		navSide: '#168488',
		light: 'rgba(156, 39, 176, 0.7)',
		},
		{
		id: 'purple',
		background: '#1D1D1E',
		textFundo: '#651FFF',
		button:'#461183',
		border: '#a354c2',
		navSide: '#311B92',
		light: 'rgba(156, 39, 176, 0.7)',
		},
		{
		id: 'yellow',
		background: '#1D1D1E',
		textFundo:'#f7d61e',
		button:'#b19b21',
		border: '#cbce14',
		navSide: '#8b6f10',
		light: '#c2a819',
		},
	];
	
	const [theme, setTheme] = useState({
		id: 'purple',
		background: '#1D1D1E',
		textFundo: '#651FFF',
		button:'#461183',
		border: '#a354c2',
		navSide: '#311B92',
		light: '#5b04a1',
	})
 
 
	function handleSetTheme(e: string) {
		let newTheme = themes.filter((val) => {
		return val.id === e;
		});
		setTheme(newTheme[0])
		console.log(newTheme[0])
	}
	
	return (
		<header>
			<Header theme={theme} setarTheme={(e) => handleSetTheme(e)}/>
			<Dashboard theme={theme}/>
			<GlobalStyle />
		</header>
	);
}


