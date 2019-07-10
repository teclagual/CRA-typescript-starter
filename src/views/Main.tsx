import React, { FC, useContext } from "react"
import { UserContext } from "../globalState"
// import styled from "styled-components"

export const Main: FC = () => {
   const userContext = useContext(UserContext)
   console.log("Main.ts - userContext.value: ", userContext.value)
   return (
      <div>
         <p>Main</p>
      </div>
   )
}
