import React, { createContext, useReducer,useContext } from 'react';

export const DataLayerContext = createContext();


export const DataLayer = ({initialState, reducer, children})=>{
    return (<DataLayerContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</DataLayerContext.Provider>)
}

export const useDataLayerValue = ()=>{
    return (useContext(DataLayerContext))
};

