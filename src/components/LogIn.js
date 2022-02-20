import { Link, useParams } from 'react-router-dom';

function LogIn() {
    const { userId } = useParams;
    console.log(userId);

    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Log-In</h2>
            <form className="row g-3 mx-auto">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Username or E-Mail</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>

                <Link to="/"><button>Submit</button></Link>
                {/* button  useNavigate to go log in page directly   button   */}
            </form>
        </>
    );
}

export default LogIn;