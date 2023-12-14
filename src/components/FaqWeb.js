import React from 'react'
import { Container, Row, Col, Accordion} from 'react-bootstrap'

const FaqWeb = () => {
  return (
    <div className='faq' id='faq'>
      <Container>
        <Row className='mb-5'>
          <Col><h1 className='text-center fix-bold'>Yang Biasa ditanyakan</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>

        <Row className='row-cols-lg-2 row-cols-md-2 row-cols-1 g-4'>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bagaimana Ordernya ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
          </Col>

          <Col>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Bisa Check In kapan aja ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
          </Col>

          <Col>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ada Promo menarik apa ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
          </Col>


          <Col>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> spill lokasi dong ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FaqWeb
