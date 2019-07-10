import axios from "axios"
import { API } from "../clientConfiguration"

export const instance = axios.create({
   baseURL: API
   // withCredentials: true,
   // params: {
   //    client
   // }
})

// instance
//    .get("/user/logout")
//    .then((res) => {
//       userContext.setValue(undefined)
//       history.replace("/")
//    })
//    .catch((error) => {
//       console.log("error: ", error)
//    })
