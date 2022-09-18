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
	
	
	return (
		<div>
			<Header/>
			<Dashboard />
			<GlobalStyle />
		</div>
	);
}


