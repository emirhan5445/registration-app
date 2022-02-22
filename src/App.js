import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { EnrolleesContext } from './Contexts/EnrolleesContext';
import { v4 as uuidv4 } from 'uuid';
import SuccessPage from './components/SuccessPage';

function App() {
  const [enrollees, setEnrollees] = useState([]);
  const [logInData, setLogInData] = useState({});
  const [track, setTrack] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [checkDatas, setCheckDatas] = useState(null);
  const { formUserName, formPassword } = logInData;
  
  const addPerson = (userName, pass, email) => {
    setEnrollees([...enrollees, {id: uuidv4(), userName, pass, email}]);
  };

  const checkingDatas = () => {
    enrollees.forEach(enrollee => {  
      (enrollee.userName === formUserName) && (enrollee.pass === formPassword) ? setTrack('doneV2') : setCheckDatas(false);
    }) 
    setIsTrue(false);
  };

  useEffect(() => {
    if (track === 'done') {
      setIsTrue(true);
    } else if (track === 'doneV2') {
      setCheckDatas(true);
      console.log(checkDatas);
    }
  }, [track, checkDatas]);

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
        <EnrolleesContext.Provider value={{ addPerson, setLogInData, logInData, setTrack, checkDatas }}>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/SuccessPage' element={<SuccessPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </EnrolleesContext.Provider>
      </Router>
      
      {isTrue === true ? checkingDatas() : null}    
    </>
  );
}

export default App;
