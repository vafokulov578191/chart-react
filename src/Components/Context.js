import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

const Context = ({children}) => {

  let [auth, setAuth] = useState({})


  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default Context