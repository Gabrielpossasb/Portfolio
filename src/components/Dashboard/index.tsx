import { Foot } from "../Foot";
import { Home } from "../Home";
import { Container } from "./style";

export function Dashboard() {
	return (
		<Container>
			<Home/>
			<Foot/>
		</Container>
	);
}