import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup() {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    };
    const onSubmit = values => {
        console.log("Formik values::", values);
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email("Invalid Email Addres").required("Required"),
        channel: Yup.string().required('Required')
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
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
                    {...formik.getFieldProps("name")}
                />
                {(formik.touched.name && formik.errors.name) && <div className='error'>{formik.errors.name}</div> }
              </div>

              <div className='form-control'>
                    <label htmlFor='email'>Email</label>  
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...formik.getFieldProps("email")}
                    />
                    {(formik.touched.email && formik.errors.email) && <div className='error'>{formik.errors.email}</div> }
              </div>
              <div className='form-control'>
 
            <label htmlFor='channel'>Channel</label>  
                <input
                type="text"
                id="channel"
                name="channel"
                {...formik.getFieldProps("channel")}
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
