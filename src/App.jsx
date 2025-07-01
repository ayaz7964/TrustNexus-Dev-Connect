import React from 'react'
import LandingPage from './Component/LandingPage'
import {Route , Routes} from 'react-router-dom'

import Selection from './Component/Selection'; 
import DeveloperLogin from './Component/DeveloperLogin';
import UserLogin from './Component/UserLogin';

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/section" element={<Selection/>} />
        <Route path="/section/developerLogin" element={<DeveloperLogin/>} />
        <Route path="/section/userLogin" element={<UserLogin/>} />
      </Routes>

    </div>
  )
}
