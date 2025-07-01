import React from 'react'
import LandingPage from './Component/LandingPage'
import {Route , Routes} from 'react-router-dom'

import Selection from './Component/Selection'; 
import DeveloperLogin from './Component/DeveloperLogin';
import UserLogin from './Component/UserLogin';
import DevSignup from './Component/DevSignup'; 
import UserSignup from './Component/UserSignup'; 
import DevDashboard from './Component/DevDashboard';
import UserDashbord from './Component/UserDashbord';

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/section" element={<Selection/>} />
        <Route path="/section/developerLogin" element={<DeveloperLogin/>} />
        <Route path="/section/userLogin" element={<UserLogin/>} />
        <Route path="/section/devsignup" element={<DevSignup/>} />
         <Route path="/section/usersignup" element={<UserSignup/>} />
        <Route path="/DeveloperDashboard" element={<DevDashboard/>} />
        <Route path="/UserDashboard" element={<UserDashbord/>} />

      </Routes>

    </div>
  )
}
