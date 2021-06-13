import React from "react"
import {Navbar, Nav, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Brand2.svg'
import Profile from '../../assets/images/Profile.png'
import { FaRegListAlt, FaRegUserCircle, FaPenSquare, FaBars} from 'react-icons/fa'
import "./style.scss"

const Navigationbar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">
          Blog's
        </Link>
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/ViewFeed" className="mr-3 d-flex">
            <FaRegListAlt className="mr-1"/>
            Feed
          </Link>
          <Link to="/ViewRegisterPost">
            <FaPenSquare className="mr-1"/>
            Postar
          </Link>

          <Link to="/ViewProfile" className="ml-3">
            <FaRegUserCircle className="mr-1"/>
            Perfil
          </Link>
        </Nav>
        <Nav>
          <Image src={Profile} height="30" width="30" roundedCircle className="ml-3"/>
          <FaBars color="white" className="ml-3"/>
        </Nav>
    </Navbar>
  )
}

export default Navigationbar;