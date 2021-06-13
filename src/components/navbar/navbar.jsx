import React from "react"
import {Navbar, Nav, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Profile from '../../assets/images/Profile.png'
import "./style.scss"

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          Blog's
        </Link>
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/ViewFeed">Feed</Link>
          <Link to="/ViewRegisterPost">Postar</Link>
          <Link to="/ViewProfile">Perfil</Link>
        </Nav>
        <Nav>
          <Image src={Profile} height="30" width="30" roundedCircle />
        </Nav>
    </Navbar>
  )
}

export default Navigationbar;