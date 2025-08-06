import React from 'react'
import footerStyles from '@/app/components/footer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import logo from '../../../public/estatein-logo.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const footer = () => {

    const footerLinks = [
        {
            title: 'Home',
            links: [
                { text: 'Hero Section', href: '' },
                { text: 'Features', href: '' },
                { text: 'Properties', href: '' },
                { text: 'Testimonials', href: '' },
                { text: 'FAQ’s', href: '' },
            ],
        },
        {
            title: 'About Us',
            links: [
                { text: 'Our Story', href: '' },
                { text: 'Our Works', href: '' },
                { text: 'How It Works', href: '' },
                { text: 'Our Team', href: '' },
                { text: 'Our Clients', href: '' },
            ],
        },
        {
            title: 'Properties',
            links: [
                { text: 'Portfolio', href: '' },
                { text: 'Categories', href: '' },
            ],
        },
        {
            title: 'Services',
            links: [
                { text: 'Valuation Mastery', href: '' },
                { text: 'Strategic Marketing', href: '' },
                { text: 'Negotiation Wizardry', href: '' },
                { text: 'Closing Success', href: '' },
                { text: 'Property Management', href: '' },
            ],
        },
        {
            title: 'Contact Us',
            links: [
                { text: 'Contact Form', href: '' },
                { text: 'Our Offices', href: '' },
            ],
        },
    ];

    return (
        <div>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col>
                            <div className={footerStyles.footercontainer}>
                                <div>
                                    <Image src={logo} width='auto' height='auto' alt='estatein-logo' className='img-fluid mb-4' />
                                    <Form>
                                        <InputGroup className={`${footerStyles.formbg} mb-3`}>
                                            <Form.Control
                                                placeholder="Enter Your Email"
                                                aria-label="Enter Your Email"
                                                aria-describedby="basic-addon2"
                                                className={`${footerStyles.formcontrol} border-0 bg-transparent`}
                                            />
                                            <Button variant="outline-dark" id="button-addon2" className='border-0 bg-transparent p-1'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="white" />
                                                    <path opacity="0.4" d="M9.45139 19.1423C9.74339 19.4353 9.74339 19.9103 9.45139 20.2033L8.08539 21.5683C7.93939 21.7153 7.74739 21.7883 7.55539 21.7883C7.36339 21.7883 7.17139 21.7153 7.02539 21.5683C6.73239 21.2753 6.73239 20.8013 7.02539 20.5083L8.39039 19.1423C8.68339 18.8503 9.15839 18.8503 9.45139 19.1423ZM8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543ZM4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619Z" fill="white" />
                                                </svg>
                                            </Button>
                                        </InputGroup>
                                    </Form>
                                </div>
                                {footerLinks.map((item, index) =>
                                    <div key={index}>
                                        <h5 className={`${footerStyles.footerlinkstitle} mb-4`}>{item.title}</h5>
                                        {item.links.map((item, index) =>
                                            <ul className='list-unstyled' key={index}>
                                                <li className='pb-2'><a href="" className='text-decoration-none text-white'>{item.text}</a></li>
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={footerStyles.copyrightcon}>
                <Container>
                    <div className='d-flex justify-content-between flex-lg-row flex-md-row flex-column align-items-center'>
                        <div className='mb-lg-0 mb-md-0 mb-2 order-lg-1 order-2'>
                            <span>@2023 Estatein. All Rights Reserved.</span>
                            <a href="" className='text-decoration-none text-white ms-lg-4 ms-md-3 d-lg-inline d-md-inline d-none'>Terms & Conditions</a>
                        </div>
                        <div className='d-lg-none d-md-none d-block order-lg-1 order-2'>
                            <a href="" className='text-decoration-none text-white'>Terms & Conditions</a>
                        </div>
                        <div className='mb-lg-0 mb-md-0 mb-3 order-1 order-lg-2 order-md-2'>
                            <span className={footerStyles.socialiconbg}>
                                <a href="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1203 3.32002H15.0003V0.14003C14.0901 0.0453769 13.1755 -0.00135428 12.2603 2.98641e-05C9.54034 2.98641e-05 7.68035 1.66003 7.68035 4.70002V7.32002H4.61035V10.88H7.68035V20H11.3603V10.88H14.4203L14.8803 7.32002H11.3603V5.05002C11.3603 4.00002 11.6403 3.32002 13.1203 3.32002Z" fill="white" />
                                    </svg>
                                </a>
                            </span>
                            <span className={footerStyles.socialiconbg}>
                                <a href="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0585 1.66662H2.9418C2.78311 1.66442 2.62555 1.69349 2.4781 1.75219C2.33066 1.81089 2.19622 1.89805 2.08246 2.00871C1.96871 2.11937 1.87786 2.25136 1.81512 2.39713C1.75238 2.5429 1.71897 2.6996 1.7168 2.85829V17.1416C1.71897 17.3003 1.75238 17.457 1.81512 17.6028C1.87786 17.7486 1.96871 17.8805 2.08246 17.9912C2.19622 18.1019 2.33066 18.189 2.4781 18.2477C2.62555 18.3064 2.78311 18.3355 2.9418 18.3333H17.0585C17.2171 18.3355 17.3747 18.3064 17.5222 18.2477C17.6696 18.189 17.804 18.1019 17.9178 17.9912C18.0316 17.8805 18.1224 17.7486 18.1851 17.6028C18.2479 17.457 18.2813 17.3003 18.2835 17.1416V2.85829C18.2813 2.6996 18.2479 2.5429 18.1851 2.39713C18.1224 2.25136 18.0316 2.11937 17.9178 2.00871C17.804 1.89805 17.6696 1.81089 17.5222 1.75219C17.3747 1.69349 17.2171 1.66442 17.0585 1.66662ZM6.7418 15.6166H4.2418V8.11662H6.7418V15.6166ZM5.4918 7.06662C5.14702 7.06662 4.81636 6.92966 4.57256 6.68586C4.32876 6.44206 4.1918 6.1114 4.1918 5.76662C4.1918 5.42184 4.32876 5.09118 4.57256 4.84738C4.81636 4.60358 5.14702 4.46662 5.4918 4.46662C5.67488 4.44586 5.86028 4.464 6.03586 4.51986C6.21144 4.57571 6.37325 4.66803 6.51068 4.79076C6.64811 4.91348 6.75807 5.06385 6.83336 5.23202C6.90864 5.40019 6.94756 5.58237 6.94756 5.76662C6.94756 5.95087 6.90864 6.13305 6.83336 6.30122C6.75807 6.46939 6.64811 6.61976 6.51068 6.74249C6.37325 6.86521 6.21144 6.95753 6.03586 7.01338C5.86028 7.06924 5.67488 7.08738 5.4918 7.06662ZM15.7585 15.6166H13.2585V11.5916C13.2585 10.5833 12.9001 9.92495 11.9918 9.92495C11.7107 9.92701 11.437 10.0152 11.2075 10.1776C10.978 10.34 10.8039 10.5688 10.7085 10.8333C10.6433 11.0292 10.615 11.2354 10.6251 11.4416V15.6083H8.12513C8.12513 15.6083 8.12513 8.79162 8.12513 8.10829H10.6251V9.16662C10.8522 8.77254 11.1826 8.44789 11.5805 8.22762C11.9784 8.00736 12.4289 7.89983 12.8835 7.91662C14.5501 7.91662 15.7585 8.99162 15.7585 11.3V15.6166Z" fill="white" />
                                    </svg>
                                </a>
                            </span>
                            <span className={footerStyles.socialiconbg}>
                                <a href="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3337 4.83326C17.7073 5.10501 17.0448 5.28465 16.367 5.3666C17.0821 4.93936 17.6181 4.26725 17.8753 3.47493C17.2033 3.87498 16.4676 4.15684 15.7003 4.30826C15.1874 3.75207 14.5045 3.38184 13.7585 3.25564C13.0125 3.12944 12.2458 3.2544 11.5785 3.61092C10.9112 3.96745 10.3811 4.53537 10.0714 5.22563C9.76162 5.91588 9.68974 6.68942 9.86699 7.42493C8.50818 7.3562 7.17903 7.00239 5.96587 6.38648C4.75272 5.77057 3.6827 4.90634 2.82533 3.84993C2.52461 4.37507 2.36659 4.96978 2.36699 5.57493C2.36593 6.13692 2.50384 6.69044 2.76845 7.18623C3.03307 7.68202 3.41617 8.10469 3.88366 8.4166C3.34031 8.40181 2.80856 8.25601 2.33366 7.9916V8.03326C2.33773 8.82067 2.61365 9.58251 3.11475 10.1899C3.61585 10.7973 4.31137 11.213 5.08366 11.3666C4.78637 11.4571 4.47772 11.5048 4.16699 11.5083C3.9519 11.5058 3.73734 11.4862 3.52533 11.4499C3.74525 12.1273 4.17084 12.7192 4.74289 13.1434C5.31493 13.5676 6.00497 13.8029 6.71699 13.8166C5.51466 14.7627 4.03023 15.279 2.50033 15.2833C2.22177 15.2842 1.94344 15.2675 1.66699 15.2333C3.22902 16.2418 5.04934 16.7772 6.90866 16.7749C8.19174 16.7883 9.4646 16.5458 10.6529 16.0617C11.8412 15.5775 12.9212 14.8615 13.8297 13.9553C14.7381 13.0492 15.457 11.9711 15.9441 10.784C16.4313 9.59695 16.677 8.3247 16.667 7.0416C16.667 6.89993 16.667 6.74993 16.667 6.59993C17.3209 6.11227 17.8849 5.51445 18.3337 4.83326Z" fill="white" />
                                    </svg>
                                </a>
                            </span>
                            <span className={footerStyles.socialiconbg}>
                                <a href="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1669 8.09165C19.2081 6.89886 18.9472 5.715 18.4085 4.64999C18.043 4.21299 17.5358 3.91808 16.9752 3.81665C14.6565 3.60626 12.3281 3.52002 10.0002 3.55832C7.68072 3.51829 5.36078 3.60174 3.05019 3.80832C2.59337 3.89142 2.17062 4.10569 1.83352 4.42499C1.08352 5.11665 1.00019 6.29999 0.916852 7.29999C0.795945 9.09796 0.795945 10.902 0.916852 12.7C0.94096 13.2628 1.02476 13.8215 1.16685 14.3667C1.26733 14.7875 1.47062 15.1769 1.75852 15.5C2.09791 15.8362 2.53051 16.0627 3.00019 16.15C4.79678 16.3718 6.60703 16.4637 8.41685 16.425C11.3335 16.4667 13.8919 16.425 16.9169 16.1917C17.3981 16.1097 17.8428 15.8829 18.1919 15.5417C18.4252 15.3082 18.5994 15.0226 18.7002 14.7083C18.9982 13.7938 19.1446 12.8367 19.1335 11.875C19.1669 11.4083 19.1669 8.59165 19.1669 8.09165ZM8.11685 12.375V7.21665L13.0502 9.80832C11.6669 10.575 9.84185 11.4417 8.11685 12.375Z" fill="white" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default footer