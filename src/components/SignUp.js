import React,{useState} from 'react'
import {Form,FormControl,FormGroup,ControlLabel,HelpBlock,Button,ButtonToolbar} from 'rsuite'
import axios from 'axios'
function SignUp() {
    const [first_name,setFirstName]=useState(' ')
    const [last_name,setLastName]=useState(' ')
    const [date_birth,setDateOfBirth]=useState(' ')
    const [company_name,setCompanyName]=useState(' ')
    const [email,setEmail]=useState(' ')
    const [password,setPassword]=useState('')

    const onSubmit=()=>{
        const user={first_name,last_name,date_birth,company_name,email,password}
        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data))
        console.log('user',user)
        setFirstName(' ')
        setLastName(' ')
        setDateOfBirth(' ')
        setCompanyName(' ')
        setEmail(' ')
        setPassword('')
    }
    const onChangeFirstName=(e)=>{
        setFirstName(e)
    }
    const onChangeLastName=(e)=>{
        setLastName(e)
    }
    const onChangeEmail=(e)=>{
        setEmail(e)
    }
    const onChangePassword=(e)=>{
        setPassword(e)
    }
    const onChangeCompanyName=(e)=>{
        setCompanyName(e)
    }
    const onChangeDateOfBirth=(e)=>{
        setDateOfBirth(e)
    }

    return (
        <div>
            <h1>Sign up</h1>
              <Form onSubmit={onSubmit}>
    <FormGroup>
      <ControlLabel>First name</ControlLabel>
      <FormControl onChange={(e)=>onChangeFirstName(e)}name="firstName" value={first_name} />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Last name</ControlLabel>
      <FormControl onChange={(e)=>onChangeLastName(e)}name="lastName" value={last_name} />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Date Of Birth</ControlLabel>
      <FormControl onChange={(e)=>onChangeDateOfBirth(e)}name="dateOfBirth" value={date_birth} />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>

    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl onChange={(e)=>onChangeEmail(e)}name="email" type="email" value={email} />
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl onChange={(e)=>onChangePassword(e)}name="password" type="password" value={password} />
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button type='submit'appearance="primary">Submit</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>
        </div>
    )
}

export default SignUp
