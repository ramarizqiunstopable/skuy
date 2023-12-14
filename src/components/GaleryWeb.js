import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Galery1 from '../assets/img/galery/gallery-1.jpg'
import Galery2 from '../assets/img/galery/gallery-2.jpg'
import Galery3 from '../assets/img/galery/gallery-3.jpg'
import Galery4 from '../assets/img/galery/gallery-4.jpg'
import Galery5 from '../assets/img/galery/gallery-5.jpg'
import Galery6 from '../assets/img/galery/gallery-6.jpg'
const GaleryWeb = () => {
  return (
    <div className=' gallery min-vh-100' id='gallery'>
       <Container>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4'>
            <Col><img src={Galery1} alt="unplash.com" className='w-100'/></Col>
            <Col><img src={Galery2} alt="unplash.com"className='w-100' /></Col>
            <Col><img src={Galery3} alt="unplash.com"className='w-100' /></Col>
            <Col><img src={Galery4} alt="unplash.com"className='w-100' /></Col>
            <Col><img src={Galery5} alt="unplash.com"className='w-100' /></Col>
            <Col><img src={Galery6} alt="unplash.com"className='w-100' /></Col>
        </Row>
       </Container>
    </div>
  )
}

export default GaleryWeb
