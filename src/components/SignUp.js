import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Sign-Up</h2>
            <form className="row g-3 mx-auto">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">E-Mail</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="ex. name@mail.net" />
                </div>
                <Link to="/LogIn"><button>Submit</button></Link>
               {/* button  useNavigate to go log in page directly   button   */}
            </form>
        </>
    );
}

export default SignUp;