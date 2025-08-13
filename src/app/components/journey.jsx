import React from 'react'
import journeyStyles from '@/app/components/journey.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const journey = () => {
    return (
        <section className={`${journeyStyles.journeybg} py-5`}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8} className='mb-lg-0 mb-3'>
                        <div>
                            <h2>Start Your Real Estate Journey Today</h2>
                            <p className={journeyStyles.journey_text}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='text-end'>
                            <Button variant="dark" className={journeyStyles.explorebtn}>Explore Properties</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default journey