import React from 'react'

const UsersList = ({ list }) => {

	return (

		<div className="p-3 mt-1">
			{list.map((e, i) => <p key={i}>{e.username}</p>)}
		</div>

	)
}

export default UsersList