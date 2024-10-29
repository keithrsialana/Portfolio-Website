import Navbar from "./navBar";

function Header(){
    return (
        <header>
            <Link to='/'>Keith's Website</Link>
            <Navbar />
        </header>
    );
}

export default Header;