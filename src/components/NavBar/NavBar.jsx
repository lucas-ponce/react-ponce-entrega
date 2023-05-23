import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"}><img className="ponceLogo" src="/public/img/poncebrand.png" alt="logoPonce" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/fragancias"}>Fragancias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/nosotros"}>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Carrito</a>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar