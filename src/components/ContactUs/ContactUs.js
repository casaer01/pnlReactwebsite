import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./ContactUs.css";

class ContactUs extends Component{
    render() {
        return (
            <Container className="Contact" fluid >
                <div>
                    <h1>· Contact ·</h1>
                    <p>Contact us for info on special orders or large groups so we can have your favorites avaialable when you want them!</p>
                </div>
                <Row>
                    <Col>
                        <dl>
                            <dt><h2>Call us or Come by</h2></dt>
                            <dt>Tel:</dt>
                            <dd>(312)243-5977</dd>
                            <br />
                            <dl><h2>Address:</h2></dl>
                            <dt>1634 W 18th St.</dt>
                            <dd>Chicago, Illinois</dd>
                        </dl>
                    </Col>
                    <Col>
                        <dl>
                            <h2>Follow Us</h2>
                            <dt></dt>
                            <dt>Email:</dt>
                            <dt><a href="mailto:contact@panaderianuevoleonpilsen.com">contact@panaderianeuvoleonpilsen.com</a></dt>
                        </dl>
                    </Col>
                </Row>
                <iframe className="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.623394837953!2d-87.66977318412775!3d41.85793227922401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d07dbb204c7%3A0x563f631a5ea2a934!2sPanaderia%20Nuevo%20Leon!5e0!3m2!1sen!2sus!4v1625075352910!5m2!1sen!2sus" allowfullscreen="true" title="PNL location Google map" loading="lazy" />
            </Container>
        );
    }
}

export default ContactUs;