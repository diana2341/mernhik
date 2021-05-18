import React from 'react'
import {Form,FormControl,FormGroup,ControlLabel,HelpBlock,Button,ButtonToolbar} from 'rsuite'

function SignUp() {
    return (
        <div>
            <h1>Sign up</h1>
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
    <FormGroup>
      <ControlLabel>Confirm Password</ControlLabel>
      <FormControl name="password" type="password" />
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>
        </div>
    )
}

export default SignUp
