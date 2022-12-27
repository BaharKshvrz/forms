import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
      <>
          <Header/>
          <p className='home'>
              This project includes 3 ways of form management:
              <ul>
                  <li> 1. formik (<Link to="/formik/login">link</Link>) </li>
                  <li> 2. Final form  (<Link to="/finalform/registration">link</Link>) </li>
                  <li> 3. React Hook Form (<Link to="/hookform/registration">link</Link>) </li>
              </ul>
          </p> 
    </>
  )
}

export default Home
