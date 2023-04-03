
import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import { Nav } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'
const MainNavigation = ({ active, onSelect, ...props }) => { 

  const NavLink = React.forwardRef((props, ref) => {

    const { href, as, ...rest } = props;
    console.log(props)
    return (
      <Link to={href} {...rest} />
    );
  });


  return (
    <Nav className='navigation'
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="/" icon={<HomeIcon />} as={NavLink} href={'/'} >
      Home
      </Nav.Item>
      <Nav.Item eventKey="/" icon={<HomeIcon />} as={NavLink} href={'/ProjectsPage'} >
      Projects
      </Nav.Item>
      <Nav.Item eventKey="/" icon={<HomeIcon />} as={NavLink} href={'/ResumePage'} >
      Resume
      </Nav.Item>
       
    </Nav>
  )
}

export default MainNavigation
