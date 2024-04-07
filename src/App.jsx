import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
// import EndUserPage from './components/EndUserPage';
import TechSupportPage from './components/TechSupportPage';
import AdminPage from './components/AdminPage';
import RegistrationPage from './components/RegistrationPage';
import UserTicket from './components/UserTicket';

function App() {
  const [ticketData, setTicketData] = useState(null); // State to hold the ticket data

  const handleTicketSubmit = (formData) => {
    // Set the ticket data when the form is submitted
    setTicketData(formData);
  }
  const handleRegister = (userData) => {
    // Implement registration logic here
    console.log('Registering user:', userData);
  };

  const handleLogin = (userData) => {
    // Implement login logic here
    console.log('Logging in user:', userData);
    alert("Login Successfully!")
      // Navigate('/techsupportpage')
      
  };

 
  return  (
    
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />
          <Route path="/user-ticket" element={<UserTicket ticketData={ticketData}/>} />
          <Route path="/tech-support" element={<TechSupportPage onSubmit={handleTicketSubmit}/>} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';
// import AdminPage from './components/AdminPage';
// import EndUserPage from './components/EndUserPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={<LoginPage/>} />
//         <Route path="/register" component={<RegistrationPage/>} />
//         <Route path="/admin" component={<AdminPage/>} />
//         <Route path="/end-user" component={<EndUserPage/>} />
//         {/* Add a default route to handle unknown paths */}
//         <Route component={NotFoundPage} />
//       </Routes>
//     </Router>
//   );
// };

// const NotFoundPage = () => {
//   return (
//     <div>
//       <h1>404 - Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   );
// };

// export default App;


