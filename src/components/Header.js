import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className='Header'>
          <h1>Form Managements</h1>
          <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="register">Register</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="enrollment">Enrollment</Link></li>
                <li><Link to= "signup">Signup</Link></li>
                <li><Link to="registration">Registration(final)</Link></li>
                <li><Link to="registration">Registration(hook)</Link></li>
              </ul>
          </nav>
    </header>
  )
}

export default Header
