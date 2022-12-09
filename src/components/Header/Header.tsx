import ReactModal from "react-modal";
import { Container, Content } from "./style";
import logo from '../../assets/MyLogo.svg' 
import { useContext, useState } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";
import { NavigationContext } from "../../hooks/useNavigation";

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
 

export function Header() {
	const { myTheme, selectMyTheme } = useContext(MyThemeContext)
	const { createNavigation } = useContext(NavigationContext)

	const [modalOpen, setModalOpen ] = useState(false);
	const [themeSelect, setThemeSelect] = useState('purple')

	function handleSetTheme(id: string, InfoSelect: string) {
		createNavigation( InfoSelect )

		selectMyTheme( id )
	}

	return(
		<Container theme={myTheme}>
			<Content theme={myTheme}>
				<div className="spaceNavBar"/>
			
				<img src={logo} alt="Logo"/>
				<div className="bntsHeader">
					<button
						type="button"
						onClick={()=>handleSetTheme('purple', 'house')}
					>HOME</button>
					<button
						type="button"
						onClick={()=>handleSetTheme('red', 'skills')}
					>SKILLS</button>
					<button
						type="button"
						onClick={()=>handleSetTheme('cian', 'projects')}
					>PROJECTS</button>
					<button
						type="button"
						onClick={()=>handleSetTheme('yellow', 'skills')}
					>SOBRE MIN</button>
					<button
						type="button"
						onClick={()=>handleSetTheme('yellow', 'contato')}
					>CONTATE-ME</button>
				</div>
				
				<button onClick={()=> setModalOpen(true)}>CONFIG</button>					

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
						<button onClick={() => selectMyTheme( themeSelect )}>
							SET
						</button>

						
					</ReactModal>
			</Content>
		</Container>
	)
}