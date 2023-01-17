import React, { useState } from 'react'
import UserForm from '../components/UserForm'
import { createUser } from "../api/users"

const CreateUser = () => {
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const sendUser = async (newUser) => {
		try {
			setIsLoading(true)
			console.log("sending...");
			let res = await createUser(newUser)
			console.log(res);
			setIsLoading(false)

		} catch (error) {
			setIsLoading(false)
			setError(error.message)
			console.log(error.message);
		}
	}


	return (
		<>
			<h3>Container: CreateUser.jsx</h3>
			<UserForm sendUser={sendUser} />
		</>
	)
}

export default CreateUser

