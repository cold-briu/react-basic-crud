import React, { createContext, useState } from 'react'
import { deleteUser as deleteUserService, getUsers } from "./api/users";

export const Context = createContext()
export const ContextDispatch = createContext()


const UsersProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  const deleteUser = async (userId) => {
    try {

      setIsLoading(true)
      await deleteUserService(userId)
      setData(null)
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  }

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await getUsers()
      setIsLoading(false)
      setData(res.data)
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  }

  const myState = {
    data, error, isLoading
  }

  const myDispatch = {
    getData, deleteUser
  }


  return (
    <>
      <Context.Provider value={myState}>
        <ContextDispatch.Provider value={myDispatch}>
          {children}
        </ContextDispatch.Provider>
      </Context.Provider>
    </>
  )
}

export default UsersProvider