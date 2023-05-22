import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Stack,
	Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedAgent } from '../../../../../../store/reducers/agentsSlice'
export function Home() {
	const agents = useSelector(state => state.agents.agents)
	const dispatch = useDispatch()
	return (
		<Stack
			spacing={{ xs: 1, sm: 2 }}
			direction="row"
			useFlexGap
			flexWrap="wrap">
			{agents.map(element => (
				<Card sx={{ width: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{element.name}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary">
							{element.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							onClick={() => dispatch(setSelectedAgent(element.id))}
							size="small">
							Selecionar
						</Button>
					</CardActions>
				</Card>
			))}
		</Stack>
	)
}
