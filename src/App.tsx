import React from "react"
import { THEME } from "./clientConfiguration"
import { ThemeProvider } from "styled-components"
import { ContextProvider } from "./globalState/state"
import { Main } from "./views"
import "./App.css"

const App: React.FC = () => {
   return (
      <ThemeProvider theme={THEME}>
         <ContextProvider>
            <Main />
         </ContextProvider>
      </ThemeProvider>
   )
}

export default App
