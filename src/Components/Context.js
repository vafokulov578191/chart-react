import React, {createContext, useState} from 'react'
export const Usercontext = createContext()


const Context = ({children}) => {

    let [color, setColor] = useState('#140739')
    

  return (
    <Usercontext.Provider value={{color, setColor}}>
        {children}
    </Usercontext.Provider>
  )
}

export default Context