import { Container, Content } from "./style";
import  logo  from "../../assets/logo.svg"



export function Header() {
	return(
		<Container>
			<Content>
			
				<img src={logo} alt="Logo"/>
				<div className="bntsHeader">
					<button>HOME</button>
					<button>PROJECTS</button>
					<button>SOBRE MIN</button>
					<button>CONTATE-ME</button>
				</div>
		
			</Content>
		</Container>
	)
}