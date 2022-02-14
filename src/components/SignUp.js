import { Link } from 'react-router-dom';
import { EnrolleesContext } from '../Contexts/EnrolleesContext';
import { useContext } from 'react';
import serialize from 'form-serialize';

function SignUp() {
    const { enrollees } = useContext(EnrolleesContext);
    
    const handleFormSubmit = e => {
        e.preventDefault();
        const newRegistered = serialize(e.target, { hash: true });
        console.log(newRegistered);
        console.log('hello');
    };

    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Sign-Up</h2>
            <form className="row g-3 mx-auto" onSubmit={handleFormSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">E-Mail</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="ex. name@mail.net" />
                </div>
                {/* <Link to="/LogIn"> */}<input type='submit' value='Submit'/>{/* </Link> */}
               {/* button  useNavigate to go log in page directly   button   */}
            </form>
        </>
    );
}

export default SignUp;