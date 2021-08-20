import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sweets.css";

class Sweets extends Component {
    render() {
        return (
            <Container fluid className="SweetsPage" >
                <Row>
                    <Col>
                        <h1>· Sweets ·</h1>
                        <h3>Traditional Mexican pastries and more, all baked fresh daily</h3>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>· Pan Dulce ·</h2>
                        <h5>Mexican Sweet Breads</h5>
                        <p>Conchas-White, Chocolate, Yellow, Pink (vegan) Panda Muerto, Rosca Reyas, Bunuelos seasonal and by special order </p>
                        <hr></hr>
                    </Col>

                    <Col>
                        <h2>· Cookies ·</h2>
                        <h5>Mexican style sugar cookies and traditional favorites</h5>
                        <p>Ojorasca (Cinnamon sugar), Butter Cookies, Payaso (sugar), Shortbread, Chocolate Chip, & more</p>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>· Mini Conchas ·</h2>
                        <h5>A smaller version of our traditional Conchas pan dulce</h5>
                        <p>White, Chocolate, Yellow, Pink (vegan) Custom colors/flavors available by order </p>
                        <hr></hr>
                    </Col>
                    <Col>
                        <h2>· Doughnuts ·</h2>
                        <h5>Pillowy soft in a assortment of sizes and flavors</h5>
                        <p>Chocolate, sugar, glazed, vanilla, custard filled</p>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>· Churros ·</h2>
                        <h5>Delicious fried-dough pastry</h5>
                        <p>Cinnamon and sugar</p>
                        <hr></hr>
                    </Col>
                    <Col>
                        <h2>· Flaky Puff Pastries ·</h2>
                        <h5>Mexican style Pasteries</h5>
                        <p>Apple, pineapple, cream cheese, sugar-coated </p>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>· Flan ·</h2>
                        <h5>Egg Custard cake</h5>
                        <p>Whole cakes or by-the-slice</p>

                    </Col>
                    <Col>
                        <h2>· Pastries ·</h2>
                        <h5>Cakes and baked sweets</h5>
                        <p>Cupcakes, confetti cakes, poundcake & more</p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>· Tres Leche ·</h2>
                        <h5>"Three Milk" Cake</h5>
                        <p>Assortment of fillings - whole cake or by-the-slice</p>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Sweets;