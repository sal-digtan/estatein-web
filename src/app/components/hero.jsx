import React from 'react'
import heroStyles from '@/app/components/hero.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import heroimg from '../../../public/heroimg.png'
import herofeaturesicon1 from '../../../public/herofeaturesicon1.png'
import herofeaturesicon2 from '../../../public/herofeaturesicon2.png'
import herofeaturesicon3 from '../../../public/herofeaturesicon3.png'
import herofeaturesicon4 from '../../../public/herofeaturesicon4.png'

const hero = () => {

    const heroStats = [
        {
            id: 1,
            number: '200+',
            title: 'Happy Customers'
        },
        {
            id: 2,
            number: '10k+',
            title: 'Properties For Clients'
        },
        {
            id: 3,
            number: '16+',
            title: 'Years of Experience'
        },
    ]

    const features = [
        {
            id: 1,
            icon: herofeaturesicon1,
            title: 'Find Your Dream Home'
        },
        {
            id: 2,
            icon: herofeaturesicon2,
            title: 'Unlock Property Value'
        },
        {
            id: 3,
            icon: herofeaturesicon3,
            title: 'Effortless Property Management'
        },
        {
            id: 4,
            icon: herofeaturesicon4,
            title: 'Smart Investments, Informed Decisions'
        },
    ]

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={6} md={6} className='pt-5 order-lg-1 order-md-1 order-2'>
                        <div className='mb-5'>
                            <h2 className={`${heroStyles.herotitle} mb-3`}>Discover Your Dream Property with Estatein</h2>
                            <p className={heroStyles.herodesctext}>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                        </div>
                        <div className='mb-5'>
                            <Button variant="dark" className={heroStyles.herolearnbtn}>Learn More</Button>
                            <Button variant="dark" className={`${heroStyles.herobrowsebtn} ms-lg-3 ms-md-3 mt-lg-0 mt-md-0 mt-3`}>Browse Properties</Button>
                        </div>
                        <Row>
                            {heroStats.map((item, index) => <Col key={index} lg={4} md={index === heroStats.length - 1 ? 12 : 6} xs={index === heroStats.length - 1 ? 12 : 6} className={`${heroStyles.statscardcon} mb-lg-0 mb-3`}>
                                <Card className={heroStyles.statscardbg}>
                                    <Card.Body>
                                        <div>
                                            <h2 className='fw-bold'>{item.number}</h2>
                                            <p>{item.title}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)}
                        </Row>
                    </Col>
                    <Col lg={6} md={6} className={`${heroStyles['breakout-column']} order-lg-2 order-md-2 order-1`}>
                        <div>
                            <Image src={heroimg} alt='heroimg' width='100%' height='100%' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='pt-3'>
                <Row>
                    {features.map((item, index) => <Col lg={3} md={3} xs={6} key={index} className='mb-lg-0 mb-md-0 mb-3'>
                        <Card className={heroStyles.featurescardbg}>
                            <Card.Body>
                                <div className='text-center position-relative'>
                                    <div className='position-absolute top-0 end-0'>
                                        <a href="">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <Image src={item.icon} alt='features-icon' width='auto' height='auto' className='img-fluid mb-3' />
                                    <p>{item.title}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </Container>
        </section>
    )
}

export default hero