import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
	const params = useParams()
	return (
		<div>UserDetail id: {params.id}</div>
	)
}

export default UserDetail