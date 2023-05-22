import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'tela',
	initialState: { tela: 'Perfil' },
	reducers: {
		setTela: (state, action) => {
			state.tela = action.payload
		},
	},
})

export const { setTela } = slice.actions

export default slice.reducer

export const getTela = state => state.agents
