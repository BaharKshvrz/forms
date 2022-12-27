import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useCountries from '../../hooks/useCountries';
import TextError from '../formik/TextError';
import Spinner from "react-spinkit";

const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
};

const handleSubmit = (values, onSubmitProps) => {
    console.log("Formik values::", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
});

export default function SignupForm() {
    const [countries, loadingCountries] = useCountries();
    console.log(countries);
    console.log(loadingCountries);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
        {
           formik => (
                <Form>
                    <div className='form-control'>
                        <label htmlFor='firstName'>First Name</label>
                        <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                        />
                        <ErrorMessage name='firstName' component={TextError} />
                   </div>
                   
                   <div className='form-control'>
                        <label htmlFor='lastName'>Last Name</label>
                        <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                        />
                        <ErrorMessage name='lastName' component={TextError} />
                   </div>
                   
                   <div className='form-control'>
                       <label>Country</label>
                       <Field as="select"
                           name="country"
                           className="selectBtn selectWithSpinner"
                           disabled={loadingCountries}
                        >
                        {
                            countries.map(option => {
                                return <option value={option.name} key={option.name}>
                                           {option.name}
                                        </option>;
                            })
                        }
                       </Field>
                       {loadingCountries && <Spinner className="slcSpinner" name="double-bounce" />}
                      <ErrorMessage name='country' component={TextError} />
                    </div>

                   <button type='submit' className='btnForm'> SignUp </button>
                </Form>
            )
        }
    </Formik>
  )
};
