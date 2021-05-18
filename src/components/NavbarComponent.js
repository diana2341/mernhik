import React from 'react'
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';

function NavbarComponent() {
    return (
      <Navbar>
      <Navbar.Header>
        <a href="/" className="navbar-brand logo"><Icon icon='check-square-o'/>TsCheck</a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item href='/'icon={<Icon icon="home" />} >Home</Nav.Item>
          <Nav.Item href='projects'>Projects</Nav.Item>
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
    )
}

export default NavbarComponent
