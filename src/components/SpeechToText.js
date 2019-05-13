import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
class SpeechToText extends React.Component{
    render(){
        return(
            <div class='container about'>
            <Container>
                <Row>
                <Col md={3} className='serviceHeader'><b>Speech to text</b>
                                <hr style={{
                                    'width': '30%'
                                }}></hr>
                            </Col>
                            <Col md={9}>
                                <b className='subHeader'>
                                Speech to Text validation

        
                                </b>
                                <br></br>
                                <p className='description'>We verify and rectify automatically transcribed text generated by algorithms.</p>
                                <b className='subHeader'>
                                Audio transcription
                                </b>
                                <br></br>
                                <p className='description'>We manually transcribe text from audio/video clips giving your solutions a new dimension.</p>
                                </Col>
                    </Row>
                    </Container>
                    </div>
        )
    }
}

export default SpeechToText;