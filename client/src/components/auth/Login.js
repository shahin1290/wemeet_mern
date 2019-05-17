import React, { Fragment, useState } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios'
import FormControl  from "@material-ui/core/FormControl";
import  InputLabel  from "@material-ui/core/InputLabel";
import  Input  from "@material-ui/core/Input";
import  Button  from "@material-ui/core/Button";


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  

  const handleLogin = async e => {
    e.preventDefault()
    console.log('Success')
      // const newUser = {
      //   name,
      //   email,
      //   password
      // }

      // try {
      //   const config  = {
      //     headers: {
      //       'Content-type': 'application/json'
      //     }
      //   }
        
      //   const body = JSON.stringify(newUser)

      //   const res = await axios.post('/api/users', body, config)

      //   console.log(res.data)
      // } catch (err) {
      //   console.error(err.response.data)
      // }
  }

  return (
    <Fragment
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}
    >
      <form style={{ width: "35%" }}>
        <h1>Sign in </h1>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" name="email" value={email} onChange={e => onChange(e)}/>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">password</InputLabel>
          <Input id="password" name="password" type="password" value={password} onChange={e => onChange(e)}/>
        </FormControl>

        <Button onClick={e => handleLogin(e)} variant="contained" color="primary" size="medium">
            Submit
        </Button>
      </form>
      <p>
        Don't have a account? <Link to='/register'>Sign up</Link>
      </p>
    </Fragment>
  );
}


export default Login