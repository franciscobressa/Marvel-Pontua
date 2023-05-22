import { Card, CardActions, CardContent, Typography } from '@mui/material'
import './RecuperarSenhaForm.css'
import Button from '../../../../shared/Button/Button'
import { sendResetPasswordEmail } from '../../../../../services/auth'
import { useState } from 'react'
const RecuperarSenhaForm = () => {
	const [isEmailSent, setIsEmailSent] = useState(false)

	async function handleSubmitForgetPasswordEmail() {
		await sendResetPasswordEmail().then(response => setIsEmailSent(true))
	}

	return !isEmailSent ? (
		<Card
			className="RecuperarSenhaForm"
			style={{ borderRadius: '28px', padding: '49px 33px' }}
			sx={{ width: '314px' }}
			sm={{ minWidth: '100%' }}>
			<Typography className="title">
				Recuperar senha<span style={{ color: '#F43724' }}>.</span>
			</Typography>

			<CardContent>
				<Typography
					mb={2}
					color={'#777777'}
					textAlign={'justify'}>
					Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as
					instruções para você redefinir a sua senha.
				</Typography>
				<input
					label="Outlined"
					variant="outlined"
					type="text"
					className="input"
					placeholder="Informe seu e-mail"
				/>

				<Button
					onClick={() => handleSubmitForgetPasswordEmail()}
					color={'#C3C3C3'}>
					enviar link
				</Button>
				<Typography
					className="forgotPassword"
					mt={2}>
					<a href="/">Fazer Login</a>
				</Typography>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	) : (
		<Card
			className="RecuperarSenhaForm"
			style={{ borderRadius: '28px', padding: '49px 33px' }}
			sx={{ width: '314px' }}
			sm={{ minWidth: '100%' }}>
			<Typography className="title">
				Tudo certo<span style={{ color: '#F43724' }}> ;)</span>
			</Typography>

			<CardContent>
				<Typography
					mb={2}
					color={'#777777'}
					textAlign={'justify'}>
					Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
				</Typography>

				<Button onClick={() => (window.location.href = '/')}>voltar para o login</Button>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	)
}

export default RecuperarSenhaForm
