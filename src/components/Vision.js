import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Vision extends React.Component{
    render(){
        return(
            <div class='container about vision'>
            <Container>
                <Row>
                <Col md={3} className='serviceHeader'><b>Computer Vision</b>
                                <hr style={{
                                    'width': '30%'
                                }}></hr>
                            </Col>
                            <Col md={9}>
                                <b className='subHeader'>
                                    Image & Object classification
                                </b>
                                <br></br>
                                <p className='description'>We classify images or objects based on user provided multi-level classes.</p>
                                <b className='subHeader'>
                                    Semantic segmentation
                                </b>
                                <br></br>
                                <p className='description'>Our in-house experts does the detailed process of associating each pixel of an image with a class label, (such as flower, person, road, sky, ocean, or car).
                                </p>

                                <b className='subHeader'>
                                    Polygon & Box annotations
                                </b>
                                <br></br>
                                <p className='description'>Backbone of any image/video based detection system is polygon/box annotations. We do these annotation for variety of domains ranging from  autonomous vehicles, medical images, sports and virtual reality games.</p>
                                <b className='subHeader'>
                                    Object tracking
                                </b>
                                <br></br>
                                <p className='description'>We can help you get accurate tracks of different objects (humans, vehicles, animals, etc) in videos</p>

                                <b className='subHeader'>
                                    Keypoint labelling
                                </b>
                                <br></br>
                                <p className='description'>we can also annotate individual points in images such as facial features, joint positions or landmarks.</p>
                                <b className='subHeader'>
                                    Medical annotations:
                                </b>
                                <br></br>
                                <p className='description'>We can help you get the initial annotations for medical images by locating the regions of interest
                                </p>

                                <b className='subHeader'>
                                    Image & Object classification
                                </b>
                                <br></br>
                                <p className='description'>We classify images or objects based on user provided multi-level classes.</p>
                                <b className='subHeader'>
                                    Semantic segmentation
                                </b>
                                <br></br>
                                <p className='description'>Our in-house experts does the detailed process of associating each pixel of an image with a class label, (such as flower, person, road, sky, ocean, or car).
                                </p>
                            </Col>
                    </Row>
                    </Container>
                    </div>
        );
    }
}

export default Vision;