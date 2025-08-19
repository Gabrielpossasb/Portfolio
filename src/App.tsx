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
		<div className='bg-[#253236] flex cel:flex-col-reverse overflow-hidden scroll-smooth'>
			
			<div className='flex items-start z-50  justify-center w-full p-8 cel:max-h-[15vh] sm:max-w-[10vw] scroll-smooth shadow-purple'>

				<div className="sm:bottom-auto  sm:left-4 lg:left-10 sm:top-10 flex sm:w-auto sm:flex-col sm:gap-6 sm:rounded-xl sm:px-2 py-4 sm:shadow-box text-purple-100
					bg-gradient-to-b from-purple-600 via-purple-500 to-cyan-600 sm:hover:shadow-boxLight transition-all duration-1000

					cel:w-full cel:px-8 justify-between items-center px-2 rounded-3xl shadow-[_0_-2px_8px_2px_#11111186] scroll-smooth 	
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

			</div>

			<Dashboard />
		</div>
	);
}


