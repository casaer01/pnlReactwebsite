import React ,{ Component } from "react";
import {Row, Col,Container} from "react-bootstrap";
import "./Tortillas.css";

class Tortillas extends Component{
    render() {
        return (
            <Container fluid className="tortillasContainer" >
                <Row>
                    <Col className="titlecol" >
                        · Tortillas ·
                    </Col>
                </Row>

                <Row>
                    <Col className="subTort" >
                        small batches, hand-made fresh in our kitchen
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className="subTort" >·Tortilla Flavors·</Col>
                </Row>
                <Row>
                    <Col className="tortPara" >
                    A favorite among our costumers is our delicious flour tortillas. Made in small batches at our location with only the freshest ingredients, you won't find a more authentic taste anywhere. Our traditional flour tortilla is a classic but we feature a host of tempting flavors such as Black Bean with Jalapeño, Habanero, and many more. Prepackaged and ready to take home today.
                    </Col>
                    <Col className="tortPara" >
                    Classic White · wheat · Jalapeño · Chile Guajillo · Habanero · Chile Morita · Chipotle · Black Bean & Jalapeño · Mole · Margarine · Avocado 
                    </Col>
                </Row>
                <Row>
                    <Col className="tortFoot" >
                    · Vegan varieties available ·
                    </Col>
                    <Col className="tortFoot" >
                    · All of our tortillas contain no animal products except the margarine flavor. · 
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Tortillas;