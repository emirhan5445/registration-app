// import { Link } from 'react-router-dom';
import { EnrolleesContext } from '../Contexts/EnrolleesContext';
import { useContext } from 'react';
import serialize from 'form-serialize';

function SignUp() {
    const { addPerson } = useContext(EnrolleesContext);

    const handleFormSubmit = e => {
        e.preventDefault();
        const newRegistered = serialize(e.target, { hash: true });
        const { formUserName, formPassword, formEmail } = newRegistered;
        addPerson(formUserName, formPassword, formEmail);
    };

    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Sign-Up</h2>
            <div className="container">
                <form className="mt-5" onSubmit={handleFormSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Username</label>
                            <input type="text"
                                className="form-control"
                                name="formUserName" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="formPassword" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">E-Mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="formEmail" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Sign Up" />
                </form>
            </div>
        </>
    );
}

export default SignUp;