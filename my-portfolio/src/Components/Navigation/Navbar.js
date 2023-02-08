
import { Link } from 'react-router-dom'
import React from 'react'
import './navigation.css'

import { Nav } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'

const MainNavigation = ({ active, onSelect, ...props }) => {
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="Home" icon={<HomeIcon />}>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item eventKey="Projects">
        <Link to="/ProjectsPage">Projects</Link>
      </Nav.Item>
      <Nav.Item eventKey="Resume">
        <Link to="/ResumePage">Resume</Link>
      </Nav.Item>
    </Nav>
  )
}

export default MainNavigation
