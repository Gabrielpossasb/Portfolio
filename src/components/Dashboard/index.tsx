import { Foot } from "../Foot";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { Home } from "../Home";



export function Dashboard() {
	return (
		<div className="flex flex-col items-center">
			<Home/>
			<Skills/>
			<Projects/>
			<Foot/>
		</div>
	);
}