import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="navbarCont">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <h1 className="navbar-brand" to="#">AGROJAS</h1>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/categoria/azucar">Azucar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categoria/alimentos">Alimentos para animales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/categoria/veneno">Venenos</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        

        </div>

);
           
};

export default Navbar;