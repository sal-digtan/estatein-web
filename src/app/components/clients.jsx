import React, { useState, useRef } from 'react'
import clientsStyles from '@/app/components/clients.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import clientsimg1 from '../../../public/clientsimg1.png'
import clientsimg2 from '../../../public/clientsimg2.png'
import clientsimg3 from '../../../public/clientsimg3.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const clients = () => {

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
            title: 'Exceptional Service!',
            desc: `Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!`,
            img: clientsimg1,
            name: 'Wade Warren',
            location: 'USA, California',
        },
        {
            id: 2,
            title: 'Efficient and Reliable',
            desc: `Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.`,
            img: clientsimg2,
            name: 'Emelie Thomson',
            location: 'USA, Florida',
        },
        {
            id: 3,
            title: 'Trusted Advisors',
            desc: `The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!`,
            img: clientsimg3,
            name: 'John Mans',
            location: 'USA, Nevada',
        },
        {
            id: 4,
            title: 'Exceptional Service!',
            desc: `Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!`,
            img: clientsimg1,
            name: 'Wade Warren',
            location: 'USA, California',
        },
        {
            id: 5,
            title: 'Efficient and Reliable',
            desc: `Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.`,
            img: clientsimg2,
            name: 'Emelie Thomson',
            location: 'USA, Florida',
        },
        {
            id: 6,
            title: 'Trusted Advisors',
            desc: `The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!`,
            img: clientsimg3,
            name: 'John Mans',
            location: 'USA, Nevada',
        },
    ]

    return (
        <section className='pb-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-between align-items-end'>
                            <div className={`${clientsStyles.secdesc} w-75`}>
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
                                <h2 className='py-2'>What Our Clients Say</h2>
                                <p className={clientsStyles.featuredesctext}>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                            </div>
                            <div className='d-lg-block d-none'>
                                <Button variant="dark" className={clientsStyles.viewallbtn}>View All Testimonials</Button>
                            </div>
                        </div>
                        <div className={`${clientsStyles['slider-container']} py-5`} id='clients-slider'>
                            <Slider {...settings} ref={slider => {
                                sliderRef = slider;
                            }}>
                                {slidesData.map((item, index) => <Card key={index} className={clientsStyles.slidercard}>
                                    <Card.Body>
                                        <div className='mb-4'>
                                            <svg width="222" height="36" viewBox="0 0 222 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="37" height="35" rx="17.5" fill="#1A1A1A" />
                                                <rect x="0.5" y="0.5" width="37" height="35" rx="17.5" stroke="#262626" />
                                                <path d="M18.1586 9.30996C18.5522 8.69719 19.4478 8.6972 19.8414 9.30996L22.1986 12.9799C22.334 13.1907 22.5436 13.343 22.786 13.4067L27.0047 14.5144C27.7091 14.6994 27.9859 15.5512 27.5247 16.1148L24.7628 19.4907C24.6042 19.6847 24.5241 19.9311 24.5385 20.1813L24.7886 24.5358C24.8303 25.2629 24.1058 25.7893 23.4272 25.5249L19.363 23.9415C19.1296 23.8505 18.8704 23.8505 18.637 23.9415L14.5728 25.5249C13.8942 25.7893 13.1697 25.2629 13.2114 24.5358L13.4615 20.1813C13.4759 19.9311 13.3958 19.6847 13.2372 19.4907L10.4753 16.1148C10.0141 15.5512 10.2909 14.6994 10.9953 14.5144L15.214 13.4067C15.4564 13.343 15.666 13.1907 15.8014 12.9799L18.1586 9.30996Z" fill="#FFE600" />
                                                <rect x="46.5" y="0.5" width="37" height="35" rx="17.5" fill="#1A1A1A" />
                                                <rect x="46.5" y="0.5" width="37" height="35" rx="17.5" stroke="#262626" />
                                                <path d="M64.1586 9.30996C64.5522 8.69719 65.4478 8.6972 65.8414 9.30996L68.1986 12.9799C68.334 13.1907 68.5436 13.343 68.786 13.4067L73.0047 14.5144C73.7091 14.6994 73.9859 15.5512 73.5247 16.1148L70.7628 19.4907C70.6042 19.6847 70.5241 19.9311 70.5385 20.1813L70.7886 24.5358C70.8303 25.2629 70.1058 25.7893 69.4272 25.5249L65.363 23.9415C65.1296 23.8505 64.8704 23.8505 64.637 23.9415L60.5728 25.5249C59.8942 25.7893 59.1697 25.2629 59.2114 24.5358L59.4615 20.1813C59.4759 19.9311 59.3958 19.6847 59.2372 19.4907L56.4753 16.1148C56.0141 15.5512 56.2909 14.6994 56.9953 14.5144L61.214 13.4067C61.4564 13.343 61.666 13.1907 61.8014 12.9799L64.1586 9.30996Z" fill="#FFE600" />
                                                <rect x="92.5" y="0.5" width="37" height="35" rx="17.5" fill="#1A1A1A" />
                                                <rect x="92.5" y="0.5" width="37" height="35" rx="17.5" stroke="#262626" />
                                                <path d="M110.159 9.30996C110.552 8.69719 111.448 8.6972 111.841 9.30996L114.199 12.9799C114.334 13.1907 114.544 13.343 114.786 13.4067L119.005 14.5144C119.709 14.6994 119.986 15.5512 119.525 16.1148L116.763 19.4907C116.604 19.6847 116.524 19.9311 116.538 20.1813L116.789 24.5358C116.83 25.2629 116.106 25.7893 115.427 25.5249L111.363 23.9415C111.13 23.8505 110.87 23.8505 110.637 23.9415L106.573 25.5249C105.894 25.7893 105.17 25.2629 105.211 24.5358L105.462 20.1813C105.476 19.9311 105.396 19.6847 105.237 19.4907L102.475 16.1148C102.014 15.5512 102.291 14.6994 102.995 14.5144L107.214 13.4067C107.456 13.343 107.666 13.1907 107.801 12.9799L110.159 9.30996Z" fill="#FFE600" />
                                                <rect x="138.5" y="0.5" width="37" height="35" rx="17.5" fill="#1A1A1A" />
                                                <rect x="138.5" y="0.5" width="37" height="35" rx="17.5" stroke="#262626" />
                                                <path d="M156.159 9.30996C156.552 8.69719 157.448 8.6972 157.841 9.30996L160.199 12.9799C160.334 13.1907 160.544 13.343 160.786 13.4067L165.005 14.5144C165.709 14.6994 165.986 15.5512 165.525 16.1148L162.763 19.4907C162.604 19.6847 162.524 19.9311 162.538 20.1813L162.789 24.5358C162.83 25.2629 162.106 25.7893 161.427 25.5249L157.363 23.9415C157.13 23.8505 156.87 23.8505 156.637 23.9415L152.573 25.5249C151.894 25.7893 151.17 25.2629 151.211 24.5358L151.462 20.1813C151.476 19.9311 151.396 19.6847 151.237 19.4907L148.475 16.1148C148.014 15.5512 148.291 14.6994 148.995 14.5144L153.214 13.4067C153.456 13.343 153.666 13.1907 153.801 12.9799L156.159 9.30996Z" fill="#FFE600" />
                                                <rect x="184.5" y="0.5" width="37" height="35" rx="17.5" fill="#1A1A1A" />
                                                <rect x="184.5" y="0.5" width="37" height="35" rx="17.5" stroke="#262626" />
                                                <path d="M202.159 9.30996C202.552 8.69719 203.448 8.6972 203.841 9.30996L206.199 12.9799C206.334 13.1907 206.544 13.343 206.786 13.4067L211.005 14.5144C211.709 14.6994 211.986 15.5512 211.525 16.1148L208.763 19.4907C208.604 19.6847 208.524 19.9311 208.538 20.1813L208.789 24.5358C208.83 25.2629 208.106 25.7893 207.427 25.5249L203.363 23.9415C203.13 23.8505 202.87 23.8505 202.637 23.9415L198.573 25.5249C197.894 25.7893 197.17 25.2629 197.211 24.5358L197.462 20.1813C197.476 19.9311 197.396 19.6847 197.237 19.4907L194.475 16.1148C194.014 15.5512 194.291 14.6994 194.995 14.5144L199.214 13.4067C199.456 13.343 199.666 13.1907 199.801 12.9799L202.159 9.30996Z" fill="#FFE600" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <Image src={item.img} width={50} height={50} className='img-fluid me-2' alt={item.img} />
                                            <div>
                                                <span className='d-block'>{item.name}</span>
                                                <span className='d-block'>{item.location}</span>
                                            </div>
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
                                <Button variant='dark' className={clientsStyles.sliderarrowsbtn} onClick={previous}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                    </svg>
                                </Button>
                                <Button variant='dark' className={clientsStyles.sliderarrowsbtn} onClick={next}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z" fill="white" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className='d-lg-none d-flex align-items-center justify-content-between pt-3'>
                            <div className='d-lg-none d-block'>
                                <Button variant="dark" className={clientsStyles.viewallbtn}>View All Testimonials</Button>
                            </div>
                            <div className='d-flex align-items-baseline'>
                                <Button variant='dark' className={clientsStyles.sliderarrowsbtn} onClick={previous}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4004 12C20.4004 12.497 19.9974 12.9 19.5004 12.9L6.73489 12.9L11.7242 17.6512C12.0825 17.9958 12.0937 18.5655 11.7491 18.9238C11.4046 19.2821 10.8349 19.2933 10.4766 18.9487L3.87659 12.6487C3.70012 12.4791 3.60039 12.2448 3.60039 12C3.60039 11.7552 3.70012 11.5209 3.87659 11.3512L10.4766 5.05124C10.8349 4.70672 11.4046 4.7179 11.7491 5.07619C12.0937 5.43449 12.0825 6.00422 11.7242 6.34874L6.73489 11.1L19.5004 11.1C19.9974 11.1 20.4004 11.5029 20.4004 12Z" fill="white" />
                                    </svg>
                                </Button>
                                <div>
                                    <p>
                                        {currentSlide + 1} / {slidesData.length}
                                    </p>
                                </div>
                                <Button variant='dark' className={clientsStyles.sliderarrowsbtn} onClick={next}>
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

export default clients