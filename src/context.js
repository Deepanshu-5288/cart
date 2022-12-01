import React, { useContext, useEffect, useReducer } from "react";
import {reducer} from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();
const initialState = {
    loading:false,
    cardItems:[],
    total:0,
    amount:0
}

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);



    const fetchData = async () =>{
        dispatch({type: "LOADING"});
        const response = await fetch(url);
        const cardItems = await response.json();
        dispatch({type: "DISPLAY_ITEMS", payload: cardItems})
    }

    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"});
    }

    const removeItem =(id) =>{
        dispatch({type:"REMOVE_ITEM", payload:id});
    }
    const increase = (id)=>{
        dispatch({type:"INCREASE", payload:id});
    }
    const decrease = (id)=>{
        dispatch({type:"DECREASE",payload:id});
    }
    useEffect(() =>{
        dispatch({type:"GET_TOTALS"});
    },[state.cardItems])

    useEffect(() =>{
        fetchData();
    },[])

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem,increase,decrease}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};