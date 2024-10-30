import Navbar from "./navBar";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				
				<Link to={"/"} className="navbar-brand">
					Keith Sialana's <strong>[Portfolio]</strong>
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<Navbar />
			</div>
		</nav>
	);
}

export default Header;
