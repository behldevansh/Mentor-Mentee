import { createContext } from "react";
import { mentors } from "../assets/assets_frontend/assets";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const value = {
    mentors
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider