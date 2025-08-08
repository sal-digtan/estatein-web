import React from 'react'
import achievementsStyles from '@/app/components/achievements.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const achievements = () => {

    const achievementsData = [
        {
            id: 1,
            title: '3+ Years of Excellence',
            desc: 'With over 3 years in the industry, we\'ve amassed a wealth of knowledge and experience.',
        },
        {
            id: 2,
            title: 'Happy Clients',
            desc: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
        },
        {
            id: 3,
            title: 'Industry Recognition',
            desc: 'We\'ve earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.',
        },
    ]

    return (
        <section className='py-5'>
            <Container>
                <Row>
                    <Col lg={12} className='mb-4'>
                        <div>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_144_10249)">
                                    <path d="M12 24.0133C18.6274 24.0133 24 18.6407 24 12.0133C24 5.38586 18.6274 0.0133438 12 0.0133438C5.37258 0.0133438 0 5.38586 0 12.0133C0 18.6407 5.37258 24.0133 12 24.0133Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_144_10249)">
                                    <path d="M35.9998 19.208C39.9763 19.208 43.1998 15.9844 43.1998 12.008C43.1998 8.03152 39.9763 4.80801 35.9998 4.80801C32.0234 4.80801 28.7998 8.03152 28.7998 12.008C28.7998 15.9844 32.0234 19.208 35.9998 19.208Z" fill="#333333" />
                                    <path d="M28.7996 26.4C32.7761 26.4 35.9996 23.1765 35.9996 19.2C35.9996 15.2236 32.7761 12 28.7996 12C24.8232 12 21.5996 15.2236 21.5996 19.2C21.5996 23.1765 24.8232 26.4 28.7996 26.4Z" fill="#141414" />
                                    <path d="M43.2 26.4C47.1764 26.4 50.4 23.1765 50.4 19.2C50.4 15.2236 47.1764 12 43.2 12C39.2235 12 36 15.2236 36 19.2C36 23.1765 39.2235 26.4 43.2 26.4Z" fill="#141414" />
                                    <path d="M28.7996 12C32.7761 12 35.9996 8.77646 35.9996 4.80001C35.9996 0.823556 32.7761 -2.39999 28.7996 -2.39999C24.8232 -2.39999 21.5996 0.823556 21.5996 4.80001C21.5996 8.77646 24.8232 12 28.7996 12Z" fill="#141414" />
                                    <path d="M43.2 12C47.1764 12 50.4 8.77646 50.4 4.80001C50.4 0.823556 47.1764 -2.39999 43.2 -2.39999C39.2235 -2.39999 36 0.823556 36 4.80001C36 8.77646 39.2235 12 43.2 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_144_10249)">
                                    <path d="M51.36 15.3637C53.2157 15.3637 54.72 13.8594 54.72 12.0037C54.72 10.148 53.2157 8.64374 51.36 8.64374C49.5043 8.64374 48 10.148 48 12.0037C48 13.8594 49.5043 15.3637 51.36 15.3637Z" fill="#333333" />
                                    <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5043 49.8553 12 47.9996 12C46.144 12 44.6396 13.5043 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                                    <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5043 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5043 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                                    <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64C51.3596 6.78432 49.8553 5.28 47.9996 5.28C46.144 5.28 44.6396 6.78432 44.6396 8.64C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                                    <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64C58.0794 6.78432 56.5751 5.28 54.7194 5.28C52.8637 5.28 51.3594 6.78432 51.3594 8.64C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_144_10249">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_144_10249">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.8)" />
                                    </clipPath>
                                    <clipPath id="clip2_144_10249">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={achievementsStyles.achievements_title}>Our Achievements</h2>
                                <p className={achievementsStyles.achievements_desc}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                            </div>
                        </div>
                    </Col>
                    {achievementsData.map((item, index) => <Col lg={4} md={6} className='mb-lg-0 mb-3' key={index}>
                        <Card className={achievementsStyles.achievements_card}>
                            <Card.Body>
                                <Card.Title className='mb-3'>{item.title}</Card.Title>
                                <Card.Text className={achievementsStyles.achievements_cardtext}>{item.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default achievements