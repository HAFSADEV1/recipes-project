import React from 'react'
import {Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import { BsFillHeartFill } from "react-icons/bs";
export default function Menu() {
    return (
        <div>
            <Navbar className="topMenu">
            <Navbar.Brand className='img'>
            <img src="../images/output.png" width="100"  height="90"   className="d-inline-block align-top" alt="Food logo"/>
            </Navbar.Brand>
            <Nav className="dd  Navbar  mx-ml mr-5 ml">
                        <Link  className="linkF" to="/">Home</Link>
                        <Link  className="linkF" to="/">About</Link>
                        <Link  className="linkF" to="/">Menu</Link>
                        <Link  className="linkF" to="/">Popular</Link>
                        <Link  className="linkF" to="/favorite" style={{color: "#F98169"}}  ><BsFillHeartFill/></Link>
             </Nav>
        </Navbar>
        </div>
    )
}
