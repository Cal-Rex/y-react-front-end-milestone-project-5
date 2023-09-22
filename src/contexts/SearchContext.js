import React, {useState, createContext, useContext} from 'react';

export const QueryContext = createContext();
export const SetQueryContext = createContext();

export const useQuery = () => useContext(QueryContext);
export const useSetQuery = () => useContext(SetQueryContext);

export const SearchQueryProvider = ( { children } ) => {
    const [query, setQuery] = useState("");

    return (
        <QueryContext.Provider value={query}>
            <SetQueryContext.Provider value={setQuery}>
                { children }
            </SetQueryContext.Provider>
        </QueryContext.Provider>
    )
};



