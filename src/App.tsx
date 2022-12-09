import { Dashboard } from './components/Dashboard/Dashboard';

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
		<div className='bg-[#303030]'>
			<Dashboard />
		</div>
	);
}


