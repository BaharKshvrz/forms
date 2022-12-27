import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import TextError from '../TextError';

const savedValues = {
    name: 'Bahar',
    email: 'bahar.k@gmail.com',
    channel: 'spring',
    comments: 'Hi everyone!',
    address: 'Tehran',
    social: {
        facebook: 'barha#face',
        twitter: 'bahar#twitt',
    },
    phoneNumbers: ['09361111111', '093622222222'],
    phNumbers: ['041', '042', '043']
};

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values, onSubmitProps) => {
    console.log("Formik values::", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid Email Addres").required("Required"),
    channel: Yup.string().required('Required'),
    address: Yup.string().max(20, 'Maximum character can be 20.')
});

export default function Signup() {
    const [formValues, setFormValues] = useState(null);
    /*
      -- field level validation --
      validation for comments
      it automatically get the value of comments field
    */
    const validateComments = value => {
        let error;
        if (!value) {
            error = "Required";
        }
        return error;
    }

    return (
        <Formik
            initialValues={formValues || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
            // validation happens on change event, on blur event, and submit
            // validateOnChange={false}
            // validateOnBlur={false}
        >
        {
           formik => {
            return (
                <Form>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                        />
                        <ErrorMessage name='name' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                        />
                        {/* Another way to show errors */}
                        <ErrorMessage name='email'>
                            {errorMsg => <div className='error'> {errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                
                    <div className='form-control'>
                        <label htmlFor='channel'>Channel</label>
                        <Field
                            type="text"
                            id="channel"
                            name="channel"
                        />
                        <ErrorMessage name='channel' component={TextError} />
                    </div>

                    {/* Renders a CustomInputComponent  */}
                    <div className='form-control'>
                        <label htmlFor='address'>Address</label>
                        <Field
                            component={CustomAddressComponent}
                            id="address"
                            name="address"
                        />
                        <ErrorMessage name='address' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='comments'>Comments</label>
                        <Field
                            as="textarea"
                            id="comments"
                            name="comments"
                            validate={validateComments}
                        />
                        <ErrorMessage name='comments' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='facebook'>Facebook Profile</label>
                        <Field
                            type="text"
                            id="facebook"
                            name="social.facebook"
                        />
                        <ErrorMessage name='social.facebook' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='twitter'>Twitter Profile</label>
                        <Field
                            type="text"
                            id="twitter"
                            name="social.twitter"
                        />
                        <ErrorMessage name='social.twitter' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='primayPhone'>Primay Phone</label>
                        <Field
                            type="text"
                            id="primayPhone"
                            name="phoneNumbers[0]"
                        />
                        <ErrorMessage name='phoneNumbers[0]' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='secondaryPhone'>Secondary Phone</label>
                        <Field
                            type="text"
                            id="secondaryPhone"
                            name="phoneNumbers[1]"
                        />
                        <ErrorMessage name='phoneNumbers[1]' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label>List of Phone Numbers</label>
                        <FieldArray name="phNumbers">
                            {
                                fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps;
                                    const { values } = form;
                                    const { phNumbers } = values;
                                    return (
                                        <>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {
                                                            index > 0 && <button type='button' className='additional' onClick={() => remove(index)}> - </button>
                                                        }
                                                        <button type='button' className="additional" onClick={() => push('')}> + </button>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    )
                                }
                            }
                        </FieldArray>
                    </div>
                     <button type='reset'>Reset</button>
                     <button type='button' onClick={() => setFormValues(savedValues)}>Load Saved Values</button>
                    {/* <button type='submi' disabled={!(formik.dirty && formik.isValid)}> SignUp </button> */}
                    <button type='submit' disabled={!formik.isValid || formik.isSubmitting}> SignUp </button>
                </Form>
            );
        }
        }
    </Formik>
  )
};

 // define CustomAddressComponent
const CustomAddressComponent = (props) => {
    const {
        field,                     // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc
        meta
    } = props;

    return (
        <>
            <input type="text" id="address" {...field} {...meta} />
            {
              touched[field.address] && errors[field.address] ? <div className='error'> {errors[field.address]} </div> : null
            }
        </>
    ); 
}
