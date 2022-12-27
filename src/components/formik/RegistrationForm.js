import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const RegistrationForm = () => {
    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonmoc'}
    ];
  
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: '',
    }
    
   const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required'),
         modeOfContact: Yup.string().required('Required'),
        // if "modeOfContact" is "telephonmoc" this feild is mandaroy
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonmoc',
            then: Yup.string().required('Required')  
       }),
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
                      control="input"
                      type="email"
                      name="email"
                      label="Email"
                />
                <FormikControl
                      control="input"
                      name="password"
                      label="Password"
                      type="password"
                  />
                  
                  <FormikControl
                      control="input"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                  />
                  
                  <FormikControl
                      control="radio"
                      name="modeOfContact"
                      label="Mode of Contact"
                      options={options}
                  />
                  
                  <FormikControl
                      control="input"
                      name="phone"
                      label="phone"
                      type="text"
                  />
                <button type="submi" className='btnForm' disabled={!formik.isValid}> Submit </button>
              </Form>
          }
      }
  </Formik>
  )
}

export default RegistrationForm
