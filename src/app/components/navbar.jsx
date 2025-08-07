import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbarStyles from '@/app/components/navbar.module.css'
import Image from 'next/image'
import navbarLogo from '../../../public/estatein-logo.png'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navbar = () => {

    const pathname = usePathname()

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

    return (
        <div className='fixed-top'>
            <div className={`${navbarStyles.topbarbg} text-center`}>
                <p>✨Discover Your Dream Property with Estatein <span><a href="" className='text-white'>Learn More</a></span></p>
            </div>
            <Navbar expand="lg" className={navbarStyles.navbarbg} id='navbar'>
                <Container>
                    <Link href="/">
                        <Image src={navbarLogo} width='auto' height='auto' className='img-fluid' alt='estatein-logo' />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            {navlinks.map((item, index) => <div key={index}>
                                <Link href={item.path} className={`${pathname === item.path ? navbarStyles['nav-link-active'] : navbarStyles['nav-link']} mx-1 text-capitalize text-white`}>{item.title}</Link>
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