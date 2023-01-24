import React from 'react'
import GetUsers from "../containers/GetUsers";


const Users = () => {
	return (
		<>
			<h1>Page: Users.jsx</h1>
			<div className="p-1">
				<GetUsers />
			</div>
		</>
	)
}

export default Users