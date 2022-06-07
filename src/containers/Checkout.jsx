import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Product from '@components/Product';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import '@styles/Checkout.scss';

const Checkout = () => {
    const { orders, AddProduct } = useContext(AppContext);

    const navigate = useNavigate();
    const location = useLocation();
    const [index, setIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [showBuy, setShowBuy] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setIndex(location.state.index);
    }, [])

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            const formData = new FormData(event.target);
            const formEntries = Object.fromEntries(formData.entries());
            const data = {
                sku: formEntries.sku,
                name: formEntries.name,
                quantity: formEntries.quantity,
                price: formEntries.price
            }
            AddProduct(data, index);
            setShowForm(false);
            setValidated(false);
        }
    };

    return (
        <div className='Checkout'>
            <h1 className='mt-5 mb-5'><p className='toHome' onClick={() => navigate('/')}>ORDERS</p>/ CHECKOUT</h1>
            <p className='orderNum'>{`Order N. ${orders[index]?.number}`}</p>
            <div className='container'>
                <Button variant="outline-secondary" size="lg" onClick={() => setShowForm(true)}>
                    +
                </Button>
                <div className='products'>
                    {orders[index]?.items.map((item, index) => (
                        <Product item={item} key={index} />
                    ))}
                </div>
                <Button className="buyBtn" variant='warning' size="lg" onClick={() => { setShowBuy(true) }}>Buy products</Button>
            </div>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showForm}
            >
                <Modal.Header closeButton onClick={() => setShowForm(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="8">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                />

                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label htmlFor="sku">SKU</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="SKU"
                                    name="sku"
                                />

                            </Form.Group>

                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label htmlFor="quantity">Quantity</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Quantity"
                                    name="quantity"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label htmlFor="price">Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Price"
                                    name="price"
                                />
                            </Form.Group>
                        </Row>

                        <Button variant='warning' className="mt-4" type="submit">Add to order</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showBuy}
                className="buyModal"
            >
                <Modal.Header closeButton onClick={() => setShowBuy(false)}>
                    <Modal.Title className="modalText" id="contained-modal-title-vcenter">
                        Thank you!
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className=''>
                    <div className='smile'>
                        <h1>{`:)`}</h1>
                    </div>
                    <p>{`You bought ${orders[index]?.items.length} products`}</p>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Checkout;