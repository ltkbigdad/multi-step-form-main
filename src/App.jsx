import {Routes, Route} from "react-router-dom"

import { YourInfo } from "./pages/yourInfo"
import { SelectPlan} from "./pages/selectPlan"
import { AddOn } from "./pages/addOn"
import { Finishing } from "./pages/finishing"
import { ThankYou } from "./pages/thankYou"
import { SideBar } from "./components/sideBar"

export const App = () => {
  return(
    <>
      <SideBar/>
      
      <Routes>
        <Route path="/" element={<YourInfo/>}/>
        <Route path="/selectplan" element={<SelectPlan/>}/>
        <Route path="/addon" element={<AddOn/>}/>
        <Route path="/finishing" element={<Finishing/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </>
  )
}