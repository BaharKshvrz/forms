import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const CheckboxGroup = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
          <label>{label}</label>
          <Field name={name} {...rest} >
              {
                  ({ field }) => {
                      {
                          return (options.map(option => {
                            return (
                                <React.Fragment key={option.key} >
                                    <Field
                                        type="checkbox"
                                        {...field}
                                        value={option.value}
                                        id={option.value}
                                        checked= {field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.value}</label>
                                </React.Fragment>
                            );
                          }
                          ))
                      }
                  }
             }
          </Field>
          <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default CheckboxGroup
