import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import DropdownMenu from "../../views/Home/menu_carreras/DropdownMenu";

const primary = {
    main: '#ab47bc',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  };

export default function Header() {
    return (
        <AppBar position="static" sx={{backgroundColor: primary.main}}>
            <Toolbar sx={{ padding: 0 }} color="primary">
                <Stack direction="row" spacing={2} sx={{ flexGrow: 1, alignItems: 'center' }}>
                    <DropdownMenu />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <PersonIcon fontSize="large" />
                    <Link to={'/'}>
                        <Button variant="contained" size="small">Home</Button>
                    </Link>
                    <Link to={'/logIn'}>
                        <Button variant="contained" size="small">Iniciar sesión</Button>
                    </Link>
                    <Link to={'/registro'}>
                        <Button variant="contained" size="small">Registro</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}