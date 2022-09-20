import { createContext, ReactNode, useState } from "react"

interface NavigationProviderProps {
   children: ReactNode;
}

interface NavigationContextData {
   navigation: string;
   createNavigation: ( id: string ) => void;
}

export const NavigationContext = createContext<NavigationContextData>(
   {} as NavigationContextData
);

export function NavigationProvider({children}: NavigationProviderProps) {
   const [ navigation, setNavigation ] = useState('projects')

   function createNavigation(id: string) {
      setNavigation(id)
   }

   return (
      <NavigationContext.Provider value={{ navigation, createNavigation}}>
         {children}
      </NavigationContext.Provider>
   );
}