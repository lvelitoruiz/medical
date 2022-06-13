import React from "react";
import { Link } from "gatsby";

//styles 
import './navbar.scss';

const Navbar = () => {
	return(
		<React.Fragment>
			<header id="header" className="">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="navbar_container">
								<div className="logo_container">
									<Link to="/">
										<img src="" alt="MedicalDent Logo" className="logo"/>
									</Link>
								</div>
								<nav>
									<ul className="nav">
										<li className="nav_item"><Link to="/nosotros" className="nosotros">Nosotros</Link></li>
										<li className="nav_item"><Link to="/diagnóstico-en-imagenes" className="diagnostico">Diagnóstico en imagenes<span className="toggler_icon"></span></Link></li>
										<li className="nav_item"><Link to="/laboratorio-dental-digital" className="laboratorio">Laboratorio Dental Digital<span className="toggler_icon"></span></Link></li>
										<li className="nav_item"><Link to="/casos-clinicos" className="casos_clinicos">Casos Clínicos</Link></li>
										<li className="nav_item"><Link to="/contacto" className="contacto">Contacto</Link></li>
										<li className="nav_item"><Link to="/ingresar" className="login">Ingresar<span className="icon"></span></Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
export { Navbar };	