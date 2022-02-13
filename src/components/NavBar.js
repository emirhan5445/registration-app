import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Navbar</span>

                <div className="d-flex">
                    {/* <button className="btn btn-outline-success" type="submit">Sign-In</button> */}
                    <Link to='/LogIn'><button className="btn btn-outline-success" type="submit">Log-In</button></Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;