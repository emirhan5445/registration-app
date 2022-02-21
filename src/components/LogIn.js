import { Link } from 'react-router-dom';
import serialize from 'form-serialize';
import { useContext } from 'react';
import { EnrolleesContext } from '../Contexts/EnrolleesContext';

function LogIn() {
    const { setLogInData, checkingDatas } = useContext(EnrolleesContext);

    const handleFormSubmit = e => {
        e.preventDefault();
        const formData = serialize(e.target, { hash: true });
        const { formUserName, formPassword } = formData;
        setLogInData({ formUserName, formPassword });
    };

    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Log-In</h2>
            <div className="container">
                <form className="mt-5" onSubmit={handleFormSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Username or E-Mail</label>
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
                    <Link to="/Submitted"><input type="submit" className="btn btn-danger btn-block" value="Log In" onClick={checkingDatas} /></Link>

                </form>

            </div>
            {/* button  useNavigate to go log in page directly   button   */}

        </>
    );
}

export default LogIn;