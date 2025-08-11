import React from 'react'
import teamStyles from '@/app/components/team.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamimg1 from '../../../public/teamimg1.png'
import teamimg2 from '../../../public/teamimg2.png'
import teamimg3 from '../../../public/teamimg3.png'
import teamimg4 from '../../../public/teamimg4.png'
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const team = () => {

    const teamData = [
        {
            id: 1,
            img: teamimg1,
            title: 'Max Mitchell',
            text: 'Founder',
        },
        {
            id: 2,
            img: teamimg2,
            title: 'Sarah Johnson',
            text: 'Chief Real Estate Officer',
        },
        {
            id: 3,
            img: teamimg3,
            title: 'David Brown',
            text: 'Head of Property Management',
        },
        {
            id: 4,
            img: teamimg4,
            title: 'Michael Turner',
            text: 'Legal Counsel',
        },
    ]

    return (
        <section className='pb-5'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='mb-5'>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_181_3404)">
                                    <path d="M12 24.0132C18.6274 24.0132 24 18.6407 24 12.0132C24 5.38582 18.6274 0.0133057 12 0.0133057C5.37258 0.0133057 0 5.38582 0 12.0132C0 18.6407 5.37258 24.0132 12 24.0132Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_181_3404)">
                                    <path d="M35.9998 19.2081C39.9763 19.2081 43.1998 15.9845 43.1998 12.0081C43.1998 8.03162 39.9763 4.80811 35.9998 4.80811C32.0234 4.80811 28.7998 8.03162 28.7998 12.0081C28.7998 15.9845 32.0234 19.2081 35.9998 19.2081Z" fill="#333333" />
                                    <path d="M28.7996 26.4001C32.7761 26.4001 35.9996 23.1766 35.9996 19.2001C35.9996 15.2237 32.7761 12.0001 28.7996 12.0001C24.8232 12.0001 21.5996 15.2237 21.5996 19.2001C21.5996 23.1766 24.8232 26.4001 28.7996 26.4001Z" fill="#141414" />
                                    <path d="M43.2 26.4001C47.1764 26.4001 50.4 23.1766 50.4 19.2001C50.4 15.2237 47.1764 12.0001 43.2 12.0001C39.2235 12.0001 36 15.2237 36 19.2001C36 23.1766 39.2235 26.4001 43.2 26.4001Z" fill="#141414" />
                                    <path d="M28.7996 12.0001C32.7761 12.0001 35.9996 8.77655 35.9996 4.8001C35.9996 0.823647 32.7761 -2.3999 28.7996 -2.3999C24.8232 -2.3999 21.5996 0.823647 21.5996 4.8001C21.5996 8.77655 24.8232 12.0001 28.7996 12.0001Z" fill="#141414" />
                                    <path d="M43.2 12.0001C47.1764 12.0001 50.4 8.77655 50.4 4.8001C50.4 0.823647 47.1764 -2.3999 43.2 -2.3999C39.2235 -2.3999 36 0.823647 36 4.8001C36 8.77655 39.2235 12.0001 43.2 12.0001Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_181_3404)">
                                    <path d="M51.36 15.3638C53.2157 15.3638 54.72 13.8595 54.72 12.0038C54.72 10.1481 53.2157 8.6438 51.36 8.6438C49.5043 8.6438 48 10.1481 48 12.0038C48 13.8595 49.5043 15.3638 51.36 15.3638Z" fill="#333333" />
                                    <path d="M47.9996 18.72C49.8553 18.72 51.3596 17.2157 51.3596 15.36C51.3596 13.5043 49.8553 12 47.9996 12C46.144 12 44.6396 13.5043 44.6396 15.36C44.6396 17.2157 46.144 18.72 47.9996 18.72Z" fill="#141414" />
                                    <path d="M54.7194 18.72C56.5751 18.72 58.0794 17.2157 58.0794 15.36C58.0794 13.5043 56.5751 12 54.7194 12C52.8637 12 51.3594 13.5043 51.3594 15.36C51.3594 17.2157 52.8637 18.72 54.7194 18.72Z" fill="#141414" />
                                    <path d="M47.9996 12C49.8553 12 51.3596 10.4957 51.3596 8.64003C51.3596 6.78435 49.8553 5.28003 47.9996 5.28003C46.144 5.28003 44.6396 6.78435 44.6396 8.64003C44.6396 10.4957 46.144 12 47.9996 12Z" fill="#141414" />
                                    <path d="M54.7194 12C56.5751 12 58.0794 10.4957 58.0794 8.64003C58.0794 6.78435 56.5751 5.28003 54.7194 5.28003C52.8637 5.28003 51.3594 6.78435 51.3594 8.64003C51.3594 10.4957 52.8637 12 54.7194 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_181_3404">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_181_3404">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.7998 4.80005)" />
                                    </clipPath>
                                    <clipPath id="clip2_181_3404">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={teamStyles.team_title}>Meet the Estatein Team</h2>
                                <p className={teamStyles.team_desc}>At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
                            </div>
                        </div>
                    </Col>
                    {teamData.map((item, index) =>
                        <Col lg={3} md={6} className='mb-lg-0 mb-3' key={index}>
                            <Card className={teamStyles.team_card}>
                                <Card.Body>
                                    <div className='position-relative'>
                                        <Image src={item.img} width='100%' height='100%' alt={item.title} className={teamStyles['full-width-image']} />
                                        <div className='position-absolute top-100 start-50 translate-middle'>
                                            <Button variant="dark" className={teamStyles.social_btn}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z" fill="white" />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='pt-5 text-center'>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text className={teamStyles.team_desc}>{item.text}</Card.Text>
                                    </div>
                                    <div className='pt-3'>
                                        <InputGroup className={`${teamStyles.formcontrol_container} mb-3`}>
                                            <Form.Control
                                                placeholder="Say Hello 👋"
                                                aria-label="Say Hello 👋"
                                                aria-describedby="basic-addon2"
                                                className={`${teamStyles.formcontrol} border-0 me-1`}
                                            />
                                            <Button variant="outline-secondary" id="button-addon2" className={`${teamStyles.form_btn} border-0`}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.8565 2.14854C17.4398 1.72271 16.8232 1.56521 16.2482 1.73187L2.83984 5.60604C2.23318 5.77437 1.80318 6.25521 1.68734 6.86521C1.56901 7.48687 1.98234 8.27687 2.52234 8.60687L6.71484 11.1669C7.14484 11.4302 7.69984 11.3644 8.05568 11.0077L12.8565 6.20687C13.0982 5.95604 13.4982 5.95604 13.7398 6.20687C13.9815 6.44771 13.9815 6.84021 13.7398 7.09021L8.93068 11.891C8.57401 12.2477 8.50734 12.801 8.76984 13.2319L11.3315 17.4402C11.6315 17.9394 12.1482 18.2235 12.7148 18.2235C12.7815 18.2235 12.8565 18.2235 12.9232 18.2144C13.5732 18.1319 14.0898 17.6894 14.2815 17.0644L18.2565 3.75687C18.4315 3.19021 18.2732 2.57354 17.8565 2.14854Z" fill="white" />
                                                    <path opacity="0.4" d="M7.87697 15.9519C8.12031 16.196 8.12031 16.5919 7.87697 16.836L6.73864 17.9735C6.61697 18.096 6.45697 18.1569 6.29697 18.1569C6.13697 18.1569 5.97697 18.096 5.85531 17.9735C5.61114 17.7294 5.61114 17.3344 5.85531 17.0902L6.99281 15.9519C7.23697 15.7085 7.63281 15.7085 7.87697 15.9519ZM7.22389 12.7952C7.46722 13.0394 7.46722 13.4352 7.22389 13.6794L6.08556 14.8169C5.96389 14.9394 5.80389 15.0002 5.64389 15.0002C5.48389 15.0002 5.32389 14.9394 5.20222 14.8169C4.95806 14.5727 4.95806 14.1777 5.20222 13.9335L6.33972 12.7952C6.58389 12.5519 6.97972 12.5519 7.22389 12.7952ZM4.08956 11.8015C4.33289 12.0457 4.33289 12.4415 4.08956 12.6857L2.95122 13.8232C2.82956 13.9457 2.66956 14.0065 2.50956 14.0065C2.34956 14.0065 2.18956 13.9457 2.06789 13.8232C1.82372 13.579 1.82372 13.184 2.06789 12.9399L3.20539 11.8015C3.44956 11.5582 3.84539 11.5582 4.08956 11.8015Z" fill="white" />
                                                </svg>
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default team