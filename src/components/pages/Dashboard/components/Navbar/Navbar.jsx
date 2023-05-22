import { Grid } from '@mui/material'
import { Sidebar } from '../Sidebar/Sidebar'
import { Content } from '../Content/Content'

export function Navbar() {
	return (
		<div className="dashboard-navbar">
			<Grid
				container
				spacing={0}>
				<Grid
					item
					xs={2}>
					<Sidebar />
				</Grid>
				<Grid
					item
					xs={10}>
					<Content />
				</Grid>
			</Grid>
		</div>
	)
}
