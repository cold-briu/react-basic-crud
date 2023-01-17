// importar librerías y otros archivos
import React from "react"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Navbar from "./Navbar"


// declarar router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Navbar />}>

		</Route>
	)
)

// declarar componente
const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

// exportar componente
export default App // default export 
