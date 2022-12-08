import { createContext, ReactNode, useState } from "react"

interface MyTheme {
   id: string,
   background: string,
   textFundo: string,
   button: string,
   border: string,
   navSide: string,
   light: string,
   line: string,
   bgWelcome: string,
}

interface MyThemeProviderProps {
   children: ReactNode;
}

interface MyThemeContextData {
   myTheme: MyTheme;
   selectMyTheme: ( id: string ) => void;
}

export const MyThemeContext = createContext<MyThemeContextData>(
   {} as MyThemeContextData
);

export function MyThemeProvider({children}: MyThemeProviderProps) {
   const MyThemeRequest: MyTheme[] = require('../MyTheme.json')

   const [ myTheme, setMyTheme] = useState<MyTheme>(MyThemeRequest[1])

   async function selectMyTheme(id: string) {
      const deleyzin = MyThemeRequest[4]
      const select = MyThemeRequest.filter((data: MyTheme) => {
         return (data.id === id)
      })
      await new Promise(resolve => setTimeout(resolve, 300));
      setMyTheme(deleyzin)
      await new Promise(resolve => setTimeout(resolve, 300));
      setMyTheme(select[0])
      
   }

   return (
      <MyThemeContext.Provider value={{ myTheme, selectMyTheme}}>
         {children}
      </MyThemeContext.Provider>
   );
}