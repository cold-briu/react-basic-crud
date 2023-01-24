// importar librerías y otros archivos
import React from "react"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import UsersProvider from "./UsersContext"

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"



// declarar router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Navbar />}>

			<Route path="/" element={<Home />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/users" element={<Users />} />
			<Route path="/users/:id" element={<UserDetail />} />

		</Route>
	)
)

// declarar componente
const AppRouter = () => {
	return (
		<UsersProvider>
			<RouterProvider router={router} />
		</UsersProvider>
	)
}

// exportar componente
export default AppRouter // default export 
