import React, { useEffect, useState } from 'react'
import UsersList from "../components/UsersList";
import { getUsers, deleteUser as deleteUserService } from "../api/users";

const GetUsers = () => {

	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)


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

	useEffect(() => {

		if (!data) {
			getData()
		}

	}, [data])




	return (
		<>
			<h3>Container: GetUsers.jsx</h3>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h3>get users</h3>
					</div>
					<div className="col-6">
						{isLoading && <p>Loading...</p>}
						{error && <p>{error}</p>}
						{data && <UsersList list={data} handleDelete={deleteUser} />}
					</div>
				</div>
			</div>
		</>
	)

}

export default GetUsers