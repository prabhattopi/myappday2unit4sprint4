import axios from 'axios'
import React,{useRef, useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodods, todoAdd, todoupdate } from '../stores/action'

import "./Todo.css"
export const TodoApp = () => {
    const dispatch=useDispatch()
    const ref=useRef()
    
    
 


    const {getTod:gTodo,addTod:aTodo}=useSelector((state)=>state.todoApp)


    
  
    
   
    const addNew=()=>{
        let value=ref.current.value
     
        addTodo(dispatch,{
          name:value,
          iscomplete:false
        })
     ref.current.value=null

    }
    useEffect(() => {
     
     dispatch(getTodods())
    
    
    
    }, [])
   if(gTodo.loading){
     return(
       <div>Loading....</div>
     )
   }
   else if(gTodo.error){
     return (
       <div>Something.....</div>
     )
   }
   else{

 
  return (
  
    <div className='Todo'>
      <h1>TODO APP</h1>
     <div>
     <input type="text" ref={ref} />

     <button onClick={addNew}>ADD</button>
     </div>
     
     <br />
     
     {gTodo.data.map((todo,i)=>(<div style={{marginTop:"10px"}} key={i}>{todo.name}</div>))}
     

  </div>
  )
   }
}
