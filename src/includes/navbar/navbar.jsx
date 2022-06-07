import React from "react";
import { Link } from "gatsby";

//styles 
import './navbar.scss';

const Navbar = () => {
	return(
		<React.Fragment>
			<header id="header">
				<div className="navbar_container">
					<div className="logo_container">
						<Link to="/">
							<img src="" alt="MedicalDent Logo" className="logo"/>
						</Link>
					</div>
					<nav>
						<ul className="nav">
							<li className="nav_item"><Link to="/nosotros" className="nosotros">Nosotros</Link></li>
							<li className="nav_item"><Link to="" className="diagnostico">Diagnóstico en imagenes <span className="toggler_icon"></span></Link></li>
							<li className="nav_item"><Link to="" className="laboratorio">Laboratorio Dental Digital <span className="toggler_icon"></span></Link></li>
							<li className="nav_item"><Link to="" className="casos_clinicos">Casos Clínicos</Link></li>
							<li className="nav_item"><Link to="/contacto" className="contacto">Contacto</Link></li>
							<li className="nav_item"><Link to="/ingresar" className="ingresar">Ingresar</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		</React.Fragment>
	);
}
export { Navbar };	