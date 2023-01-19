// importar librerías y otros archivos
import React from "react"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Admin from "./Admin"
import Users from "./Users"



// declarar router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Navbar />}>

			<Route path="/" element={<Home />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/users" element={<Users />} />

		</Route>
	)
)

// declarar componente
const AppRouter = () => {
	return (
		<RouterProvider router={router} />
	)
}

// exportar componente
export default AppRouter // default export 
