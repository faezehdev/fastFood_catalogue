import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from '../../axios';
const ListFoodContext = createContext();
const initialFood = {
    loading: false,
    originalList: [],
    filteredList: [],
    isNull:true,
    isError: false,
};
const foodReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, originalList: action.payload.originalList , filteredList:action.payload.originalList };
        case 'FETCH_FAILD':
            return { ...state, loading: false, isError: action.payload.error };
        case 'FILTER':
            return { ...state, loading: false, filteredList:action.payload.originalList  };
        default:
            return state;
    }
};

export const FoodListProvider = ({ children }) => {
    const [originalList, dispatchFood] = useReducer(foodReducer, initialFood);
    useEffect(() => {
        const fetchLists = async () => {
            dispatchFood({ type: 'FETCH_START', payload: { loading: true } });
            try {
                const response = await axios.get('/filter.php?i=chicken_breast');
                dispatchFood({ 
                    type: 'FETCH_SUCCESS', 
                    payload: { 
                    originalList: response.data.meals,
                    filteredList: response.data.meals
                 } });
            } catch (error) {
                dispatchFood({ type: 'FETCH_FAILD', payload: { error: error.message } });
            }
        };
        fetchLists(); 
    }, []);

    return (
        <ListFoodContext.Provider value={{ originalList, dispatchFood }}>
            {children}
        </ListFoodContext.Provider>
    );
};

export const useFoodListContext = () => {
    return useContext(ListFoodContext);
};
