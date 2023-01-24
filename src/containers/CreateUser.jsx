import React, { useContext, useState } from 'react'
import UserForm from '../components/UserForm'
import { Context, ContextDispatch } from "../UsersContext";

const CreateUser = () => {
	const { userCreate: { error, isLoading } } = useContext(Context)
	const { sendUser } = useContext(ContextDispatch)

	return (
		<>
			<h3>Container: CreateUser.jsx</h3>
			{error && <p>error al crear user: {error}</p>}
			{isLoading && <p>Is Loading...</p>}
			<UserForm sendUser={sendUser} />
		</>
	)
}

export default CreateUser

