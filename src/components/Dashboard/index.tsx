import { ThemeSelectProps } from "../../App";
import { Foot } from "../Foot";
import { Home } from "../Home";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { Container } from "./style";



export function Dashboard({theme}: ThemeSelectProps) {
	return (
		<Container>
			<Home theme={theme}/>
			
			<Foot/>
		</Container>
	);
}