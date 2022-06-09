import axios from "axios";
import { useEffect } from "react";
import { getTodods } from "./action";
import { ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCEES, COMPLETE_TODO, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCEES, UPDATE_TODO } from "./actiontype";



   
    const initialState={
        addTod:{
            loading:false,
        error:false,
        data:{}
        },
        getTod:{
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
            getTod:{
                ...state.getTod,
                loading:false,
            data:payload
                
            }
        }
        }
        case GET_TODOS_LOADING:{
            return{
                ...state,
            getTod:{
               ...state.getTod,
                loading:true,
              
                
            }
        }
        }
        case GET_TODOS_ERROR:{
            return{
                ...state,
            getTod:{
                ...state.getTod,
                loading:false,
                data:payload
                
            }
        }
        }
        
        case ADD_TODOS_SUCCEES:{
            return{
                ...state,
            getTod:{
                ...state.getTod,
                loading:false,
                data:[...state.getTod.data,payload]
                
            },
            addTod:{
                ...state.addTod,
                loading:false,
                data:payload
            }
        }
        }
        case ADD_TODOS_LOADING:{
            return{
                ...state,
            addTod:{
               ...state.addTod,
                loading:true,
              
                
            }
        }
        }
        case ADD_TODOS_ERROR:{
            return{
                ...state,
            addTod:{
                ...state.addTod,
                loading:false,
               
                
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

