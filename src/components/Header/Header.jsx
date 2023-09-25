import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';


export default function Header() {
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <Stack direction="row" spacing={2}>
                    <PersonIcon fontSize="large" />
                    <Button variant="contained" size="small">Iniciar sesión</Button>
                    <Button variant="contained" size="small">Registro</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}