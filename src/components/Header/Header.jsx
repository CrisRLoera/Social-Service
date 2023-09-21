import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

  

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                </IconButton>
                <Typography>
                    Home
                </Typography>
                <Button color="inherit">Iniciar sesión</Button>
            </Toolbar>
        </AppBar>
    )
}