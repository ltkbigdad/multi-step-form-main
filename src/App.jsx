import {Routes, Route} from "react-router-dom"
import './style.css'

import { YourInfo } from "./pages/yourInfo"
import { SelectPlan} from "./pages/selectPlan"
import { AddOn } from "./pages/addOn"
import { Finishing } from "./pages/finishing"
import { ThankYou } from "./pages/thankYou"
import { SideBar } from "./components/sideBar"

export const App = () => {
  return(
    <>
      <div className="Container"> 
        <div className="Content">
          <div className="contentBox">
            <SideBar/>            
            <Routes>
              <Route path="/" element={<YourInfo/>}/>
              <Route path="/selectplan" element={<SelectPlan/>}/>
              <Route path="/addon" element={<AddOn/>}/>
              <Route path="/finishing" element={<Finishing/>}/>
              <Route path="/thankyou" element={<ThankYou/>}/>
            </Routes>
          </div>        
        </div>       
      </div>
    </>
  )
}