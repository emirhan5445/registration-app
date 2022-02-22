import { Link } from 'react-router-dom';
import serialize from 'form-serialize';
import { useContext } from 'react';
import { EnrolleesContext } from '../Contexts/EnrolleesContext';

function LogIn() {
    const { setLogInData, setTrack, checkDatas } = useContext(EnrolleesContext);

    const handleFormSubmit = e => {
        e.preventDefault();
        const formData = serialize(e.target, { hash: true });
        const { formUserName, formPassword } = formData;
        setLogInData({ formUserName, formPassword });
        setTrack('done');
    };

    return (
        <>
            <h2 className="position-absolute top-0 mt-4 start-50 translate-middle">Log-In</h2>
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
                    <input type="submit" className="btn btn-danger btn-block m-5" value="Log In" />
                    {
                        (checkDatas === true) ?
                            <Link to='/SuccessPage' style={{ textDecoration: 'none' }}>
                                <div className="alert alert-success d-flex align-items-center m-5" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
                                    <div>
                                        You have logged in successfuly. Click to going to success page.
                                    </div>
                                </div>
                            </Link> :
                            null
                    }
                    {
                        (checkDatas === false) ?
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"></svg>
                                    <div>
                                        Your datas does not match. Please check them.
                                    </div>
                                </div> :
                            null
                    }
                </form>
            </div>
        </>
    );
}

export default LogIn;