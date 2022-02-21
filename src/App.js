import './App.css';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { EnrolleesContext } from './Contexts/EnrolleesContext';
import { v4 as uuidv4 } from 'uuid';
import SubmittedPage from './components/SubmittedPage';

function App() {
  const [enrollees, setEnrollees] = useState([]);
  const [logInData, setLogInData] = useState({});
  const { formUserName, formPassword } = logInData;
  
  const addPerson = (userName, pass, email) => {
    setEnrollees([...enrollees, {id: uuidv4(), userName, pass, email}]);
    console.log(enrollees);
  };

  const checkingDatas = () => {
    
    enrollees.forEach(enrollee => {
      
      enrollee.userName === formUserName ? console.log('true') : console.log('false');

      /* console.log(enrollee.userName, enrollee.pass);
      console.log(logInData);
      console.log(formUserName + " / " + formPassword); */
    })
    
  };

  useEffect(() => {
    const endPoint = 'http://localhost:3002/enrollees';
    axios.get(endPoint)
      .then(response => {
        const data = response.data
        setEnrollees(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [setEnrollees]);
  
  return (
    <>
      <Router>
        <NavBar />

        <EnrolleesContext.Provider value={{ addPerson, setLogInData, logInData, checkingDatas }}>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/Submitted' element={<SubmittedPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </EnrolleesContext.Provider>
      </Router>



    </>
  );
}

export default App;
