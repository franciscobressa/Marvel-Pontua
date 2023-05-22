import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LogoutIcon from '@mui/icons-material/Logout'
import { setTela } from '../../../../../store/reducers/telaSlice'
import { useDispatch } from 'react-redux'
export function Sidebar() {
	const dispatch = useDispatch()
	return (
		<div className="Sidebar">
			<img src="src/assets/logo_pontua_dark.svg" />
			<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				component="nav"
				aria-labelledby="nested-list-subheader">
				<ListItemButton onClick={() => dispatch(setTela('Home'))}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItemButton>
				<ListItemButton onClick={() => dispatch(setTela('Perfil'))}>
					<ListItemIcon>
						<PersonOutlineIcon />
					</ListItemIcon>
					<ListItemText primary="Perfil" />
				</ListItemButton>
				<ListItemButton onClick={() => (window.location.href = '/')}>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary="Sair" />
				</ListItemButton>
			</List>
		</div>
	)
}
