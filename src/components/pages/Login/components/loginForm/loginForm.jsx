import { Card, CardActions, CardContent, Typography } from '@mui/material'
import './loginForm.css'
import Button from '../../../../shared/Button/Button'
import InputIcon from '@mui/icons-material/Input'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
const LoginForm = () => {
	return (
		<Card
			className="loginForm"
			style={{ borderRadius: '28px', padding: '49px 33px' }}
			sx={{ width: '314px' }}
			sm={{ minWidth: '100%' }}>
			<Typography className="title">
				Bem-Vindo<span style={{ color: '#F43724' }}>.</span>
			</Typography>
			<Typography
				mb={2}
				color={'#777777'}>
				informe as suas credenciais de acesso ao portal
			</Typography>
			<CardContent>
				<input
					label="Outlined"
					variant="outlined"
					type="text"
					className="input"
					placeholder="johndoe@gmail.com"
				/>

				<input
					label="Outlined"
					variant="outlined"
					className="input"
					type="password"
					placeholder="********"
				/>

				<Button onClick={() => (window.location.href = '/selecionar-agente')}>
					entrar <InputIcon />
				</Button>
				<Typography
					className="loginLink"
					mt={2}>
					<a href="/recuperar-senha">
						<HelpOutlineIcon className="icon" />
						Esqueceu a Senha
					</a>
				</Typography>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	)
}

export default LoginForm
