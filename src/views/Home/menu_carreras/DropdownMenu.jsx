import React, { useState } from 'react';
import { AppBar, Stack, Toolbar } from "@mui/material";
import './DropdownMenu.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = {
    backgroundColor: 'yellow', 
    color: 'black', 
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={buttonStyle} 
      >
        Carreras
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Ingeniero Aeroespacial</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero Civil</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero en Ciencias de la Computación</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero en Minas y Metalurgista</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero en Sistemas Computacionales en Hardware</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero en Sistemas Topográficos</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero Físico</MenuItem>
        <MenuItem onClick={handleClose}>Ingenieria en Tecnología de Procesos</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero Geólogo</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero Matemático</MenuItem>
        <MenuItem onClick={handleClose}>Ingeniero de Software</MenuItem>
      </Menu>
    </div>
  );
}