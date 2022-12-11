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
		<div className='bg-[#303030] flex justify-end h-[100vh]'>
			<div className="sm:fixed z-50 sm:bottom-auto sm:left-10 sm:top-10 flex sm:w-auto sm:flex-col gap-2 sm:rounded-xl sm:px-2 py-4 sm:shadow-box text-purple-100
				bg-gradient-to-b from-purple-600 via-purple-500 to-cyan-600

				bottom-0 left-0 absolute w-full items-center px-6 rounded-tl-3xl rounded-tr-3xl shadow-[_0_-2px_8px_2px_#11111186] justify-between		 	
			">
				<a href="#home" className='hover:bg-purple-200/40 rounded-full p-2 duration-500'>
					<House size={34} weight="fill"/>
				</a>

				<a href="#skills" className='hover:bg-purple-200/40 rounded-full p-2 duration-500'>
					<RocketLaunch size={34} weight="fill"/>
				</a>

				<a href="#projects" className='hover:bg-purple-200/40 rounded-full p-2 duration-500'>
					<Folder size={34} weight="fill"/>
				</a>

				<a href="#me" className='hover:bg-purple-200/40 rounded-full p-2 duration-500'>
					<UserCircle size={34} weight="fill"/>
				</a>

				<a href="#contact" className='hover:bg-purple-200/40 rounded-full p-2 duration-500'>
					<Chats size={34} weight="fill"/>
				</a>
			</div>

			<Dashboard />
		</div>
	);
}


