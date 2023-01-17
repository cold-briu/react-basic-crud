import Axios from "axios"

const api = Axios.create({
	baseURL: "http://127.0.1:3004"
})

export const getUsers = async () => {
	let res = await api.get("/users")
	return res
}

export const createUser = async (newUser) => {
	let res = await api.post("/users", newUser)
	return res
}