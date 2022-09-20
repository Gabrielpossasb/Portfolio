import { Container, Content } from "./styles";
import { DiCss3, DiReact  } from "react-icons/di";
import Oval from "../../assets/Oval.svg"
import { useContext } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";

export function Skills() {
   const { myTheme } = useContext(MyThemeContext)

   return (
      <Container theme={myTheme}>
         <Content theme={myTheme}>
            <h1 className="titleS">SKILLS</h1>
            <div></div>
           
            <div className="skills">
               <h2><span><img src={Oval}/></span> React</h2>
               <h2><span><img src={Oval}/></span> JavaScript</h2>
               <h2><span><img src={Oval}/></span> HTML</h2>
               <h2><span><img src={Oval}/></span> CSS</h2>
               <h2><span><img src={Oval}/></span> TypeScript</h2>
               <h2><span><img src={Oval}/></span> GrapgQL</h2>

            </div>

            <div className="skillsFuture">
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />

            </div>
         </Content>
      </Container>
   );
}