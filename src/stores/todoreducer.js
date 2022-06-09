import axios from "axios";
import { useEffect } from "react";
import { getTodods } from "./action";
import { ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCEES, COMPLETE_TODO, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCEES, UPDATE_TODO } from "./actiontype";



   
    const initialState={
        addTodo:{
            loading:false,
        error:false,
        data:{}
        },
        getTodods:{
            loading:false,
        error:false,
        data:[]
        }
       
    }
export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_SUCCEES:{
            return{
                ...state,
            getTodods:{
                ...state.getTodods,
                loading:false,
                todos:payload
                
            }
        }
        }
        case GET_TODOS_LOADING:{
            return{
                ...state,
            getTodods:{
               ...state.getTodods,
                loading:true,
              
                
            }
        }
        }
        case GET_TODOS_ERROR:{
            return{
                ...state,
            getTodods:{
                ...state.getTodods,
                loading:false,
                todos:payload
                
            }
        }
        }
        
        case ADD_TODOS_SUCCEES:{
            return{
                ...state,
            getTodo:{
                ...state.getTodods,
                loading:false,
                todos:payload
                
            }
        }
        }
        case ADD_TODOS_LOADING:{
            return{
                ...state,
            getTodo:{
               ...state.getTodods,
                loading:true,
              
                
            }
        }
        }
        case ADD_TODOS_ERROR:{
            return{
                ...state,
            addTodo:{
                ...state.getTodods,
                loading:false,
                todos:payload
                
            }
        }
        }
        
       
        case DELETE_TODO:{

            return{...state}

        }
        case COMPLETE_TODO:{

            return{...state}

        }
        case UPDATE_TODO:{

            return{...state}

        }
        default:{
            return state
        }
    }
}

