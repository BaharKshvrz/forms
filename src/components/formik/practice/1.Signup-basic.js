import React from 'react';
import { useFormik } from 'formik';

export default function Signup() {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    };
    const onSubmit = values => {
        console.log("Formik values::", values);
    };

    const validate = values => {
        let errors = {};
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        } else if (!emailPattern.test(values.email)) {
            errors.email = "Invalid Email Address."
        }
        if (!values.channel) {
            errors.channel = "Required";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
    <div>
          <form onSubmit={formik.handleSubmit}>
              <div className='form-control'>
                <label htmlFor='name'>Name</label>  
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {(formik.touched.name && formik.errors.name) && <div className='error'>{formik.errors.name}</div> }
              </div>

              <div className='form-control'>
                    <label htmlFor='email'>Email</label>  
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {(formik.touched.email && formik.errors.email) && <div className='error'>{formik.errors.email}</div> }
              </div>
              <div className='form-control'>
 
            <label htmlFor='channel'>Channel</label>  
                <input
                type="text"
                id="channel"
                name="channel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}
                />
                  {
                      (formik.touched.channel && formik.errors.channel)
                       &&
                      <div className='error'>{formik.errors.channel}</div>
                  }
              </div>
              
              <button type='submi'>SignUp</button>
       </form>
    </div>
  )
}
