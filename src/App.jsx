import { Outlet } from "react-router-dom"
import Nav from "./component/Nav"



function App() {


  return (
    <>
      <div className="w-[95%] mx-auto">
            <Nav></Nav>
           <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
