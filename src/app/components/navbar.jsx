import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbarStyles from '@/app/components/navbar.module.css'
import Image from 'next/image'
import navbarLogo from '../../../public/estatein-logo.png'
import Button from 'react-bootstrap/Button'

const navbar = () => {

    const navlinks = [
        {
            id: 1,
            title: 'home',
            path: '/',
        },
        {
            id: 2,
            title: 'about Us',
            path: '/about-us',
        },
        {
            id: 3,
            title: 'properties',
            path: '/properties',
        },
        {
            id: 4,
            title: 'services',
            path: '/services',
        },
    ]

    const [activeNavlink, setActiveNavlink] = useState(0)

    console.log(activeNavlink);

    return (
        <div className='fixed-top'>
            <div className={`${navbarStyles.topbarbg} text-center`}>
                <p>✨Discover Your Dream Property with Estatein <span><a href="" className='text-white'>Learn More</a></span></p>
            </div>
            <Navbar expand="lg" className={navbarStyles.navbarbg} id='navbar'>
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={navbarLogo} width='auto' height='auto' className='img-fluid' alt='estatein-logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            {navlinks.map((item, index) => <div key={index}>
                                <Nav.Link href={item.path} onClick={()=> setActiveNavlink(index)} className={`${activeNavlink === index ? 'active' : ''} mx-1 text-capitalize`}>{item.title}</Nav.Link>
                            </div>)}
                        </Nav>
                        <Nav>
                            <Button variant="dark" className={navbarStyles.contactbtn}>Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar