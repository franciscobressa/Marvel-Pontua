import {
	Card,
	CardActions,
	CardContent,
	FormControl,
	InputLabel,
	MenuItem,
	Typography,
} from '@mui/material'
import './SelecionarAgenteForm.css'
import Button from '../../../../shared/Button/Button'
import Select from '@mui/material/Select'
import { useEffect, useState } from 'react'
import { getAgentes } from '../../../../../services/marvel'
import { useSelector, useDispatch } from 'react-redux'
import {
	setAgentsState,
	setSelectedAgent,
} from '../../../../../store/reducers/agentsSlice'

const SelecionarAgenteForm = () => {
	const agents = useSelector(state => state.agents.agents)
	const selectedAgent = useSelector(state => state.agents.selectedAgent)

	const handleChange = event => {
		setSelectedAgent(event.target.value.id)
	}

	const dispatch = useDispatch()

	function handleAddAgent(agents) {
		dispatch(setAgentsState(agents))
	}

	useEffect(() => {
		async function handleGetAgentes() {
			const response = await getAgentes()
			handleAddAgent(response)
			setSelectedAgent(response[0].id)
		}

		if (agents.length == 0) {
			console.log(1)
			handleGetAgentes()
		}
	}, [])

	return (
		<Card
			className="loginForm"
			style={{ borderRadius: '28px', padding: '49px 33px' }}
			sx={{ width: '314px' }}
			sm={{ minWidth: '100%' }}>
			<Typography className="title">
				Selecione o seu agente mais legal<span style={{ color: '#F43724' }}>.</span>
			</Typography>
			<Typography
				mb={2}
				color={'#777777'}>
				Tenha a visão completa do seu agente.
			</Typography>
			<CardContent>
				{selectedAgent && (
					<FormControl fullWidth>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={selectedAgent}
							onChange={handleChange}>
							{agents &&
								agents.map((agent, index) => (
									<MenuItem
										key={index}
										value={agent.id}>
										{agent.name}
									</MenuItem>
								))}
						</Select>
					</FormControl>
				)}
			</CardContent>
			<CardContent>
				<Button onClick={() => (window.location.href = '/dashboard')}> Entrar</Button>
			</CardContent>

			<CardActions></CardActions>
		</Card>
	)
}

export default SelecionarAgenteForm
