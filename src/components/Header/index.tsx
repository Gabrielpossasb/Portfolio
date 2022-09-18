import ReactModal from "react-modal";
import { Container, Content } from "./style";
import  logo  from "../../assets/logo.svg"
import { useContext, useState } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";

ReactModal.setAppElement('#root');

interface ThemeProps {
	theme: {
	   id: string,
	   background: string,
	   textFundo: string,
	   button: string,
	   border: string,  
	},
	setarTheme: (arg0 :string) => void
 }
 

export function Header({theme, setarTheme }: ThemeProps) {
	const { myTheme, selectMyTheme } = useContext(MyThemeContext)

	const [modalOpen, setModalOpen ] = useState(false);
	const [themeSelect, setThemeSelect] = useState('purple')

	function handleSetTheme(id: string) {
		selectMyTheme(
			id,
		);
	}

	return(
		<Container theme={myTheme}>
			<Content theme={myTheme}>
			
				<img src={logo} alt="Logo"/>
				<div className="bntsHeader">
					<button>HOME</button>
					<button>PROJECTS</button>
					<button>SOBRE MIN</button>
					<button>CONTATE-ME</button>
					<button onClick={()=> setModalOpen(true)}>CONFIG</button>					
				</div>

				<ReactModal
					isOpen={modalOpen}
					onRequestClose={() => setModalOpen(false)}
					overlayClassName={"overlayModalContent"}
					className={"modalContent"}
					>
						<div>
							<button onClick={() => setThemeSelect('red')} className='themRed'></button>
							<button onClick={() => setThemeSelect('yellow')} className='themYellow'></button>
							<button onClick={() => setThemeSelect('purple')} className='themPurple'></button>
							<button onClick={() => setThemeSelect('cian')} className='themCian'></button>
						</div>
						<button onClick={() => handleSetTheme(themeSelect)}>
							SET
						</button>

						
					</ReactModal>
			</Content>
		</Container>
	)
}