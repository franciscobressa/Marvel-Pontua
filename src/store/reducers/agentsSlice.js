import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'agents',
	initialState: {
		agents: [],
		selectedAgent: null,
	},
	reducers: {
		setAgentsState: (state, action) => {
			state.agents = action.payload
			state.selectedAgent = action.payload[0].id
		},
		setSelectedAgent: (state, action) => {
			state.selectedAgent = action.payload
		},
	},
})

export const { setAgentsState, setSelectedAgent } = slice.actions

export default slice.reducer

export const getAgents = state => state.agents
