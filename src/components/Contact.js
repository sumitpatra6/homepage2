import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Contact extends React.Component{
    render(){
        return(
            <div class='container contact'>
            <Container>
                <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1>Don't be a stranger</h1>
                            <h2>Just say hello</h2>
                            Feel free to contact us anytime. We are always open to discuss new 
                            proects, creative ideas or opportunities to be part of your vision.

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Need Help
                            <p>contactichraj@gmail.com</p>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <form>
                            <input type="text" placeholder='Name' required></input>
                            <input type="email" placeholder='Email' required></input>
                            <textarea placeholder='message' row='6'></textarea>
                            <button type='submit' >Send</button>
                        </form>
                        </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default Contact;