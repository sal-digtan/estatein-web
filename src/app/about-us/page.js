'use client';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pageStyles from '@/app/page.module.css'
import Navbar from '@/app/components/navbar'
import Journey from '@/app/components/journey'
import Footer from '@/app/components/footer'
import AboutHero from '@/app/components/about_hero'
import Values from '@/app/components/values'
import Achievements from '@/app/components/achievements'
import Experience from '@/app/components/experience'

const page = () => {
    return (
        <section className=''>
            <Container fluid className='p-0 m-0'>
                <Row>
                    <Col className={pageStyles.page}>
                        <Navbar />
                        <AboutHero />
                        <Values />
                        <Achievements />
                        <Experience />
                        <Journey />
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default page