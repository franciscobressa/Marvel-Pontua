import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/pages/Login/Login'
import RecuperarSenha from '../components/pages/RecuperarSenha/RecuperarSenha'
import SelecionarAgente from '../components/pages/SelecionarAgente/SelecionarAgente'
import Dashboard from '../components/pages/Dashboard/Dashboard'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/recuperar-senha',
		element: <RecuperarSenha />,
	},
	{
		path: '/selecionar-agente',
		element: <SelecionarAgente />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
])
