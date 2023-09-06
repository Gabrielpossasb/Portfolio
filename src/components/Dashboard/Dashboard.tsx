import { Foot } from "../Foot/Foot";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Home } from "../Home/Home";
import AboutMe from "../Me/AboutMe";
import FootSeparete from "../Foot/FootSeparete";

export function Dashboard() {

	return (
		<div className="flex flex-col items-center sm:w-[90%] scroll-smooth">
			<Home/>
			<Skills/>
			<Projects/>
			<AboutMe/>
			<FootSeparete/>
			<Foot/>
		</div>
	);
}