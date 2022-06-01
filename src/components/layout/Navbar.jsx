//import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        STAFFERY
      </div>
      <ul>
        <li> <a href="/"><span>Home</span></a> </li>
        <li> <a href="/about/"><span>About</span></a> </li>
        <li> <a href="/contact/"><span>Contact</span></a> </li>
        <li> <a href="/companies/"><span>Companies</span></a> </li>
      </ul>
      <a href="/login/">Anmelden</a>
    </nav>
  )
}

export default Navbar