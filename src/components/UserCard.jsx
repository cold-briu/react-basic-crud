import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ username, name, id }) => {
	const LINK_ADDRESS = `/users/${id}`

	return (
		<div className="card mb-2">
			<div className="card-body">
				<h5 className="card-title">
					{username}
				</h5>
				<p className="card-text">
					{name} y tengo el id: {id}
				</p>
				<Link className='btn btn-primary' to={LINK_ADDRESS} >
					Editar
				</Link>
				<button onClick={() => console.log("eliminar!")} className="btn btn-danger">
					eliminar

				</button>
			</div>
		</div>
	)

}

export default UserCard