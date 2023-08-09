import React, { createContext, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [hasLoading, setHasLoading] = useState(false);
    return (
        <AppContext.Provider value={{ hasLoading, setHasLoading }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;