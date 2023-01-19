import React, { useState } from "react"

const UserForm = ({ sendUser, initialValues }) => {
	const [id, setId] = useState(initialValues?.id ?? "")
	const [username, setUsername] = useState(initialValues?.username ?? "")
	const [name, setName] = useState(initialValues?.name ?? "")
	const [age, setAge] = useState(initialValues?.age ?? "")

	const clearForm = () => {
		setId("")
		setUsername("")
		setName("")
		setAge("")
	}

	const handleId = (e) => {
		setId(e.target.value)
	}

	const handleUsername = (e) => {
		setUsername(e.target.value)
	}

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleAge = (e) => {
		setAge(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const user = {
			id, username, name, age
		}
		sendUser(user)
		clearForm()
	}


	return (
		<div className="container">
			<span>Component: UserForm.jsx</span>
			<div className="row">

				<div className="col-3">
					<h3>{initialValues ? "update user" : "new user"}</h3>
				</div>

				<div className="col-6 pt-4">
					<form>
						<input
							placeholder="id" type="text" className="form-control mb-2"
							onChange={handleId} value={id}
						/>

						<input
							placeholder="username" type="text" className="form-control mb-2"
							onChange={handleUsername} value={username}
						/>

						<input
							placeholder="name" type="text" className="form-control mb-2"
							onChange={handleName} value={name}
						/>

						<input
							placeholder="age" type="text" className="form-control mb-2"
							onChange={handleAge} value={age}
						/>

						<button className="btn btn-success" onClick={handleSubmit}>
							submit
						</button>
					</form>
				</div>
			</div>

		</div>
	)
}

export default UserForm