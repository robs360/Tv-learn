import { Outlet } from "react-router-dom"
import Nav from "./component/Nav"
import Footer from "./component/Footer"



function App() {


  return (
    <>
      <div className="w-[95%] mx-auto">
            <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
      </div>
    </>
  )
}

export default App
