import React , { useState } from 'react';
import {Table,Container,Checkbox,Icon,IconButton,Divider,Whisper} from 'rsuite'
import fakeData from './fakeData'
import axios from 'axios'
import Tasks from './Tasks'
import * as dayjs from 'dayjs'


import 'rsuite/dist/styles/rsuite-default.css';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          data: fakeData,
          tasks:[],
          checkedKeys: [],
          editing:false,
          selected:'',
          name: '',
          description:'',
          urgency_level:'',
          due_date:'',
          user_id:''

        };
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSelectMenu = this.handleSelectMenu.bind(this);

      }

      componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
          .then(response => {
            this.setState({ tasks: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
 
      handleSelectMenu(eventKey, event) {
        console.log(eventKey);
        this.trigger.hide();
      }
      handleCheckAll(value, checked) {
        const checkedKeys = checked ? this.state.data.map(item => item.id) : [];
        this.setState({
          checkedKeys
        });
      }
      handleCheck(value, checked) {
        const { checkedKeys } = this.state;
        const nextCheckedKeys = checked
          ? [...checkedKeys, value]
          : checkedKeys.filter(item => item !== value);
    
        this.setState({
          checkedKeys: nextCheckedKeys
        });
      }
      handleChange = (id, key, value) => {
        this.setState({[key]:value})
        console.log(id,key,value)

       };
      //  setInput=()=>{
      //              this.setState({[rowData[dataKey]]:rowData[dataKey]})

      //  }
       EditCell = ({ id,editing, rowData, dataKey, onChange, ...props }) => {


        // const editing = rowData.status === 'EDIT';
        return (
          <Table.Cell {...props} className={editing ? 'table-content-editing' : ''}>
            {editing && rowData[id] === this.state.selected ? (
              <input
                key={ rowData[id]}
                className="rs-input"
                defaultValue={dataKey==='due_date'?dayjs(rowData[dataKey]).format('DD/MM/YYYY'):rowData[dataKey]     }
                onChange={event => {
                  onChange && onChange(rowData[id], dataKey, event.target.value);
                }}
              />
            ) : (
              <span className="table-content-edit-span">{dataKey==='due_date'?dayjs(rowData[dataKey]).format('DD/MM/YYYY'):rowData[dataKey]       }</span>
            )}
          </Table.Cell>
        );
      };
      render() {



        
        
          const  CustomWhisper=()=>{
            return (
                <Whisper
                  placement="autoVerticalStart"
                  trigger="click"
                  triggerRef={ref => {
                    this.trigger = ref;
                  }}
                  container={() => {
                    return Table.tableBody;
                  }}
                //   speaker={<MenuPopover onSelect={this.handleSelectMenu} />}
                >
                  {this.props.children}
                </Whisper>
              );
          }
          const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
            <Table.Cell {...props} style={{ padding: 0 }}>
              {console.log(dayjs(rowData[dataKey]).format('DD/MM/YYYY')   )}
              <div style={{ lineHeight: '46px' }}>
                <Checkbox
                  value={dayjs(rowData[dataKey]).format('DD/MM/YYYY')           }
                  inline
                  onChange={onChange}
                  checked={checkedKeys.some(item => item === rowData[dataKey])}
                />
              </div>
            </Table.Cell>
          );

          // const ActionCell = ({ rowData, dataKey, ...props }) => {
          //   function handleAction() {
          //     alert(`id:${rowData[dataKey]}`);
          //   }
          //   return (
          //     <Table.Cell {...props} className="link-group">
          //       <IconButton
          //         appearance="subtle"
          //         onClick={handleAction}
          //         icon={<Icon icon="edit2" />}
          //       />
          //       <Divider vertical />
          //       <CustomWhisper>
          //         <IconButton appearance="subtle" icon={<Icon icon="more" />} />
          //       </CustomWhisper>
          //     </Table.Cell>
          //   );
          // };

          
        let checked = false;
        let indeterminate = false;
        const { data, checkedKeys } = this.state;

        if (checkedKeys.length === data.length) {
          checked = true;
        } else if (checkedKeys.length === 0) {
          checked = false;
        } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
          indeterminate = true;
        }
        return (
          <div><br/><br/>
          
            <Table
              height={400}
              data={this.state.tasks}
              // onRowClick={data => {
              //   console.log(data);
              // }}
            >
              <Table.Column width={70} align="center" fixed>
                {/* <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.Cell dataKey="id" /> */}
                        <Table.HeaderCell style={{ padding: 0 }}>
              <div style={{ lineHeight: '40px' }}>
                <Checkbox
                  inline
                  checked={checked}
                  indeterminate={indeterminate}
                  onChange={this.handleCheckAll}
                />
              </div>
            </Table.HeaderCell>
            <CheckCell
              dataKey="id"
              checkedKeys={this.state.checkedKeys}
              onChange={this.handleCheck}
            />
              </Table.Column>
    
              <Table.Column width={210} fixed>
                <Table.HeaderCell>Task</Table.HeaderCell>
                {/* <Table.Cell dataKey="name" /> */}
                <this.EditCell dataKey="name" id='_id'onChange={this.handleChange} editing={this.state.editing}/>

              </Table.Column>
    
              <Table.Column width={120}>
                <Table.HeaderCell>Due Date</Table.HeaderCell>
                {/* <Table.Cell dataKey="due_date" /> */}
                <this.EditCell dataKey="due_date" id='_id'  onChange={this.handleChange} editing={this.state.editing} />

              </Table.Column>
    
              <Table.Column width={210}>
                <Table.HeaderCell>Description </Table.HeaderCell>
                {/* <Table.Cell dataKey="description" /> */}
                <this.EditCell dataKey="description" id='_id'  onChange={this.handleChange} editing={this.state.editing} />

              </Table.Column>
              <Table.Column width={210}>
                <Table.HeaderCell>Priority  </Table.HeaderCell>
                {/* <Table.Cell dataKey="urgency_level" /> */}
                <this.EditCell dataKey="urgency_level" id='_id'  onChange={this.handleChange} editing={this.state.editing} />

              </Table.Column>
              <Table.Column width={600} fixed="right" align='right'>
                <Table.HeaderCell>Action</Table.HeaderCell>
    
                <Table.Cell>
                  {rowData => {
                

                   const deleteExercise=(id)=> {
                      axios.delete('http://localhost:5000/tasks/'+rowData._id)
                        .then(response => { console.log(response.data)});
                  
                      this.setState({
                        tasks: this.state.tasks.filter(el => el._id !== rowData._id)
                      })
                    }
                    const editInput=(id)=>{
                      this.setState({editing:true})
                      this.setState({selected:id})
                      console.log(rowData,rowData.description)
                      this.setState({name:rowData.name})
                      this.setState({due_date:rowData.due_date})
                      this.setState({urgency_level:rowData.urgency_level})
                      this.setState({user_id:rowData.user_id})
                      this.setState({description:rowData.description})


                    }
                    const saveEdit=()=>{
                      this.setState({editing:false})
                      this.setState({selected:''})
                      const tasks={
                        description:this.state.description,
                        name:this.state.name,

                        due_date:this.state.due_date,
                        user_id:this.state.user_id,
                        urgency_level:this.state.urgency_level
                    }
                    console.log(tasks)
                    axios.post('http://localhost:5000/tasks/update/'+rowData._id,tasks)
                    .then(res =>{ 
                      let task = [...this.state.tasks];  
                      let index = this.state.tasks.findIndex(el => el._id===rowData._id);
                      task[index] = res.data;                  
                      this.setState({ tasks:task });            
                                   
                     })
                  
                    }
                    return (
                      <span>
                        {this.state.editing &&  rowData._id === this.state.selected?        <IconButton
                  appearance="subtle"
                  onClick={saveEdit}
                  icon={<Icon icon="check-circle-o" />}
                />:
                <IconButton
                appearance="subtle"
                onClick={()=>editInput(rowData._id)}
                icon={<Icon icon="edit2" />}
              />
                        }

                 
                <Divider vertical />
                <IconButton
                  appearance="subtle"
                  onClick={deleteExercise}
                  icon={<Icon icon="trash2" />}
                />
                      </span>
                    );
                  }}
                </Table.Cell>
              </Table.Column>
            </Table>
          </div>
        );
      }
}

export default Home
