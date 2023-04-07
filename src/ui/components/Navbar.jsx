import { Link, NavLink } from 'react-router-dom';


//  TODO: Colocar icono, Colocar boton de cambio de tema
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className=" navbar-brand" 
                to="/"
            >
                <img src="" alt="" />
                Odontologos
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/contact"
                    >
                        Contact
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/favs"
                    >
                        Favs
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="nav-item nav-link" 
                    >
                        Change Theme
                    </button>
                </ul>
            </div>
        </nav>
    )
}