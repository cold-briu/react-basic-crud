import React, { createContext, useState } from 'react'
import { deleteUser as deleteUserService, getUsers, createUser } from "./api/users";

export const Context = createContext()
export const ContextDispatch = createContext()


const UsersProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [errorCreateUser, setErrorCreateUser] = useState("")
  const [isLoadingCreateUser, setIsLoadingCreateUser] = useState(false)

  const sendUser = async (newUser) => {
    try {
      setIsLoadingCreateUser(true)
      await createUser(newUser)
      setIsLoadingCreateUser(false)
      await getData()
    } catch (error) {
      setIsLoadingCreateUser(false)
      setErrorCreateUser(error.message)
    }
  }


  const deleteUser = async (userId) => {
    try {

      setIsLoading(true)
      await deleteUserService(userId)
      setIsLoading(false)
      await getData()
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  }

  const getData = async () => {
    try {
      setData(null)
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
    usersList: { data, error, isLoading },
    userCreate: { data: null, error: errorCreateUser, isLoading: isLoadingCreateUser }
  }

  const myDispatch = {
    getData, deleteUser, sendUser
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