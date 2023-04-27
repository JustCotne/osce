import React, {createContext, useState} from 'react';
import * as SecureStore from 'expo-secure-store'
export const Context = createContext();

export const Provider = ({children}) =>{
    const [domain, setDomain] = useState("http://192.168.1.103:8000")
    const[ isLoggedIn, setIsLoggedIn]= useState(false)
    const [userObj,setUserObj]=useState()
    const [appSettings, setAppSettings]= useState({})

    const setToken = async (token) =>{
        await SecureStore.setItemAsync('token',token);
    }

const globalContext ={
    domain,
    isLoggedIn,
    setIsLoggedIn,
    appSettings,
    setAppSettings,
    userObj,
    setUserObj,
    setToken,
}

    return (
        <Context.Provider value="Test value">{children}</Context.Provider>
    );
};