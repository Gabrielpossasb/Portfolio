import { Foot } from "../Foot/Foot";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Home } from "../Home/Home";
import AboutMe from "../Me/AboutMe";
import FootSeparete from "../Foot/FootSeparete";

export function Dashboard() {

	return (
		<div className="flex flex-col w-full overflow-y-scroll overflow-x-hidden items-center sm:max-w-[90vw] sm:max-h-[100vh] cel:max-h-[85vh] scroll-smooth scrollbar-thin scrollbar-thumb-purple-300/60 scrollbar-track-transparent">
			<Home/>
			<Skills/>
			<Projects/>
			<AboutMe/>
			<FootSeparete/>
			<Foot/>
		</div>
	);
}