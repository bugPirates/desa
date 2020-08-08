import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    return( 

        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                    <p>Project KKP &#169; 2020, Universitas Hamzanwadi, Fakultas Tekhnik. &#8482;#stayAtHome</p>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    &#169; Gondes
                    </Col>
                </Row>
            </Container>
            </footer>
    );
}
export default Footer;