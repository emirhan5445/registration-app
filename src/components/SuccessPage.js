import { useContext } from 'react';
import { EnrolleesContext } from '../Contexts/EnrolleesContext';

function SuccessPage() {
  const { logInData } = useContext(EnrolleesContext);

  return (
    <>
      <div className="alert alert-warning m-5" role="alert">
        <h2>Hello {logInData.formUserName}, You logged in successfuly.</h2>
      </div>
    </>
  );
}

export default SuccessPage;