import React from 'react'
import axios from 'axios'
import {ButtonToolbar,Button,Modal,Form,FormControl,DatePicker,FormGroup,ControlLabel,HelpBlock,SelectPicker} from 'rsuite'
class ModalForm extends React.Component {
  state = {
          name: '',
          description:'',
          urgency_level:'',
          due_date:''
        };
    
       handleChange=(event)=>{
           console.log(event)
        const{name,value}=event
        console.log(event)

        this.setState({[name]:value})

   }
   onChangeName=(e)=>{
    this.setState({name:e })
}
onChangeDescription=(e)=>{
    this.setState({description:e })
}
onChangeUrgencyLevel=(e)=>{
    this.setState({urgency_level:e })
}
onChangeDueDate=(e)=>{
    this.setState({due_date:e })
}
      render() {

    
    const data=[
      {
        "label": "High",
        "value": "High",
      },
       {
        "label": "Medium",
        "value": "Medium",
      },
      {
        "label": "Low",
        "value": "Low",
      },
    ]
        const onSubmit=()=>{
            const task={user_id:'60bea27c131ac25d67a34d69',name:this.state.name,description:this.state.description,urgency_level:this.state.urgency_level,due_date:this.state.due_date}
            axios.post('http://localhost:5000/tasks/add',task)
            .then(res=>console.log(res.data))
            this.setState({name: ""});
            this.setState({description: ""});
            this.setState({urgency_level: ""});
            this.setState({due_date: ""});
            window.location='/'

          
        }
  
    
        return (
          <div className="modal-container">
    
            <Modal show={this.props.show} onHide={this.props.close}>
              <Modal.Header>
                <Modal.Title>Add Task!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit={onSubmit}>
    <FormGroup>
      <ControlLabel> Task name</ControlLabel><br/>
      <FormControl onChange={this.onChangeName}name="name" value={this.state.name} />
      <HelpBlock>Required      </HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Description </ControlLabel>
      <FormControl onChange={this.onChangeDescription}name="description" value={this.state.description} />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Priority</ControlLabel>
      {/* <FormControl onChange={this.onChangeUrgencyLevel}name="urgency_level" value={this.state.urgency_level} /> */}
      <SelectPicker searchable={false}data={data} onChange={this.onChangeUrgencyLevel}name="urgency_level"value={this.state.urgency_level}style={{ width: 224 }} />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>

    <FormGroup>
      <ControlLabel>Due date</ControlLabel>
      <DatePicker style={{ width: 280 }}onChange={this.onChangeDueDate}name="due_date" value={this.state.due_date} />
      {/* <FormControl onChange={this.onChangeDueDate}name="due_date" value={this.state.due_date} /> */}
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
   
    <FormGroup>
      <ButtonToolbar>
        <Button type='submit'appearance="primary">Submit</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.close} appearance="primary">
                  Ok
                </Button>
                <Button onClick={this.props.close} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      } 
}

export default ModalForm
