import React ,{ Component } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pnldistlogo from '../../../src/images/PNLdistlogo.png';
import pnldistmenu from '../../../src/images/PNLdistmenu.png';
import pnlstrip from '../../images/breads.png';
import "./AboutPNL.css"


class AboutPNL extends Component{

    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();  
    }

    render() {
        return (
        <Container className="aboutpnl" ref={this.aboutRef} fluid >
            <span>
                <img className="pnlstrip" src={pnlstrip} alt="pnl strip of bread" />
            </span>
            <Container>
                <Row className="pnllogosRow">
                    <Col>
                        <img src={pnldistlogo} alt="PNL's logo " width='100%' />
                    </Col>
                    <Col>
                        <img src={pnldistmenu} alt="Pnl's short menu" width='100%' />
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
            <br />
            <p className='info'>
            We have a growing selection of Vegan breads, sweets, and tortillas - Stop by today to see all the delicacies we have to offer!
            </p>
            <span>
                <img className="pnlstrip" src={pnlstrip} alt="pnl strip of bread" />
            </span>
        </Container>);
    }
}

export default AboutPNL;