import React from "react";
import itemsStore from "../store/itemsStore";

// Setting up Context

export const StoreContext = React.createContext({itemsStore});

export const StoreProvider = ({children}) => {
    // console.log(children)
    return (
        <StoreContext.Provider value={{itemsStore}}>
            {children}
        </StoreContext.Provider>
    )
};