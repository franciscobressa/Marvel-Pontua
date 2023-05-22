import { Hidden, Stack } from '@mui/material'
import './SelecionarAgente.css'
import SelecionarAgenteForm from './components/loginForm/SelecionarAgenteForm'
import Navbar from '../../shared/Navbar/Navbar'

const SelecionarAgente = () => {
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
					{' '}
					<Hidden lgDown>
						<img src="src/assets/building.svg" />
					</Hidden>
					<SelecionarAgenteForm />
				</Stack>
			</div>
		</div>
	)
}

export default SelecionarAgente
