import React from 'react';
import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, string} from 'zod'

const countyOptions = [
  { value: "iran", label: "Iran" },
  { value: "scotlan", label: "Scotland" },
  { value: "usa", label: "USA" },
];

const schema = z.object({
  firstName: z.string().min(1, { message: "Firstname is required" }),
  lastName: z.string().min(1, { message: "Lastname is required" }),
  email: string().email(),
  gender: string().optional(),
  country: string(),
});

const onSave = (values) => {
  console.log(JSON.stringify(values));
}

const FormRegistration = () => {
  const { handleSubmit, register, control, formState } = useForm({resolver: zodResolver(schema)});
  const { field } = useController({ name: 'country', control });
  const { errors } = formState;
  
  const handleCountryChange = (option) => {
    field.onChange(option.value);
 }
 
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="form-control">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" className='finalInput' {...register("firstName")} />
        <span className='error'>{errors.firstName?.message}</span>
      </div>

      <div className="form-control">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" className='finalInput' {...register("lastName")} />
        <span className='error'>{errors.lastName?.message}</span>
      </div>

      <div className="form-control">
        <label htmlFor="lastName">Email</label>
        <input id="email" className='finalInput' {...register("email")} />
        <span className='error'>{errors.email?.message}</span>
     </div>

      <div className="form-control">
        <label>Gender</label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <span className='error'>{errors.gender?.message}</span>
      </div>

      <div className="form-control">
        <label>Country</label>
        <Select
          value={countyOptions.find(({value}) => value === field.value)}
          onChange={handleCountryChange}
          options={countyOptions}
        />
       <span className='error'>{errors.country?.message}</span>
      </div>

      <button type='submit' className='btnForm'> Save </button>
    </form>
  )
}

export default FormRegistration
