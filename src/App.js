import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';
import './App.css';
import LoginForm from './components/formik/LoginForm';
import RegistrationForm from './components/formik/RegistrationForm';
import EnrollmentForm from './components/formik/EnrollmentForm';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';
import Registration from './components/react-final-form/Registration';
import SignUpForm from './components/formik/FormWithFetch';
import FormRegistration from './components/react-hook-form/FormRegistration';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formik" element={<Layout />}>
          <Route path="register">
            <Route index element={<RegistrationForm />}></Route>
          </Route>
          <Route path="login">
            <Route index element={<LoginForm />}></Route>
          </Route>
          <Route path="enrollment">
            <Route index element={<EnrollmentForm />}></Route>
          </Route>

          <Route path="signup" element={<SignUpForm/>}></Route>
        </Route>

        <Route path='/finalform' element={<Layout/>}>
           <Route path='registration' element={<Registration/>}></Route>
        </Route>

        <Route path='/hookform' element={<Layout/>}>
           <Route path='registration' element={<FormRegistration/>}></Route>
        </Route>
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
