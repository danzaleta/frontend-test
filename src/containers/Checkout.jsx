import React, { useState, useEffect } from 'react';
import Product from '@components/Product';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import '@styles/Checkout.scss';

const Checkout = ({ products }) => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            setShow(false);
            setValidated(false);
        }
    };

    return (
        <div className='Checkout'>
            <h1 className='mt-5 mb-5'><a href='/'>ORDERS</a> / CHECKOUT</h1>
            <p className='orderNum'>{`Order N.`}</p>
            <div className='container'>
                <Button variant="outline-secondary" size="lg" onClick={() => setShow(true)}>
                    +
                </Button>
                <div className='products'>
                    {products?.items.map((item, index) => (
                        <Product item={item} key={index} />
                    ))}
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                    <Product item={[]} />
                </div>
                <Button className='' variant='warning' size="lg">Buy products</Button>
            </div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
            >
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                />

                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>SKU</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="SKU"
                                />

                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Quantity"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Price"
                                />
                            </Form.Group>
                        </Row>

                        <Button variant='warning' className="mt-4" type="submit">Add to order</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Checkout;