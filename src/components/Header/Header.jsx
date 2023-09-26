import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <Stack direction="row" spacing={2}>
                    <PersonIcon fontSize="large" />
                    <Button variant="contained" size="small">Iniciar sesión</Button>
                    <Link to={'/registro'}>
                        <Button variant="contained" size="small">Registro</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}