import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
class About extends React.Component{
    render(){
        return(
            <div class='container about'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            About Us
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <p>
                        As they say, in todays world 'Data' is the most powerful asset.
                        </p>
                        <p>
                        icharj.ai enables you to empower your Machine Learning algorithms by 
                        providing accurately 
                        annotated data at affordable prices.
                        </p>
                        <p>
                        Our in-house team of talented and hardworking individuals can boost your 
                        models performance almost instantly helping you to commercialise your 
                        product quickly. Get in touch with us for all your data labelling requirements. Let us worry about the data and you can focus on building amazing applications using it.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;