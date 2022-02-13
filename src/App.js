import './App.css';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>



      {/* route path='*' element={<ErrorPage />} */}    
    </>
  );
}

export default App;
