import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.js';
import Colecao from './pages/Colecao.js';
import Login from './pages/Login.js';
import DetalharSuculenta from './pages/DetalharSuculenta.js';
import CadastrarSuculenta from './pages/CadastrarSuculenta.js';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<Home/>}></Route>
			<Route path='/login' element={<Login/>}></Route>
			<Route path='/colecao' element={<Colecao/>}></Route>
			<Route path='/colecao/:id' element={<DetalharSuculenta/>}></Route>
			<Route path='/colecao/cadastrar' element={<CadastrarSuculenta/>}></Route>
			<Route path='/colecao/editar/:id' element={<CadastrarSuculenta/>}></Route>
		</Route>
	)
);

export default function Router(){
	return <RouterProvider router={router}/>;
}