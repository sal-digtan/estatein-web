import React from 'react'
import propertiesformStyles from '@/app/components/properties_form.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const properties_form = () => {

    const formFields = [
        {
            id: 1,
            label: 'First Name',
            placeholder: 'Enter First Name',
            type: 'text',
        },
        {
            id: 2,
            label: 'Last Name',
            placeholder: 'Enter Last Name',
            type: 'text',
        },
        {
            id: 3,
            label: 'Email',
            placeholder: 'Enter your Email',
            type: 'email',
        },
        {
            id: 4,
            label: 'Phone',
            placeholder: 'Enter Phone Number',
            type: 'text',
        },
        {
            id: 5,
            label: 'Preferred Location',
            placeholder: 'Select Location',
            type: 'text',
        },
        {
            id: 6,
            label: 'Property Type',
            placeholder: 'Select Property Type',
            type: 'text',
        },
        {
            id: 7,
            label: 'No. of Bathrooms',
            placeholder: 'Select no. of Bathrooms',
            type: 'text',
        },
        {
            id: 8,
            label: 'No. of Bedrooms',
            placeholder: 'Select no. of Bedrooms',
            type: 'text',
        },
        {
            id: 9,
            label: 'Budget',
            placeholder: 'Select Budget',
            type: 'text',
        },
        {
            id: 10,
            label: 'Preferred Contact Method',
            placeholder: 'Enter Your Number',
            type: 'text',
        },
        {
            id: 11,
            label: '',
            placeholder: 'Enter Your Email',
            type: 'email',
        },
        {
            id: 12,
            label: 'Message',
            placeholder: 'Enter your Message here..',
            type: 'textarea',
        },
    ]

    return (
        <section className='py-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='mb-4'>
                            <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_150_13539)">
                                    <path d="M12 24.0133C18.6274 24.0133 24 18.6407 24 12.0133C24 5.38585 18.6274 0.0133362 12 0.0133362C5.37258 0.0133362 0 5.38585 0 12.0133C0 18.6407 5.37258 24.0133 12 24.0133Z" fill="#666666" />
                                    <path d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z" fill="#141414" />
                                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#141414" />
                                    <path d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z" fill="#141414" />
                                    <path d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip1_150_13539)">
                                    <path d="M36.0008 19.2079C39.9772 19.2079 43.2008 15.9844 43.2008 12.0079C43.2008 8.03149 39.9772 4.80798 36.0008 4.80798C32.0243 4.80798 28.8008 8.03149 28.8008 12.0079C28.8008 15.9844 32.0243 19.2079 36.0008 19.2079Z" fill="#333333" />
                                    <path d="M28.8016 26.4C32.778 26.4 36.0016 23.1764 36.0016 19.2C36.0016 15.2235 32.778 12 28.8016 12C24.8251 12 21.6016 15.2235 21.6016 19.2C21.6016 23.1764 24.8251 26.4 28.8016 26.4Z" fill="#141414" />
                                    <path d="M43.202 26.4C47.1784 26.4 50.402 23.1764 50.402 19.2C50.402 15.2235 47.1784 12 43.202 12C39.2255 12 36.002 15.2235 36.002 19.2C36.002 23.1764 39.2255 26.4 43.202 26.4Z" fill="#141414" />
                                    <path d="M28.8016 12C32.778 12 36.0016 8.77643 36.0016 4.79998C36.0016 0.823525 32.778 -2.40002 28.8016 -2.40002C24.8251 -2.40002 21.6016 0.823525 21.6016 4.79998C21.6016 8.77643 24.8251 12 28.8016 12Z" fill="#141414" />
                                    <path d="M43.202 12C47.1784 12 50.402 8.77643 50.402 4.79998C50.402 0.823525 47.1784 -2.40002 43.202 -2.40002C39.2255 -2.40002 36.002 0.823525 36.002 4.79998C36.002 8.77643 39.2255 12 43.202 12Z" fill="#141414" />
                                </g>
                                <g clipPath="url(#clip2_150_13539)">
                                    <path d="M51.36 15.3637C53.2157 15.3637 54.72 13.8594 54.72 12.0037C54.72 10.1481 53.2157 8.64377 51.36 8.64377C49.5043 8.64377 48 10.1481 48 12.0037C48 13.8594 49.5043 15.3637 51.36 15.3637Z" fill="#333333" />
                                    <path d="M48.0006 18.72C49.8563 18.72 51.3606 17.2157 51.3606 15.36C51.3606 13.5044 49.8563 12 48.0006 12C46.1449 12 44.6406 13.5044 44.6406 15.36C44.6406 17.2157 46.1449 18.72 48.0006 18.72Z" fill="#141414" />
                                    <path d="M54.7213 18.72C56.577 18.72 58.0813 17.2157 58.0813 15.36C58.0813 13.5044 56.577 12 54.7213 12C52.8657 12 51.3613 13.5044 51.3613 15.36C51.3613 17.2157 52.8657 18.72 54.7213 18.72Z" fill="#141414" />
                                    <path d="M48.0006 12C49.8563 12 51.3606 10.4957 51.3606 8.64003C51.3606 6.78435 49.8563 5.28003 48.0006 5.28003C46.1449 5.28003 44.6406 6.78435 44.6406 8.64003C44.6406 10.4957 46.1449 12 48.0006 12Z" fill="#141414" />
                                    <path d="M54.7213 12C56.577 12 58.0813 10.4957 58.0813 8.64003C58.0813 6.78435 56.577 5.28003 54.7213 5.28003C52.8657 5.28003 51.3613 6.78435 51.3613 8.64003C51.3613 10.4957 52.8657 12 54.7213 12Z" fill="#141414" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_150_13539">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_150_13539">
                                        <rect width="14.4" height="14.4" fill="white" transform="translate(28.8008 4.79999)" />
                                    </clipPath>
                                    <clipPath id="clip2_150_13539">
                                        <rect width="6.72" height="6.72" fill="white" transform="translate(48 8.64001)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className='pt-2'>
                                <h2 className={propertiesformStyles.properties_form_title}>Let's Make it Happen</h2>
                                <p className={propertiesformStyles.properties_form_desc}>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
                            </div>
                        </div>
                        <div>
                            <Form className={propertiesformStyles.form_container}>
                                <Row>
                                    {formFields.map((item, index) =>
                                        <Col lg={item.id <= 4 ? 3 : item.id === 9 ? 6 : item.id === 12 ? 12 : 3} key={index}>
                                            {item.id <= 4 ?
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>{item.label}</Form.Label>
                                                    <Form.Control type={item.type} placeholder={item.placeholder} className={propertiesformStyles.formcontrol} />
                                                </Form.Group> :
                                                item.id <= 9 ?
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>{item.label}</Form.Label>
                                                        <Form.Select aria-label="Default select example" className={propertiesformStyles.formcontrol}>
                                                            <option>{item.placeholder}</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    :
                                                    item.id < 12 ?
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>{item.label}</Form.Label>
                                                            <Form.Control type={item.type} placeholder={item.placeholder} className={item.id === 11 ? `${propertiesformStyles.formcontrol} mt-lg-2` : propertiesformStyles.formcontrol} />
                                                        </Form.Group>
                                                        :
                                                        item.id === 12 ?
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>{item.label}</Form.Label>
                                                                <Form.Control as="textarea" rows={3} placeholder={item.placeholder} className={propertiesformStyles.formcontrol} />
                                                            </Form.Group>
                                                            :
                                                            ""
                                            }
                                        </Col>
                                    )}
                                </Row>
                                <div className='d-lg-flex justify-content-lg-between align-items-lg-center pt-3 flex-lg-row flex-column'>
                                    <div className='mb-lg-0 mb-3'>
                                        <Form.Check aria-label="option 1"
                                            label={<span className={propertiesformStyles.properties_form_desc}>I agree with <a href="" className='text-white-50'>Terms of Use</a> and <a href="" className='text-white-50'>Privacy Policy</a></span>}
                                        />
                                    </div>
                                    <div>
                                        <Button variant='dark' className={`${propertiesformStyles.form_sendbtn} w-100`}>Send Your Message</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default properties_form