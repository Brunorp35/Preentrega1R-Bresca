import "./Navbar.css"
import logo from "../img/LogoHam.png"
import CartWidget from "./CartWidget"

const Navbar = () => {

    return (
        <nav className="navbar">
            
            <img src={logo} alt="" />
            
            <ul className="listanav">
                <li><a href="#">Hamburguesas</a></li>
                <li><a href="#">Papas</a></li>
                <li><a href="#">Bebidas</a></li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default Navbar