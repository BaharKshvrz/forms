import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

const Select = (props) => {
    const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
          <label htmlFor={name}>{label}</label>
          <Field as="select" name={name} id={name} {...rest}>
              {
                  options.map(option => {
                      return <option value={option.value} key={option.value}>
                          {option.key}
                      </option>;
                  })
              }
          </Field>
          <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select
