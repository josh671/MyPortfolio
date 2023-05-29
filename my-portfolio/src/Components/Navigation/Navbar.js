
import React from 'react'
import './navigation.css'
import { Nav } from 'rsuite'
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import DescriptionIcon from '@mui/icons-material/Description';
import { Typography, Container } from '@mui/material'
const MainNavigation = ({ active, onSelect, ...props }) => { 
  return (
    <>
     

    <Nav className='navigation'
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item className='navItem' eventKey="/" icon={<HomeIcon />}   href={'/'} >
      Home
      </Nav.Item>
      <Nav.Item className='navItem' eventKey="/ProjectsPage" icon={<AdbIcon />}  href={'/ProjectsPage'} >
      Projects
      </Nav.Item>
      <Nav.Item className='navItem' eventKey="/ResumePage" icon={<DescriptionIcon />} href={'/ResumePage'} >
      Resume
      </Nav.Item>
    </Nav> 
  
    
    
    </>
  )
}

export default MainNavigation
