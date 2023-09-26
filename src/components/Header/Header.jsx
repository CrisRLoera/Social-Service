import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "flex-end", padding: 0 }}>
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