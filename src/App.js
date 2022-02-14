import './App.css';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import ErrorPage from './components/ErrorPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { EnrolleesContext } from './Contexts/EnrolleesContext';

function App() {
  const [enrollees, setEnrollees] = useState([]);

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

        <EnrolleesContext.Provider value={{ enrollees }}>
          <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </EnrolleesContext.Provider>
      </Router>



    </>
  );
}

export default App;
