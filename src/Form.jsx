import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from "formik";

const validationSchema = yup.object({
  FullName: yup
    .string('Enter your email')
    .required('Full Name required'),
  Email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  Password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(10, 'No more then 10')
    .required('Password is required'),
  CPassword: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match'),
  Contact: yup.number()
    .typeError("That doesn't look like a phone number")
    .integer("A phone number can't include a decimal point")
    .required('A phone number is required'),
});


function Form() {
 
  const formik = useFormik({
    
    validationSchema: validationSchema,
    

    initialValues: {
      FullName: "",
      Email: "",
      Password: "",
      CPassword: "",
      Contact: "",
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  


  return (
    <div>
      <h1>Registration Form</h1>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto" >


          <form onSubmit={formik.handleSubmit} >
            <TextField name="FullName" type="text" className="w-100 mt-5" id="standard-basic" label="Full Name" variant="standard" 
            
          value={formik.values.FullName}
          onChange={formik.handleChange}

          error={formik.touched.FullName && Boolean(formik.errors.FullName)}
          helperText={formik.touched.FullName && formik.errors.FullName}
/>
            <TextField name="Email" type="email" className="w-100 mt-5" id="standard-basic" label="Email" variant="standard" 
            
          value={formik.values.Email}
          onChange={formik.handleChange}

          error={formik.touched.Email && Boolean(formik.errors.Email)}
          helperText={formik.touched.Email && formik.errors.Email}
/>
            <TextField name="Password" type="password" className="w-100 mt-5" id="standard-basic" label="Password" variant="standard" 
            
          value={formik.values.Password}
          onChange={formik.handleChange}

          error={formik.touched.Password && Boolean(formik.errors.Password)}
          helperText={formik.touched.Password && formik.errors.Password}
/>
            <TextField name="CPassword" type="password" className="w-100 mt-5" id="standard-basic" label="Confirm Password" variant="standard" 
            
          value={formik.values.CPassword}
          onChange={formik.handleChange}

          error={formik.touched.CPassword && Boolean(formik.errors.CPassword)}
          helperText={formik.touched.CPassword && formik.errors.CPassword}
/>
            <TextField name="Contact" type="number" className="w-100 mt-5" id="standard-basic" label="Contact No." variant="standard" 
            
          value={formik.values.Contact}
          onChange={formik.handleChange}

          error={formik.touched.Contact && Boolean(formik.errors.Contact)}
          helperText={formik.touched.Contact && formik.errors.Contact}
/>
            <Button type="submit" className="w-25  mt-5" variant="outlined">Signup</Button>
          </form>
        
      </div>
    </div>

    </div >
  );
}

export default Form;
