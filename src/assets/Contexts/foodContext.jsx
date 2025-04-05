import React, { createContext, useReducer, useContext } from 'react';
const foodContext = createContext()
const initialFood = {
    loading:false,
    foods:[],
    isError:false
   }
   const foodReducer = (state , action)=>{
    switch (action.type) {
      case 'FETCH_START':
        return {...state,loading:action.payload.loading}
      case 'FETCH_SUCCESS':
        return {...state,loading:false,foods:action.payload.data}
      case 'FETCH_FAILD':
        return {...state,loading:false,isError:action.payload.error}
      default:
        return state
    }
   }
 
   export const FoodProvider  = ({children})=>{
    const [food , dispatchFood] = useReducer(foodReducer,initialFood)
    return <foodContext.Provider value={{ food, dispatchFood }}>
                {children}
          </foodContext.Provider>
   }
   export const useFoodContext = () => {
    return useContext(foodContext);
  };