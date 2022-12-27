import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const EnrollmentForm = () => {
    const dropdownOptions = [
        { key: 'Select your course', value: '' },
        { key: 'Raact', value: 'raact' },
        { key: 'Angular', value: 'angular'},
        { key: 'Vue', value: 'vue'},
    ];

    const checkboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'Css', value: 'css'},
        { key: 'Javascript', value: 'javascript'},
    ];
  
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseData: '',
    }
    
   const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        courseData: Yup.date().required('Required').nullable(),
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
                      control="textarea"
                      name="bio"
                      label="Bio"
                  />
                  
                  <FormikControl
                      control="select"
                      name="course"
                      label="Course"
                      options= {dropdownOptions}
                  />
                  
                  <FormikControl
                      control="checkbox"
                      name="skills"
                      label="Your Skills"
                      options={checkboxOptions}
                  />

                  <FormikControl
                      control="date"
                      name="courseData"
                      label="Course Date"
                  />

                <button type="submi" className='btnForm' disabled={!formik.isValid}> Submit </button>
              </Form>
          }
      }
  </Formik>
  )
}

export default EnrollmentForm
