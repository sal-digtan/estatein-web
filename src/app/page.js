'use client';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pageStyles from '@/app/page.module.css'
import Navbar from '@/app/components/navbar'
import Hero from '@/app/components/hero'
import Featured from '@/app/components/featured'
import Clients from '@/app/components/clients'
import Faqs from '@/app/components/faqs'

const page = () => {
  return (
    <section className=''>
      <Container fluid className='p-0 m-0'>
        <Row>
          <Col className={pageStyles.page}>
            <Navbar />
            <Hero />
            <Featured />
            <Clients />
            <Faqs />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default page