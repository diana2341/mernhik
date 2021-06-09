import { render } from '@testing-library/react';
import React from 'react'
import {Container,Icon,IconButton,Panel} from 'rsuite'
import ModalForm from './ModalForm'

class Task extends React.Component {
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
          <Container><br/><br/><br/>
                {/* <Panel bordered header="Add Task"> */}

                <IconButton
                  size='lg'
                    appearance="subtle"
                    onClick={this.open}
                    icon={<Icon icon="plus-square-o" />}
                  /> <br/><br/>
              {/* // </Panel> */}
              <ModalForm open={this.open} close={this.close} show={this.state.show}/>
                  
          </Container>
      )
  }
}

export default Task
