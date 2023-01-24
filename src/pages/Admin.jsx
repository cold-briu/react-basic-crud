import React from "react";
import CreateUser from "../containers/CreateUser";
import GetUsers from "../containers/GetUsers";


const Admin = () => {

	return (
		<>
			<h1>Page: Admin.jsx</h1>
			<div className="p-1">
				<CreateUser />
				<GetUsers />
			</div>
		</>
	)
}

export default Admin