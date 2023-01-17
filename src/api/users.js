import Axios from "axios"

const api = Axios.create({
	baseURL: "localhost:3004"
})

export const getUsers = async () => {
	let res = await api.get("/users")
	return res
}

export const createUser = async (newUser) => {
	let res = await api.post("/users", newUser)
	return res
}