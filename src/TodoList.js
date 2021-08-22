import React, { Component } from "react"
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store/index'
import { getInputChangeAction,getAddItemAction,getDelItemAction } from './store/actionCreactors'

class TodoList extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
    
  }
   render(){
       return(
           <div style={{margin:'10px'}}>
                <Input 
                value={this.state.inputValue} 
                placeholder="todoinfo" 
                style={{width:'300px'}}
                onChange={this.handleInputChange} />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
    <List style={{width:'300px',marginTop:'10px'}}
      bordered
      dataSource={this.state.list}
      renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
    />
           </div>
       )
   }
   componentWillMount() {
    // store数据发生变化 渲染最新数据
    store.subscribe(this.handleStoreChange)
   }
   handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
   }

   handleStoreChange = () => {
    this.setState(store.getState())
   }  

   handleBtnClick = () => {
     const action = getAddItemAction()
     store.dispatch(action)
   }

   handleItemDelete = (index) => {
     const action = getDelItemAction(index)
     store.dispatch(action)
   }
}

export default TodoList