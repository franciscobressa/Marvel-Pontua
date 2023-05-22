import { useState } from 'react'
import { Box } from '@mui/material'
import './DashboardHeader.css'
import './Content.css'
import { Perfil } from './components/Perfil'
import { useSelector } from 'react-redux'
import { Home } from './components/Home'
export function Content() {
	const tela = useSelector(state => state.tela.tela)

	return (
		<div className="Content">
			<div className="DashboardHeader">
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete="off">
					<input
						label="Outlined"
						variant="outlined"
						className="input"
						type="text"
						placeholder="Busque por um agente"
					/>
				</Box>
			</div>
			{tela === 'Perfil' ? <Perfil /> : <Home />}
		</div>
	)
}
