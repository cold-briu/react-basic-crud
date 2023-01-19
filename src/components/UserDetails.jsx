import React, { useState } from 'react'
import UserForm from './UserForm'


const UserDetails = ({
	userData
}) => {
	const [username, setUsername] = useState(userData.username)

	const handleUsername = (e) => {
		setUsername(e.target.value)
		console.log(e.target.value);
	}


	return (
		<>
			<UserForm initialValues={userData} />
		</>
	)
}

export default UserDetails