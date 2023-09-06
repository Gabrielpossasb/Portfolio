import { Dashboard } from './components/Dashboard/Dashboard';
import { Chats, Folder, House, RocketLaunch, UserCircle } from "phosphor-react";



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
		<div className='bg-[#303030] flex justify-end max-h-[100vh] overflow-y-scroll overflow-x-hidden'>
			
			<div className="sm:fixed z-50 sm:bottom-auto sm:left-4 lg:left-10 sm:top-10 flex sm:w-auto sm:flex-col sm:gap-6 sm:rounded-xl sm:px-2 py-4 sm:shadow-box text-purple-100
				bg-gradient-to-b from-purple-600 via-purple-500 to-cyan-600 sm:hover:shadow-boxLight transition-all duration-1000

				cel:bottom-10 cel:left-4 cel:right-4 absolute justify-between items-center px-2 rounded-3xl shadow-[_0_-2px_8px_2px_#11111186]  	
			">
				<a href="#home" className='hover:bg-purple-200/40 rounded-full p-2 duration-1000 shadow-insetSideBar'>
					<House size={34} weight="fill"/>
				</a>

				<a href="#skills" className='hover:bg-purple-200/40 rounded-full p-2 duration-1000 shadow-insetSideBar'>
					<RocketLaunch size={34} weight="fill"/>
				</a>

				<a href="#projects" className='hover:bg-purple-200/40 rounded-full p-2 duration-1000 shadow-insetSideBar'>
					<Folder size={34} weight="fill"/>
				</a>

				<a href="#me" className='hover:bg-purple-200/40 rounded-full p-2 duration-1000 shadow-insetSideBar'>
					<UserCircle size={34} weight="fill"/>
				</a>

				<a href="#contact" className='hover:bg-purple-200/40 rounded-full p-2 duration-1000 shadow-insetSideBar'>
					<Chats size={34} weight="fill"/>
				</a>
			</div>

			<Dashboard />
		</div>
	);
}


