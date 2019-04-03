import React from 'react'
import logoImgPath from './ab.jpg';

const Header = () => {

  return (
    <div>
      <a href="/">
        <div className="header">
          <a href="/">
            <img src={logoImgPath} className="logo" alt="logo" />
          </a>
          <h2>Welcome to GraphSQL</h2>
        </div>
      </a>
    </div>
  )
}

export default Header
