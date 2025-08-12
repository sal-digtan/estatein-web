import React from 'react'
import propertiesheroStyles from '@/app/components/properties_hero.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'

const properties_hero = () => {

    const selectData = [
        {
            id: 1,
            title: 'Location',
            options: ['One', 'Two', 'Three'],
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z" fill="#999999"/>
</svg>`
        },
        {
            id: 2,
            title: 'Property Type',
            options: ['One', 'Two', 'Three'],
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8388 3.08736C16.1632 2.9694 16.3305 2.61079 16.2125 2.2864C16.0946 1.962 15.736 1.79465 15.4116 1.91262L5.00031 5.69853V2.49999C5.00031 2.15481 4.72048 1.87499 4.37531 1.87499H3.12531C2.78013 1.87499 2.50031 2.15481 2.50031 2.49999V6.60763L1.66158 6.91262C1.33718 7.03058 1.16984 7.38918 1.2878 7.71358C1.40576 8.03797 1.76436 8.20532 2.08876 8.08736L15.8388 3.08736Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5161 9.26209L15.0003 4.72238V7.57363L18.3388 8.78762C18.6632 8.90558 18.8305 9.26418 18.7125 9.58858C18.5946 9.91297 18.236 10.0803 17.9116 9.96236L17.5002 9.81275V16.875H18.1253C18.4705 16.875 18.7503 17.1548 18.7503 17.5C18.7503 17.8452 18.4705 18.125 18.1253 18.125H1.87531C1.53013 18.125 1.25031 17.8452 1.25031 17.5C1.25031 17.1548 1.53013 16.875 1.87531 16.875H2.50031V9.26776L2.5161 9.26209ZM15.0003 16.875V8.90371L16.2502 9.35821V16.875H15.0003ZM7.50031 11.875C7.15513 11.875 6.87531 12.1548 6.87531 12.5V16.25C6.87531 16.5952 7.15513 16.875 7.50031 16.875H10.0003C10.3455 16.875 10.6253 16.5952 10.6253 16.25V12.5C10.6253 12.1548 10.3455 11.875 10.0003 11.875H7.50031Z" fill="#999999"/>
</svg>`
        },
        {
            id: 3,
            title: 'Pricing Range',
            options: ['One', 'Two', 'Three'],
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6.25C8.96447 6.25 8.125 7.08947 8.125 8.125C8.125 9.16053 8.96447 10 10 10C11.0355 10 11.875 9.16053 11.875 8.125C11.875 7.08947 11.0355 6.25 10 6.25Z" fill="#999999"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 4.0625C1.25 3.19956 1.94956 2.5 2.8125 2.5H17.1875C18.0504 2.5 18.75 3.19956 18.75 4.0625V12.1875C18.75 13.0504 18.0504 13.75 17.1875 13.75H2.8125C1.94955 13.75 1.25 13.0504 1.25 12.1875V4.0625ZM6.875 8.125C6.875 6.39911 8.27411 5 10 5C11.7259 5 13.125 6.39911 13.125 8.125C13.125 9.85089 11.7259 11.25 10 11.25C8.27411 11.25 6.875 9.85089 6.875 8.125ZM15.625 7.5C15.2798 7.5 15 7.77982 15 8.125V8.13125C15 8.47643 15.2798 8.75625 15.625 8.75625H15.6313C15.9764 8.75625 16.2563 8.47643 16.2563 8.13125V8.125C16.2563 7.77982 15.9764 7.5 15.6313 7.5H15.625ZM3.75 8.125C3.75 7.77982 4.02982 7.5 4.375 7.5H4.38125C4.72643 7.5 5.00625 7.77982 5.00625 8.125V8.13125C5.00625 8.47643 4.72643 8.75625 4.38125 8.75625H4.375C4.02982 8.75625 3.75 8.47643 3.75 8.13125V8.125Z" fill="#999999"/>
<path d="M1.875 15C1.52982 15 1.25 15.2798 1.25 15.625C1.25 15.9702 1.52982 16.25 1.875 16.25C6.37504 16.25 10.7335 16.8518 14.8748 17.9791C15.867 18.2491 16.875 17.514 16.875 16.4626V15.625C16.875 15.2798 16.5952 15 16.25 15H1.875Z" fill="#999999"/>
</svg>`,
        },
        {
            id: 4,
            title: 'Property Size',
            options: ['One', 'Two', 'Three'],
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3149 1.33514C10.1203 1.22162 9.87968 1.22162 9.68508 1.33514L2.5 5.52643L10 9.90143L17.5 5.52643L10.3149 1.33514Z" fill="#999999"/>
<path d="M18.125 6.60898L10.625 10.984V18.484L17.8149 14.2899C18.0069 14.1779 18.125 13.9723 18.125 13.75V6.60898Z" fill="#999999"/>
<path d="M9.375 18.484V10.984L1.875 6.60898V13.75C1.875 13.9723 1.99307 14.1779 2.18508 14.2899L9.375 18.484Z" fill="#999999"/>
</svg>`,
        },
        {
            id: 5,
            title: 'Build Year',
            options: ['One', 'Two', 'Three'],
            icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.875C5.97018 1.875 6.25 2.15482 6.25 2.5V3.75H13.75V2.5C13.75 2.15482 14.0298 1.875 14.375 1.875C14.7202 1.875 15 2.15482 15 2.5V3.75H15.625C17.0057 3.75 18.125 4.86929 18.125 6.25V15.625C18.125 17.0057 17.0057 18.125 15.625 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.25C1.875 4.86929 2.99429 3.75 4.375 3.75H5V2.5C5 2.15482 5.27982 1.875 5.625 1.875ZM16.875 9.375C16.875 8.68464 16.3154 8.125 15.625 8.125H4.375C3.68464 8.125 3.125 8.68464 3.125 9.375V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H15.625C16.3154 16.875 16.875 16.3154 16.875 15.625V9.375Z" fill="#999999"/>
</svg>`,
        },
    ]

    return (
        <section className={`${propertiesheroStyles.properties_herobg} py-5`}>
            <Container>
                <Row>
                    <Col>
                        <div className='mb-5'>
                            <h2 className={propertiesheroStyles.properties_hero_title}>Find Your Dream Property</h2>
                            <p className={propertiesheroStyles.properties_hero_desc}>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                        </div>
                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={10}>
                                    <InputGroup className={`${propertiesheroStyles.formcontrol_container} mb-3`}>
                                        <Form.Control
                                            placeholder="Search For A Property"
                                            aria-label="Search For A Property"
                                            aria-describedby="basic-addon2"
                                            className={propertiesheroStyles.formcontrol}
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" className={`${propertiesheroStyles.findbtn} border-0`}>
                                            <span>
                                                <svg className='me-1' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 18L13.1694 13.6694M13.1694 13.6694C14.3004 12.5384 15 10.9759 15 9.25C15 5.79822 12.2018 3 8.75 3C5.29822 3 2.5 5.79822 2.5 9.25C2.5 12.7018 5.29822 15.5 8.75 15.5C10.4759 15.5 12.0384 14.8004 13.1694 13.6694Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                Find Property
                                            </span>
                                        </Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </div>
                        <div className={propertiesheroStyles.select_container}>
                            {selectData.map((item, index) =>
                                <div key={index}>
                                    <InputGroup className={`${propertiesheroStyles.formselect_container} mb-3`}>
                                        <InputGroup.Text id="basic-addon1" className={`${propertiesheroStyles.formselect} border-0`}>
                                            <Image src={`data:image/svg+xml;utf8,${encodeURIComponent(item.icon)}`} alt={item.id} width={20} height={20} />
                                        </InputGroup.Text>
                                        <Form.Select aria-label="Default select example" className={propertiesheroStyles.formselect}>
                                            <option>{item.title}</option>
                                            {item.options.map((item, index) => <option key={index}>{item}</option>)}
                                        </Form.Select>
                                    </InputGroup>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default properties_hero