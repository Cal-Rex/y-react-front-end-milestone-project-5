import { createContext, useContext, useState } from "react";


export const LoadStatusContext = createContext();
export const SetLoadStatusContext = createContext();

export const useLoadStatus = () => useContext(LoadStatusContext);
export const useSetLoadStatus = () => useContext(SetLoadStatusContext);

export const LoadStatusProvider = ({ children }) => {
    const [contextloadStatus, setContextLoadStatus] = useState(true);

    return (
        <LoadStatusContext.Provider value={contextloadStatus}>
            <SetLoadStatusContext.Provider value={setContextLoadStatus}>
                { children }
            </SetLoadStatusContext.Provider>
        </LoadStatusContext.Provider>
    )
};