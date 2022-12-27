import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const LoginForm = () => {
  const initialValues = {
       email: '',
       password: '',
  }
  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit =  values => {
       console.log('form data:', values)
  }
    
  return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit= {onSubmit}
      >
        {
            formik => {
                return <Form>
                   <FormikControl
                        control="chakrainput"
                        type="email"
                        name="email"
                        label="Email"
                  />
                  <FormikControl
                        control="chakrainput"
                        name="password"
                        label="Password"
                        type="password"
                  />
                  <button type="submi" className='btnForm' disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        }
      </Formik>
  )
}

export default LoginForm
