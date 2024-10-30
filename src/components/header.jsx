import Navbar from "./navBar";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				
				<Link to={"/"} className="navbar-brand">
					Keith Sialana's <strong>[Portfolio]</strong>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<Navbar />
			</div>
		</nav>
	);
}

export default Header;
