import React from 'react'

const UserDetails = ({
	id, name, username, age
}) => {
	return (
		<>
			<p>id: {id}</p>
			<p>name: {name}</p>
			<p>username: {username}</p>
			<p>age: {age}</p>
		</>
	)
}

export default UserDetails