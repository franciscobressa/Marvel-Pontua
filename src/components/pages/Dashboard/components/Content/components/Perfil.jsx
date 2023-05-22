import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function Perfil() {
	const selectedAgent = useSelector(state => state.agents.selectedAgent)
	const agents = useSelector(state => state.agents.agents)
	const [agent, setAgent] = useState()

	function buscarPorId() {
		return agents.map(agent => {
			if (agent.id === selectedAgent) {
				return setAgent(agent)
			}
		})
	}

	useEffect(() => {
		buscarPorId()
	}, [])

	return agent ? (
		<>
			<Card sx={{ width: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={`${agent.thumbnail.path}.${agent.thumbnail.extension}`}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						{agent.name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						{agent.description}
					</Typography>
				</CardContent>
			</Card>
		</>
	) : (
		<></>
	)
}
