import React, { useState, useRef } from 'react'
import faqsStyles from '@/app/components/faqs.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';

const faqs = () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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

    const slidesData = [
        {
            id: 1,
            title: 'How do I search for properties on Estatein?',
            desc: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
        },
        {
            id: 2,
            title: 'What documents do I need to sell my property through Estatein?',
            desc: 'Find out about the necessary documentation for listing your property with us.',
        },
        {
            id: 3,
            title: 'How can I contact an Estatein agent?',
            desc: 'Discover the different ways you can get in touch with our experienced agents.',
        },
        {
            id: 4,
            title: 'How do I search for properties on Estatein?',
            desc: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
        },
        {
            id: 5,
            title: 'What documents do I need to sell my property through Estatein?',
            desc: 'Find out about the necessary documentation for listing your property with us.',
        },
        {
            id: 6,
            title: 'How can I contact an Estatein agent?',
            desc: 'Discover the different ways you can get in touch with our experienced agents.',
        },
    ]

    return (
        <section className='pb-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-between align-items-end'>
                            <div className={`${faqsStyles.secdesc} w-75`}>
                                <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_139_6492)">
                                        <path d="M12 24.0133C18.6274 24.0133 24 18.6407 24 12.0133C24 5.38585 18.6274 0.0133362 12 0.0133362C5.37258 0.0133362 0 5.38585 0 12.0133C0 18.6407 5.37258 24.0133 12 24.0133Z" fill="#666666" />
                                        <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                        <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                        <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                        <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                    </g>
                                    <g clipPath="url(#clip1_139_6492)">
                                        <path d="M35.9998 19.2079C39.9763 19.2079 43.1998 15.9844 43.1998 12.0079C43.1998 8.03149 39.9763 4.80798 35.9998 4.80798C32.0234 4.80798 28.7998 8.03149 28.7998 12.0079C28.7998 15.9844 32.0234 19.2079 35.9998 19.2079Z" fill="#333333" />
                                        <path d="M28.7996 26.4C32.7761 26.4 35.9996 23.1764 35.9996 19.2C35.9996 15.2235 32.7761 12 28.7996 12C24.8232 12 21.5996 15.2235 21.5996 19.2C21.5996 23.1764 24.8232 26.4 28.7996 26.4Z" fill="#141414" />
                                        <path d="M43.1995 26.4C47.176 26.4 50.3995 23.1764 50.3995 19.2C50.3995 15.2235 47.176 12 43.1995 12C39.2231 12 35.9995 15.2235 35.9995 19.2C35.9995 23.1764 39.2231 26.4 43.1995 26.4Z" fill="#141414" />
                                        <path d="M28.7996 12C32.7761 12 35.9996 8.77643 35.9996 4.79998C35.9996 0.823525 32.7761 -2.40002 28.7996 -2.40002C24.8232 -2.40002 21.5996 0.823525 21.5996 4.79998C21.5996 8.77643 24.8232 12 28.7996 12Z" fill="#141414" />
                                        <path d="M43.1995 12C47.176 12 50.3995 8.77643 50.3995 4.79998C50.3995 0.823525 47.176 -2.40002 43.1995 -2.40002C39.2231 -2.40002 35.9995 0.823525 35.9995 4.79998C35.9995 8.77643 39.2231 12 43.1995 12Z" fill="#141414" />
                                    </g>
                                    <g clipPath="url(#clip2_139_6492)">
                                        <path d="M51.36 15.3637C53.2157 15.3637 54.72 13.8594 54.72 12.0037C54.72 10.1481 53.2157 8.64377 51.36 8.64377C49.5043 8.64377 48 10.1481 48 12.0037C48 13.8594 49.5043 15.3637 51.36 15.3637Z" fill="#333333" />
                                        <path d="M48.0001 18.72C49.8558 18.72 51.3601 17.2157 51.3601 15.36C51.3601 13.5044 49.8558 12 48.0001 12C46.1445 12 44.6401 13.5044 44.6401 15.36C44.6401 17.2157 46.1445 18.72 48.0001 18.72Z" fill="#141414" />
                                        <path d="M54.7204 18.72C56.576 18.72 58.0804 17.2157 58.0804 15.36C58.0804 13.5044 56.576 12 54.7204 12C52.8647 12 51.3604 13.5044 51.3604 15.36C51.3604 17.2157 52.8647 18.72 54.7204 18.72Z" fill="#141414" />
                                        <path d="M48.0001 12C49.8558 12 51.3601 10.4957 51.3601 8.64003C51.3601 6.78435 49.8558 5.28003 48.0001 5.28003C46.1445 5.28003 44.6401 6.78435 44.6401 8.64003C44.6401 10.4957 46.1445 12 48.0001 12Z" fill="#141414" />
                                        <path d="M54.7204 12C56.576 12 58.0804 10.4957 58.0804 8.64003C58.0804 6.78435 56.576 5.28003 54.7204 5.28003C52.8647 5.28003 51.3604 6.78435 51.3604 8.64003C51.3604 10.4957 52.8647 12 54.7204 12Z" fill="#141414" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_139_6492">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_139_6492">
                                            <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.79999)" />
                                        </clipPath>
                                        <clipPath id="clip2_139_6492">
                                            <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h2 className='py-2'>Frequently Asked Questions</h2>
                                <p className={faqsStyles.featuredesctext}>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                            </div>
                            <div className='d-lg-block d-none'>
                                <Button variant="dark" className={faqsStyles.viewallbtn}>View All FAQ’s</Button>
                            </div>
                        </div>
                        <div className={`${faqsStyles['slider-container']} py-5`} id='clients-slider'>
                            <Slider {...settings} ref={slider => {
                                sliderRef = slider;
                            }}>
                                {slidesData.map((item, index) => <Card key={index} className={faqsStyles.slidercard}>
                                    <Card.Body>
                                        <div>
                                            <h5 className='mb-3'>{item.title}</h5>
                                            <p className='mb-3'>{item.desc}</p>
                                        </div>
                                        <div>
                                            <Button variant='dark' className={faqsStyles.readbtn}>Read More</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                )}
                            </Slider>
                        </div>
                        <div className='d-lg-flex d-none align-items-lg-center justify-content-lg-between pt-3'>
                            <div>
                                <p>
                                    {currentSlide + 1} / {slidesData.length}
                                </p>
                            </div>
                            <div>
                                <Button variant='dark' className={faqsStyles.sliderarrowsbtn} onClick={previous}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                    </svg>
                                </Button>
                                <Button variant='dark' className={faqsStyles.sliderarrowsbtn} onClick={next}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className='d-lg-none d-flex align-items-center justify-content-between pt-3'>
                            <div className='d-lg-none d-block'>
                                <Button variant="dark" className={faqsStyles.viewallbtn}>View All FAQ’s</Button>
                            </div>
                            <div className='d-flex align-items-baseline'>
                                <Button variant='dark' className={faqsStyles.sliderarrowsbtn} onClick={previous}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                    </svg>
                                </Button>
                                <div>
                                    <p>
                                        {currentSlide + 1} / {slidesData.length}
                                    </p>
                                </div>
                                <Button variant='dark' className={faqsStyles.sliderarrowsbtn} onClick={next}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default faqs