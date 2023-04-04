import './Header.css'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuPerfil from './MenuPerfil'

export default function Header() {



  return (
    <div className="header">
      <img className="logo" src="/images/logo_instagrado.png" alt="Logo rede social"></img>
      <nav className="nav">
        <a className="home">Home</a>
        <a className="explore">Explore</a>
        <a className="grupos">Grupos</a>
      </nav>

      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit">
        <Badge badgeContent={16} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p className="notifications">Notifications</p>

      <MenuPerfil />
      
    </div>
  )
}

