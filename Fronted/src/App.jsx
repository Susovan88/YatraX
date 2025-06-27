import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUpPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PaymentsPage from './pages/PaymentPage/PaymentsPage';
import PaymentConfirm from './pages/PaymentConfirmationPage/PaymentConfirmationPage';
import Ticket from './pages/TicketsPage/TicketsPage'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/payments' element={<PaymentsPage />} />
        <Route path='/payment-confirm' element={<PaymentConfirm />} />
        <Route path='/ticket' element={<Ticket/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
