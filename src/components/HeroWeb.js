import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HeroWeb = () => {
  return (
    <div className="Hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col className="text-white text-center">
            <h1> Mari Staycation di Skuy.com</h1>
            <h4 className="text-white-50">
              {" "}
              Staycation ternyaman di Indonesia
            </h4>
          </Col>
        </Row>
        {/* <Row className='center'>
               <Col >
                <Form>
                <Form.Group className="box" controlId="exampleForm.ControlInput1">
                  
                  <Form.Control size='lg' type="text" placeholder="Cari tempat disini" />
                  <br />
                </Form.Group>   
    </Form>
               </Col>
              <Col>
                  <Button className='bt' variant="outline-light">Cari</Button>
              </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default HeroWeb;
