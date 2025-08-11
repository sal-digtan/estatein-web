import React, { useState, useRef } from 'react'
import aboutclientsStyles from '@/app/components/about_clients.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';

const about_clients = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const clientsData = [
        {
            id: 1,
            year: 'Since 2019',
            title: 'ABC Corporation',
            domain: 'Commercial Real Estate',
            category: 'Luxury Home Development',
            text: 'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.'
        },
        {
            id: 2,
            year: 'Since 2018',
            title: 'GreenTech Enterprises',
            domain: 'Commercial Real Estate',
            category: 'Retail Space',
            text: 'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.'
        },
        {
            id: 3,
            year: 'Since 2019',
            title: 'ABC Corporation',
            domain: 'Commercial Real Estate',
            category: 'Luxury Home Development',
            text: 'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.'
        },
        {
            id: 4,
            year: 'Since 2018',
            title: 'GreenTech Enterprises',
            domain: 'Commercial Real Estate',
            category: 'Retail Space',
            text: 'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.'
        },
    ]

    return (
        <section className='pb-5'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='mb-5'>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_181_3379)">
                                    <path d="M12 24.0132C18.6274 24.0132 24 18.6407 24 12.0132C24 5.38582 18.6274 0.0133057 12 0.0133057C5.37258 0.0133057 0 5.38582 0 12.0132C0 18.6407 5.37258 24.0132 12 24.0132Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_181_3379)">
                                    <path d="M35.9998 19.2081C39.9763 19.2081 43.1998 15.9845 43.1998 12.0081C43.1998 8.03162 39.9763 4.80811 35.9998 4.80811C32.0234 4.80811 28.7998 8.03162 28.7998 12.0081C28.7998 15.9845 32.0234 19.2081 35.9998 19.2081Z" fill="#333333" />
                                    <path d="M28.7996 26.4001C32.7761 26.4001 35.9996 23.1766 35.9996 19.2001C35.9996 15.2237 32.7761 12.0001 28.7996 12.0001C24.8232 12.0001 21.5996 15.2237 21.5996 19.2001C21.5996 23.1766 24.8232 26.4001 28.7996 26.4001Z" fill="#141414" />
                                    <path d="M43.2 26.4001C47.1764 26.4001 50.4 23.1766 50.4 19.2001C50.4 15.2237 47.1764 12.0001 43.2 12.0001C39.2235 12.0001 36 15.2237 36 19.2001C36 23.1766 39.2235 26.4001 43.2 26.4001Z" fill="#141414" />
                                    <path d="M28.7996 12.0001C32.7761 12.0001 35.9996 8.77655 35.9996 4.8001C35.9996 0.823647 32.7761 -2.3999 28.7996 -2.3999C24.8232 -2.3999 21.5996 0.823647 21.5996 4.8001C21.5996 8.77655 24.8232 12.0001 28.7996 12.0001Z" fill="#141414" />
                                    <path d="M43.2 12.0001C47.1764 12.0001 50.4 8.77655 50.4 4.8001C50.4 0.823647 47.1764 -2.3999 43.2 -2.3999C39.2235 -2.3999 36 0.823647 36 4.8001C36 8.77655 39.2235 12.0001 43.2 12.0001Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_181_3379)">
                                    <path d="M51.36 15.3638C53.2157 15.3638 54.72 13.8595 54.72 12.0038C54.72 10.1481 53.2157 8.6438 51.36 8.6438C49.5043 8.6438 48 10.1481 48 12.0038C48 13.8595 49.5043 15.3638 51.36 15.3638Z" fill="#333333" />
                                    <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5043 49.8553 12 47.9996 12C46.144 12 44.6396 13.5043 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                                    <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5043 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5043 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                                    <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64003C51.3596 6.78435 49.8553 5.28003 47.9996 5.28003C46.144 5.28003 44.6396 6.78435 44.6396 8.64003C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                                    <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64003C58.0794 6.78435 56.5751 5.28003 54.7194 5.28003C52.8637 5.28003 51.3594 6.78435 51.3594 8.64003C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_181_3379">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_181_3379">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.80005)" />
                                    </clipPath>
                                    <clipPath id="clip2_181_3379">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={aboutclientsStyles.aboutclients_title}>Our Valued Clients</h2>
                                <p className={aboutclientsStyles.aboutclients_desc}>At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</p>
                            </div>
                        </div>
                        <div className={`${aboutclientsStyles['slider-container']} pb-4`} id='clients-slider'>
                            <Slider {...settings} ref={slider => {
                                sliderRef = slider;
                            }}>
                                {clientsData.map((item, index) => <Card key={index} className={aboutclientsStyles.aboutclients_card}>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between flex-lg-row flex-column'>
                                            <div className='mb-lg-0 mb-3'>
                                                <span className='d-block mb-2'>{item.year}</span>
                                                <Card.Title>{item.title}</Card.Title>
                                            </div>
                                            <div>
                                                <Button variant="dark" className={aboutclientsStyles.visitbtn}>Visit Website</Button>
                                            </div>
                                        </div>
                                        <Row className='py-4'>
                                            <Col lg={6} xs={6} className={aboutclientsStyles.domain_col}>
                                                <span className='d-block mb-2'>
                                                    <svg className='me-1' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.125 5.5C3.125 4.46447 3.96447 3.625 5 3.625H6.875C7.91053 3.625 8.75 4.46447 8.75 5.5V7.375C8.75 8.41053 7.91053 9.25 6.875 9.25H5C3.96447 9.25 3.125 8.41053 3.125 7.375V5.5Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.125 13.625C3.125 12.5895 3.96447 11.75 5 11.75H6.875C7.91053 11.75 8.75 12.5895 8.75 13.625V15.5C8.75 16.5355 7.91053 17.375 6.875 17.375H5C3.96447 17.375 3.125 16.5355 3.125 15.5V13.625Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.5C11.25 4.46447 12.0895 3.625 13.125 3.625H15C16.0355 3.625 16.875 4.46447 16.875 5.5V7.375C16.875 8.41053 16.0355 9.25 15 9.25H13.125C12.0895 9.25 11.25 8.41053 11.25 7.375V5.5Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 13.625C11.25 12.5895 12.0895 11.75 13.125 11.75H15C16.0355 11.75 16.875 12.5895 16.875 13.625V15.5C16.875 16.5355 16.0355 17.375 15 17.375H13.125C12.0895 17.375 11.25 16.5355 11.25 15.5V13.625Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Domain
                                                </span>
                                                <span className='d-block'>{item.domain}</span>
                                            </Col>
                                            <Col lg={6} xs={6}>
                                                <span className='d-block mb-2'>
                                                    <svg className='me-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.875 11.75L12.625 2.375L10.75 9.25H17.625L8.875 18.625L10.75 11.75H3.875Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Category
                                                </span>
                                                <span className='d-block'>{item.category}</span>
                                            </Col>
                                        </Row>
                                        <div className={aboutclientsStyles.test_div}>
                                            <p className={aboutclientsStyles.aboutclients_desc}>What They Said 🤗</p>
                                            <p>{item.text}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                                )}
                            </Slider>
                        </div>
                        <div className='d-lg-flex d-none align-items-lg-center justify-content-lg-between pt-3'>
                            <div>
                                <p className={aboutclientsStyles.aboutclients_desc}>
                                    {currentSlide + 1} of {clientsData.length}
                                </p>
                            </div>
                            <div>
                                <Button variant='dark' className={aboutclientsStyles.sliderarrowsbtn} onClick={previous}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                    </svg>
                                </Button>
                                <Button variant='dark' className={aboutclientsStyles.sliderarrowsbtn} onClick={next}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className='d-lg-none d-flex align-items-baseline justify-content-between pt-3'>
                            <Button variant='dark' className={aboutclientsStyles.sliderarrowsbtn} onClick={previous}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                </svg>
                            </Button>
                            <div>
                                <p className={aboutclientsStyles.aboutclients_desc}>
                                    {currentSlide + 1} / {clientsData.length}
                                </p>
                            </div>
                            <Button variant='dark' className={aboutclientsStyles.sliderarrowsbtn} onClick={next}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z" fill="white" />
                                </svg>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default about_clients