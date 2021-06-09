import React,{useState} from 'react'
import {Form,FormControl,FormGroup,ControlLabel,HelpBlock,Button,ButtonToolbar} from 'rsuite'
import axios from 'axios'

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const onChangeEmail=(e)=>{
        setEmail(e)
    }
    const onChangePassword=(e)=>{
        setPassword(e)
    }
  const onSubmit=()=>{

      const user={email,password}
      axios.post('http://localhost:5000/users/login',user)
      .then(res=>console.log(res.data))
      console.log('user',user)
      setEmail('')
      setPassword('')
  }
    return (
        <div>
            <h1>Log in</h1>
            <Form onSubmit={onSubmit}>
            <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl onChange={(e)=>onChangeEmail(e)}name="email" type="email" value={email} />
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl onChange={(e)=>onChangePassword(e)}name="password" type="password" value={password} />
    </FormGroup>
    <ButtonToolbar>
        <Button type='submit' appearance="primary">Log in</Button>
      </ButtonToolbar>
  </Form>
        </div>
    )
}

export default Login
