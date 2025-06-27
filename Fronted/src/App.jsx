import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUpPage';
import SearchPage from './pages/SearchPage/SearchPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
