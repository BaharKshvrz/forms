import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions = [
        { key: "Select an option", value: '' },
        { key: "Option 1", value: 'option1' },
        { key: "Option 2", value: 'option2' },
        { key: "Option 3", value: 'option3' },
        { key: "Option 4", value: 'option4' },
    ];

    const radioOptions = [
        { key: "Friends", value: 'friends' },
        { key: "Family", value: 'family' },
        { key: "Relatives", value: 'relatives' },
    ];

    const checkboxOptions = [
        { key: "Music", value: 'music' },
        { key: "Film", value: 'film' },
        { key: "Book", value: 'book' },
    ];

    const initialValues = {
        email: '',
        description: '',
        selectOptions: '',
        radioOptions: '',
        checkboxOptions: '',
        birthDate: null,
    };
    const onSubmit = values => console.log('Form data:', values);
    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email("Invalid Email Address."),
        description: Yup.string().required('Required'),
        selectOptions: Yup.string().required('Required'),
        radioOptions: Yup.string().required('Required'),
        checkboxOptions: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable(),
    });
    
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
      >
       {
            formik => (
                <Form>
                    <FormikControl
                        type="email"
                        label="Email"
                        name="email"
                        control="input"
                    />
                    <FormikControl
                        label="Description"
                        name="description"
                        control="textarea"
                    />

                    <FormikControl
                        label="Select an Option:"
                        name="selectOptions"
                        control="select"
                        options={dropdownOptions}
                    />
                    
                   <FormikControl
                        label="Select a Group:"
                        name="radioOptions"
                        control="radio"
                        options={radioOptions}
                    />

                   <FormikControl
                        label="Select the categories:"
                        name="checkboxOptions"
                        control="checkbox"
                        options={checkboxOptions}
                    />

                   <FormikControl
                        label="Pick a Date:"
                        name="birthDate"
                        control="date"
                    />

                   <button type='submit'>Submit</button>
                </Form>
            )
      }
    </Formik>
  )
}

export default FormikContainer
