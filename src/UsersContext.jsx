import React, { createContext } from 'react'

export const Context = createContext("default")

const UsersContext = ({ children }) => {
  const initialVal = "initial value"

  return (
    <>
      <Context.Provider value={initialVal}>
        {children}
      </Context.Provider>
    </>
  )
}

export default UsersContext