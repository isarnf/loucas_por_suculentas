import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.js";
import Colecao from "./pages/Colecao.js";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<Home/>}></Route>
			<Route path='/colecao' element={<Colecao/>}></Route>
		</Route>
	)
);

export default function Router(){
	return <RouterProvider router={router}/>;
}