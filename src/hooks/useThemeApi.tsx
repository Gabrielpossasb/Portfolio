import { createContext, ReactNode, useState } from "react"

interface MyTheme {
   id: string,
   background: string,
   textFundo: string,
   button: string,
   border: string,
   navSide: number,
   light: number,
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

   const [ myTheme, setMyTheme] = useState<MyTheme>(MyThemeRequest[2])

   function selectMyTheme(id: string) {
      const select = MyThemeRequest.filter((data: MyTheme) => {
         return (data.id === id)
      })
      console.log(select)
      setMyTheme(select[0])
   }

   return (
      <MyThemeContext.Provider value={{ myTheme, selectMyTheme}}>
         {children}
      </MyThemeContext.Provider>
   );
}