import React ,{ Component } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pnldistlogo from '../../../src/images/PNLdistlogo.png';
import fbpnl from '../../images/fb.png'
import instrapnl from "../../images/insta.png"
import yelppnl from "../../images/yelpsm.png"
import './footerPNL.css';

class FooterPNL extends Component{
    render() {
        return <div className="footermain" >
            <Container fluid >
                <Row className="footerRow" >
                    <Col xs={3} >
                    <img src={pnldistlogo} alt="Pnl's logo" width="100%" />
                    </Col>

                    <Col xs={1} >
                    </Col>

                    <Col>
                    <dl>
                        <dt><a href="/Menu" >Menu</a></dt>
                        <dt><a href="/Tortillas" >Tortillas</a></dt>
                        <dt><a href="/Sweets" >Sweets</a></dt>
                        <dt><a href="/#aboutpnl">About</a></dt>
                        <dt>Contact Us</dt>
                    </dl>
                    </Col>

                    <Col>
                    <dl>
                        <dt>Telephone:</dt>
                        <a className="links" href="tel:+13122435977">
                            <dt>(312) 243-5977</dt>
                        </a>
                        <br />
                        <dt>Address:</dt>
                        <dt>1634 W 18th St</dt>
                        <dt>Chicago, Illinois</dt>
                    </dl>
                    </Col>

                    <Col xs={5} >
                    <dl>
                        <dt>Hours</dt>
                        <dt>Mon-Fri: 6:00 am - 8:00 pm</dt>
                        <dt>Sat Sun: 8:00 am - 8:00 pm</dt>
                        <br />
                        <dt>Follow Us</dt>
                        <dt>
                            <a href="https://www.facebook.com/PanaderiaNuevoLeon/"  >
                                <img src={fbpnl} alt="Pnl's facebook" width="55px" />
                            </a>

                            <a href="https://www.instagram.com/pnl_pilsen/" >
                                <img src={instrapnl} alt="Pnl's instagram" width="55px" />
                            </a>
                            
                            <a href="https://www.yelp.com/biz/nuevo-leon-bakery-chicago-3?osq=panaderia+nuevo+leon" >
                                <img src={yelppnl} alt="Pnl's yelp" width="55px" />
                            </a>
                        </dt>
                    </dl>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default FooterPNL;