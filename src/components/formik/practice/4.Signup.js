import { formatRelative } from 'date-fns';
import { fi } from 'date-fns/locale';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextError from './TextError';

export default function Signup() {
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
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email("Invalid Email Addres").required("Required"),
        channel: Yup.string().required('Required'),
        address: Yup.string().max(20, 'Maximum character can be 20.')
    });

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
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validation happens on change event, on blur event, and submit
            // validateOnChange={false}
            // validateOnBlur={false}
        >
        {
           formik => {
            console.log("formik:", formik)
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
                            id="facebook"
                            name="social.facebook"
                        />
                        <ErrorMessage name='social.facebook' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='twitter'>Twitter Profile</label>
                        <Field
                            id="twitter"
                            name="social.twitter"
                        />
                        <ErrorMessage name='social.twitter' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='primayPhone'>Primay Phone</label>
                        <Field
                            id="primayPhone"
                            name="phoneNumbers[0]"
                        />
                        <ErrorMessage name='phoneNumbers[0]' component={TextError} />
                    </div>

                    <div className='form-control'>
                        <label htmlFor='secondaryPhone'>Secondary Phone</label>
                        <Field
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

                    {/* <button type='submi' disabled={!(formik.dirty && formik.isValid)}> SignUp </button> */}
                    <button type='submi' disabled={!formik.isValid || formik.isSubmitting}> SignUp </button>
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
