import React from 'react'
import aboutheroStyles from '@/app/components/about_hero.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'next/image'
import aboutheroimg from '../../../public/aboutheroimg.png'

const about_hero = () => {

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

    return (
        <section className='py-5'>
            <Container>
                <Row className='align-items-end'>
                    <Col lg={6} md={12} className='pt-5 order-lg-1 order-md-2 order-2'>
                        <div className='mb-5'>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_144_10118)">
                                    <path d="M12 24.0132C18.6274 24.0132 24 18.6407 24 12.0132C24 5.38582 18.6274 0.0133057 12 0.0133057C5.37258 0.0133057 0 5.38582 0 12.0132C0 18.6407 5.37258 24.0132 12 24.0132Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_144_10118)">
                                    <path d="M35.9998 19.2081C39.9763 19.2081 43.1998 15.9845 43.1998 12.0081C43.1998 8.03162 39.9763 4.80811 35.9998 4.80811C32.0234 4.80811 28.7998 8.03162 28.7998 12.0081C28.7998 15.9845 32.0234 19.2081 35.9998 19.2081Z" fill="#333333" />
                                    <path d="M28.7996 26.4001C32.7761 26.4001 35.9996 23.1766 35.9996 19.2001C35.9996 15.2237 32.7761 12.0001 28.7996 12.0001C24.8232 12.0001 21.5996 15.2237 21.5996 19.2001C21.5996 23.1766 24.8232 26.4001 28.7996 26.4001Z" fill="#141414" />
                                    <path d="M43.2 26.4001C47.1764 26.4001 50.4 23.1766 50.4 19.2001C50.4 15.2237 47.1764 12.0001 43.2 12.0001C39.2235 12.0001 36 15.2237 36 19.2001C36 23.1766 39.2235 26.4001 43.2 26.4001Z" fill="#141414" />
                                    <path d="M28.7996 12.0001C32.7761 12.0001 35.9996 8.77655 35.9996 4.8001C35.9996 0.823647 32.7761 -2.3999 28.7996 -2.3999C24.8232 -2.3999 21.5996 0.823647 21.5996 4.8001C21.5996 8.77655 24.8232 12.0001 28.7996 12.0001Z" fill="#141414" />
                                    <path d="M43.2 12.0001C47.1764 12.0001 50.4 8.77655 50.4 4.8001C50.4 0.823647 47.1764 -2.3999 43.2 -2.3999C39.2235 -2.3999 36 0.823647 36 4.8001C36 8.77655 39.2235 12.0001 43.2 12.0001Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_144_10118)">
                                    <path d="M51.36 15.3638C53.2157 15.3638 54.72 13.8595 54.72 12.0038C54.72 10.1481 53.2157 8.6438 51.36 8.6438C49.5043 8.6438 48 10.1481 48 12.0038C48 13.8595 49.5043 15.3638 51.36 15.3638Z" fill="#333333" />
                                    <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5043 49.8553 12 47.9996 12C46.144 12 44.6396 13.5043 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                                    <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5043 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5043 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                                    <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64003C51.3596 6.78435 49.8553 5.28003 47.9996 5.28003C46.144 5.28003 44.6396 6.78435 44.6396 8.64003C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                                    <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64003C58.0794 6.78435 56.5751 5.28003 54.7194 5.28003C52.8637 5.28003 51.3594 6.78435 51.3594 8.64003C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_144_10118">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_144_10118">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.80005)" />
                                    </clipPath>
                                    <clipPath id="clip2_144_10118">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={aboutheroStyles.abouthero_title}>Our Journey</h2>
                                <p className={aboutheroStyles.abouthero_desc}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                            </div>
                        </div>
                        <Row>
                            {heroStats.map((item, index) => <Col key={index} lg={4} md={index === heroStats.length - 1 ? 12 : 6} xs={index === heroStats.length - 1 ? 12 : 6} className={`${aboutheroStyles.statscardcon} mb-lg-0 mb-3`}>
                                <Card className={aboutheroStyles.statscardbg}>
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
                    <Col lg={6} md={12} className='order-lg-2 order-md-1 order-1'>
                        <div>
                            <Image src={aboutheroimg} width='100%' height='100%' alt='about-hero-img' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default about_hero