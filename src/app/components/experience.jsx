import React from 'react'
import experienceStyles from '@/app/components/experience.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const experience = () => {

    const experienceData = [
        {
            id: 1,
            step: 'Step 01',
            title: 'Discover a World of Possibilities',
            desc: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.',
        },
        {
            id: 2,
            step: 'Step 02',
            title: 'Narrowing Down Your Choices',
            desc: 'Once you\'ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.',
        },
        {
            id: 3,
            step: 'Step 03',
            title: 'Personalized Guidance',
            desc: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
        },
        {
            id: 4,
            step: 'Step 04',
            title: 'See It for Yourself',
            desc: 'Arrange viewings of the properties you\'re interested in. We\'ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.',
        },
        {
            id: 5,
            step: 'Step 05',
            title: 'Making Informed Decisions',
            desc: 'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.',
        },
        {
            id: 6,
            step: 'Step 06',
            title: 'Getting the Best Deal',
            desc: 'We\'ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.',
        },
    ]

    return (
        <section className='py-5'>
            <Container>
                <Row>
                    <Col lg={12} className='mb-4'>
                        <div>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_181_3429)">
                                    <path d="M12 24.0133C18.6274 24.0133 24 18.6407 24 12.0133C24 5.38585 18.6274 0.0133362 12 0.0133362C5.37258 0.0133362 0 5.38585 0 12.0133C0 18.6407 5.37258 24.0133 12 24.0133Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_181_3429)">
                                    <path d="M35.9998 19.2079C39.9763 19.2079 43.1998 15.9844 43.1998 12.0079C43.1998 8.03149 39.9763 4.80798 35.9998 4.80798C32.0234 4.80798 28.7998 8.03149 28.7998 12.0079C28.7998 15.9844 32.0234 19.2079 35.9998 19.2079Z" fill="#333333" />
                                    <path d="M28.7996 26.4C32.7761 26.4 35.9996 23.1764 35.9996 19.2C35.9996 15.2235 32.7761 12 28.7996 12C24.8232 12 21.5996 15.2235 21.5996 19.2C21.5996 23.1764 24.8232 26.4 28.7996 26.4Z" fill="#141414" />
                                    <path d="M43.2 26.4C47.1764 26.4 50.4 23.1764 50.4 19.2C50.4 15.2235 47.1764 12 43.2 12C39.2235 12 36 15.2235 36 19.2C36 23.1764 39.2235 26.4 43.2 26.4Z" fill="#141414" />
                                    <path d="M28.7996 12C32.7761 12 35.9996 8.77643 35.9996 4.79998C35.9996 0.823525 32.7761 -2.40002 28.7996 -2.40002C24.8232 -2.40002 21.5996 0.823525 21.5996 4.79998C21.5996 8.77643 24.8232 12 28.7996 12Z" fill="#141414" />
                                    <path d="M43.2 12C47.1764 12 50.4 8.77643 50.4 4.79998C50.4 0.823525 47.1764 -2.40002 43.2 -2.40002C39.2235 -2.40002 36 0.823525 36 4.79998C36 8.77643 39.2235 12 43.2 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_181_3429)">
                                    <path d="M51.36 15.3637C53.2157 15.3637 54.72 13.8594 54.72 12.0037C54.72 10.1481 53.2157 8.64377 51.36 8.64377C49.5043 8.64377 48 10.1481 48 12.0037C48 13.8594 49.5043 15.3637 51.36 15.3637Z" fill="#333333" />
                                    <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5044 49.8553 12 47.9996 12C46.144 12 44.6396 13.5044 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                                    <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5044 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5044 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                                    <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64003C51.3596 6.78435 49.8553 5.28003 47.9996 5.28003C46.144 5.28003 44.6396 6.78435 44.6396 8.64003C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                                    <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64003C58.0794 6.78435 56.5751 5.28003 54.7194 5.28003C52.8637 5.28003 51.3594 6.78435 51.3594 8.64003C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_181_3429">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_181_3429">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.79999)" />
                                    </clipPath>
                                    <clipPath id="clip2_181_3429">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={experienceStyles.experience_title}>Navigating the Estatein Experience</h2>
                                <p className={experienceStyles.experience_desc}>At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
                            </div>
                        </div>
                    </Col>
                    {experienceData.map((item, index) =>
                        <Col lg={4} md={6} className='mb-3' key={index}>
                            <div>
                                <p>{item.step}</p>
                            </div>
                            <Card className={experienceStyles.experience_card}>
                                <Card.Body>
                                    <Card.Title className='mb-3'>{item.title}</Card.Title>
                                    <Card.Text className={experienceStyles.experience_desc}>{item.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default experience