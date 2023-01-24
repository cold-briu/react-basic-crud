import React, { useContext, useEffect, useState } from 'react'
import UsersList from "../components/UsersList";
import { getUsers } from "../api/users";
import { Context, ContextDispatch } from "../UsersContext";

const GetUsers = () => {

	const { usersList: { data, error, isLoading } } = useContext(Context)
	const { getData } = useContext(ContextDispatch)

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
						{data && <UsersList list={data} />}
					</div>
				</div>
			</div>
		</>
	)

}

export default GetUsers