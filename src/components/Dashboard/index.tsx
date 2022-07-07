import { Foot } from "../Foot";
import { Home } from "../Home";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { Container } from "./style";

export function Dashboard() {
	return (
		<Container>
			<Home/>
			
			<Foot/>
		</Container>
	);
}