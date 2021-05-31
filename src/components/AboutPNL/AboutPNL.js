import React ,{ Component } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pnldistlogo from '../../../src/images/PNLdistlogo.png';
import pnldistmenu from '../../../src/images/PNLdistmenu.png';
import "./AboutPNL.css"


class AboutPNL extends Component{
    render() {
        return <div className="aboutpnl">
            <Container>
                <Row className="pnllogosRow">
                    <Col>
                        <img src={pnldistlogo} width='100%' height='100%' />
                    </Col>
                    <Col>
                        <img src={pnldistmenu} width='100%' height='100%' />
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
                <p className='info' >
                In the Pilsen Community of Chicago since 1973, we're a traditional self-serve mexican bakery where you grab a tray and tongs when you enter then the fun begins picking your favorites from conchas, gorditas dulces, delicious empanadas or from our large assortment of cookies and sweets.
                 Our pan dulce is made fresh daily from scratch with quality ingredients and baked throughout the day.
                  A favorite among our customers is our scrumptious flour tortillas. 
                Made at our location with only the freshest ingredients in a variety of tempting flavors such as mole, habanero, chile morita, black bean with jalapeño, and many more.
                </p>
                <br></br>
                <p className='info'>
                We have a growing selection of Vegan breads, sweets, and tortillas - Stop by today to see all the delicacies we have to offer!
                </p>
            </div>
    }
}

export default AboutPNL;