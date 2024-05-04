import React from 'react'
import { Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jpg'
 function Header() {


    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
         navigate('/')
    }

    return (
        < >
            <Navbar expand="lg" style={{ backgroundColor: 'black' }} >
                <Container>
                    <Navbar.Brand  >
                        <Link to={'/home'}> <img width={'100%'} height={'80px'} src={Logo} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='text-center  w-100'>
                            <h2 style={{ fontFamily: "fantasy", fontSize: "50px" }} className='text-white '><span className='text-danger'>BIG BOY</span> TOYZ</h2>
                        </div>
                        <Nav className="  container justify-content-end">
                            <Nav.Link className='text-white fw-bolder '><Link className='text-decoration-none text-white' to={'/home'}>HOME</Link></Nav.Link>
                            <Nav.Link className='text-white fw-bolder ms-4'><Link className='text-decoration-none text-white' to={'/cars'}>CARS</Link></Nav.Link>
                            <Nav.Link className='text-white fw-bolder ms-4'><Link className='text-decoration-none text-white' to={'/booking'}>BOOK CAR</Link></Nav.Link>
                            <Nav.Link className='text-white fw-bolder ms-4'><Link className='text-decoration-none text-white' to={'/testdrive'}>TEST DRIVE</Link></Nav.Link>
                            <div className="ms-auto">
                                <button onClick={logout} className='btn btn-danger rounded'>LogOut <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header