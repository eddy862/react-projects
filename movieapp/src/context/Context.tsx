import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type ContextValue = {

}

export const Context = createContext<ContextValue | undefined>(undefined)

const ContextProvider: React.FC<Props> = ({children}) => {
  const contextValue ={
    
  }

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  )
}

export default ContextProvider