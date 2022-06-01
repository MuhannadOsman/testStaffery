import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import NavBar from "./components/layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Companies from "./pages/Companies"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import Footer from "./components/layout/Footer"

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/companies" element={<Companies/>} />
        </Switch>  
        <Footer />
    </BrowserRouter>
    
  )
}

export default Routes