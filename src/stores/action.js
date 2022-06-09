import axios from "axios";
import { ADD_TODO, ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCEES, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCEES, UPDATE_TODO } from "./actiontype";


export const counterInc=()=>({type:COUNTER_INCREMENT})
export const counterDec=()=>({type:COUNTER_DECREMENT})



export const todoComplete=(id)=>({type:COMPLETE_TODO,payload:id})
export const todoRemove=(id)=>({type:DELETE_TODO,payload:id})
export const todoupdate=(payload)=>({
    type:UPDATE_TODO,
    payload,
})

export const getTodods=(dispatch)=>{
      //this time is waiting
      dispatch({type:GET_TODOS_LOADING})
    axios.get("http://localhost:8080/Products").then((r)=>{
        //loading ends
        //succerss
        dispatch({type:GET_TODOS_SUCCEES,payload:r.data})
      }).catch(()=>{
          //loading
          //error
          dispatch({type:GET_TODOS_ERROR})

      })
}
export const addTodo=(dispatch,payload)=>{
    dispatch({type:ADD_TODOS_LOADING})
    axios.post("http://localhost:8080/Products",payload).then(r=>{
   dispatch({type:ADD_TODOS_SUCCEES.at,payload:r.data})
    }).catch(()=>{
        dispatch({type:ADD_TODOS_ERROR})
    })
}
   
