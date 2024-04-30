import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <ContactMailIcon />, name: 'Contact', target: 'Contact', to: '/Contact' },
  { icon: <WorkHistoryIcon />, name: 'Projects', target: 'ProjectSection', to:'/ProjectSection' },
  { icon: <AccountBoxIcon />, name: 'About', target: 'About', to: '/About' },
  { icon: <HomeIcon />, name: 'Home', target: 'Hero', to: '/' },
];

export default function SpeedDialTooltipOpen({ scrollToSection }) {
  const [open, setOpen] = React.useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, position:"fixed", bottom: 16, right: 16, zIndex: 999}}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />} 
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <Link key={action.name} to={action.to}>
            <SpeedDialAction
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => scrollToSection(action.target)}
            />
          </Link>
        ))}
      </SpeedDial>
    </Box>
  );
}
