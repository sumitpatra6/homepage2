import React from 'react';
import {Grid, Row, Col, Container} from 'react-bootstrap';
import icon from '../images/icon.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import speechtotext from '../images/speechtotext.png';
import language from '../images/language.png';
import computervision from '../images/computervision.png'

class Home extends React.Component{
    
    render(){
        return(
            <div className='homepage'>
            <Container>
                <Row>
                <Col lg={12} sm={12} xs={12}>
                <div className='home-icon-container'>
                    <div >
                        <img src={icon} alt='icon'/>
                        <h1>Generating data the smart way.</h1>
                    </div>
                </div>
                </Col>
                </Row>
                <br></br>
                <Row>
                    
                <Col lg={12} sm={12} xs={12}>
                <div className='home-menu-container'>
                    <Link to='/speech_to_text' className='links'><div className='home-menu-card'
                    style={{
                        'border-top' : '2px solid #8cf442',
                        backgroundImage : `url(${speechtotext})`
                    }}>
                    <div className='home-menu-text'>Speech</div>
                    &nbsp;
                       &nbsp;
                    <span>&rarr;</span>
                    </div></Link>
                    <Link to='/language' className='links'>
                    <div className='home-menu-card'
                    style={{
                        'border-top' : '2px solid #d3f9b8',
                        backgroundImage : `url(${language})`
                    }}>
                       <div className='home-menu-text'>Language</div>
                       &nbsp;
                       &nbsp;
                    <span>&rarr;</span> 
                    </div>
                    </Link>
                    <Link to='/vision' className='links'>
                    <div className='home-menu-card'
                    style={{
                        'border-top' : '2px solid #f8f9f7',
                        backgroundImage : `url(${computervision})`
                    }}>
                      <div className='home-menu-text'>Vision</div>
                      &nbsp;
                      &nbsp;
                    <span>&rarr;</span>  
                    </div>
                    </Link>
                </div>
                </Col>
                
                </Row>
            
            </Container>
            </div>
        );
    }
};

export default Home;