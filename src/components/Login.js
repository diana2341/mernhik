import React from 'react'
import {Form,FormControl,FormGroup,ControlLabel,HelpBlock,Button,ButtonToolbar} from 'rsuite'

function Login() {
    return (
        <div>
            <h1>Log in</h1>
              <Form>
    <FormGroup>
      <ControlLabel>Username</ControlLabel>
      <FormControl name="name" />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl name="email" type="email" />
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl name="password" type="password" />
    </FormGroup>
    <ButtonToolbar>
        <Button appearance="primary">Log in</Button>
      </ButtonToolbar>
  </Form>
        </div>
    )
}

export default Login
