import React, { useState } from 'react';
import { AppBar, Stack, Toolbar } from "@mui/material";
import './DropdownMenu.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className='dropdown-button'>
          <Stack direction="row" spacing={2}>
            <button className="dropdown-button" onClick={toggleDropdown}>
              Carreras
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>Ingenieria en Tecnología de Procesos</li>
                <li>Carrera 2</li>
                <li>Carrera 3</li>
              </ul>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </>

  );
};

export default DropdownMenu;
