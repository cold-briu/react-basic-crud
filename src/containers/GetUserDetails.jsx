import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserDetails, updateUser } from "../api/users";
import UserForm from '../components/UserForm';

const GetUserDetails = () => {
	const params = useParams()

	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)

	const sendData = async (data) => {
		let res = await updateUser(data.id, data)
		console.log(res);
		console.log("send data", data);
	}

	const getData = async () => {
		try {
			setIsLoading(true)
			const res = await getUserDetails(params.id)
			setIsLoading(false)
			setData(res.data)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h3>Container: GetUserDetails.jsx</h3>
			<p>Este container se encarga de la asincronía y las peticiones</p>
			<p>Para el render condicional usamos el "logical and" "&&" utilizando la "evaluación de corto circuito"</p>
			{error && <p>error: {error}</p>}
			{isLoading && <p>Loading...</p>}
			{
				data &&
				<UserForm
					initialValues={data}
					sendUser={sendData}
				/>
			}
		</>
	)
}

export default GetUserDetails