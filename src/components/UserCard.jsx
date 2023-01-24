import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../UsersContext";


const UserCard = ({ username, name, id, handleDelete }) => {
	const LINK_ADDRESS = `/users/${id}`

	const data = useContext(Context)
	console.log(data);
	const handleDeleteWithId = () => {
		return handleDelete(id)
	}

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
				<button onClick={handleDeleteWithId} className="btn btn-danger">
					eliminar
				</button>
			</div>
		</div>
	)

}

export default UserCard