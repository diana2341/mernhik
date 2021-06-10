import React from 'react'
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';
import ModalForm from './ModalForm'

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ show: false });
  }
  open() {
    this.setState({ show: true });
  }
  render(){
    return (
      <div>
                      <ModalForm open={this.open} close={this.close} show={this.state.show}/>

     
      <Navbar>
      <Navbar.Header>
        <a href="/" className="navbar-brand logo"><Icon icon='check-square-o'/>TsCheck</a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item href='/'icon={<Icon icon="home" />} >Home</Nav.Item>
          <Nav.Item icon={<Icon icon="plus"  />}   onClick={this.open}>Add Task</Nav.Item>
          <Nav.Item href='calendar'>Calendar</Nav.Item>
          {/* <Nav.Item>Calendar</Nav.Item> */}

          <Nav.Item href='login'> Log in</Nav.Item>
          <Nav.Item href='signup'>Sign up</Nav.Item>



        </Nav>
        <Nav pullRight>
          {/* <Nav.Item icon={<Icon icon="cog" />} >Account</Nav.Item> */}
          <Dropdown icon={<Icon icon="cog" />}title="Account">
            <Dropdown.Item href='/edit-profile'eventKey="4">Edit profile</Dropdown.Item>
            <Dropdown.Item href='/login' eventKey="5">Log out</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item href='/about'>About</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
    </div>
    )
  }
}

export default NavbarComponent
