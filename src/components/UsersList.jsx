import React from 'react'
import UserCard from './UserCard'


const UsersList = ({ list }) => {

	return (
		<div className="p-3 mt-1">
			component:
			{
				list.map(
					(e) => {
						return (
							<UserCard
								key={e.id}
								username={e.username}
								name={e.name}
								id={e.id}
							/>
						)
					}

				)
			}
		</div>
	)
}

export default UsersList