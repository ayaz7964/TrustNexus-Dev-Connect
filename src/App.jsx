import React from 'react'
import LandingPage from './Component/LandingPage'
import {Route , Routes} from 'react-router-dom'

import Selection from './Component/Selection'; 
import DeveloperLogin from './Component/DeveloperLogin';'./Component/DeveloperLogin'

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/section" element={<Selection/>} />
        <Route path="/section/developer" element={<DeveloperLogin/>} />
        <Route path="/section/user" element={<h1>User Section</h1>} />
      </Routes>

    </div>
  )
}
