import React from 'react'
import logo from './logo.png';

const Header = () => (
  <div>
    <a href="/">
      <div className="header">
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <h2>Welcome to GraphSQL</h2>
      </div>
    </a>
  </div> 
)

export default Header
