import { Hidden, Stack } from '@mui/material'
import './Login.css'
import LoginForm from './components/loginForm/loginForm'
import Navbar from '../../shared/Navbar/Navbar'

const Login = () => {
	return (
		<div className="loginPage">
			<Navbar />
			<div className="loginContent">
				<Stack
					spacing={{ xs: 1, lg: 1, sm: 2 }}
					direction="row"
					useFlexGap
					justifyContent={'space-around'}
					flexWrap="wrap">
					<Hidden lgDown>
						<img src="src/assets/building.svg" />
					</Hidden>
					<LoginForm />
				</Stack>
			</div>
		</div>
	)
}

export default Login
