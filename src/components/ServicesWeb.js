import React from 'react'
import {Container, Row, Col }from 'react-bootstrap'

const ServicesWeb = () => {
  return (
    <div className='services min-vh-100 d-flex-align-items-center' id='services'>
      <Container>
        <Row className='mb-5'>
            <Col>
            <h1 className='text-center fw-bold'> Services</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
            <Col className='text-center py-5 px-3 border'>
            <i class="fa-solid fa-coins mb-4 fs-2"></i>
            <h5 className='fw-bold'> Harga Terjangkau</h5>
            <p> Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
            <Col className='text-center py-5 px-3 border'>
            <i class="fa-regular fa-thumbs-up mb-4 fs-2"></i>
            <h5 className='fw-bold'>Pelayanan Terbaik</h5>
            <p> Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
            <Col className='text-center py-5 px-3 border'>
            <i class="fa-solid fa-coins mb-4 fs-2"></i>
            <h5 className='fw-bold'> Tersertifikasi</h5>
            <p> Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicesWeb
