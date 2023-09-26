import React, { useState } from 'react';
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
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

  );
};

export default DropdownMenu;
