import React from 'react';
export let AuthContext = createContext();

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;