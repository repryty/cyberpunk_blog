// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import RDSLogo from '../assets/RDSLOGO.png'

import './Header.css'

function Header() {
  return (
    <header>
        <ul>
            <li><img src={RDSLogo} alt="RDSLogo" id="rds-logo"/></li>
            <li>Main</li>
            <li>Posts</li>
            <li>About</li>
        </ul>
    </header>
  )
}

export default Header
