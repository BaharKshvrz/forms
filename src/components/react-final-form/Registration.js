import React from 'react';
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";

const showResults = (values) => {
    console.log(JSON.stringify(values));
}

// Focus on First Error
const focusOnError = createDecorator(); 
// Validation
const required = (value) => value ? undefined : 'Required';

const Registration = () => {
  return (
      <Form
          onSubmit={showResults}
          subscription= {{submitting: true}}
          decorators= {[focusOnError]}    
      >
          {({ handleSubmit, values, submitting }) => <form
              className='finalForm'
              onSubmit={handleSubmit}
          >
              <div>
                  <Field
                      name='firstName'
                      placeholder="First Name"
                      className="finalInput"
                      validate={required}
                      subscription={{
                         value: true,
                         active: true,
                         touched: true,
                         error: true,
                      }}
                  >
                  {
                      ({ input, meta, placeholder }) => (
                         <div className={meta.active ? 'active': ''}>
                                <label>First Name</label>
                                <input {...input} placeholder={placeholder} className="finalInput" />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                        </div>
                        )
                    }
                  </Field>
              </div>

              <div>
                  <Field
                      name='lastName'
                      placeholder="Last Name"
                      className="finalInput"
                      validate={required}
                      subscription= {{
                        value: true,
                        active: true,
                        touched: true,
                        error: true,
                     }}
                  >
                    {
                        ({ input, meta, placeholder }) => (
                        <div className={meta.active ? 'active': ''}>
                                <label>Last Name</label>
                                <input {...input} placeholder={placeholder} className="finalInput" />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                        </div>
                        )
                    }
                  </Field>
              </div>

              <div>
                  <Field
                      name='email'
                      placeholder="email"
                      validate={required}
                      subscription= {{
                        value: true,
                        active: true,
                        touched: true,
                        error: true,
                     }}
                  >
                      {
                          ({ input, meta, placeholder }) => (
                               <div className={meta.active ? 'active': ''}>
                                  <label>Email</label>
                                  <input
                                      {...input}
                                      placeholder={placeholder}
                                      className="finalInput"
                                  />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                              </div>
                          )
                      }
                  </Field>
              </div>
              <button type='submit' className='btnForm' disabled={submitting}>Submit</button>
        </form>}
    </Form>
  )
}

export default Registration
