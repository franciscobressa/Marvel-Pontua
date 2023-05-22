import { Hidden, Stack } from '@mui/material'
import './RecuperarSenha.css'
import RecuperarSenhaForm from './components/RecuperarSenhaForm/RecuperarSenhaForm'
import Navbar from '../../shared/Navbar/Navbar'

const RecuperarSenha = () => {
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
					<RecuperarSenhaForm />
				</Stack>
			</div>
		</div>
	)
}

export default RecuperarSenha
