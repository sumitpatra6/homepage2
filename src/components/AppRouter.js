import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import icon from '../images/icon.png'
import SpeechToText from './SpeechToText';
import Language from './Language';
import Vision from './Vision'

class AppRouter extends React.Component{

    render(){
        return(
            <Router>
                
                <Navbar bg="black" variant="dark" style={{
                    'background-color' : 'black !important'
                }}>
                    <Navbar.Brand href="#home"><img  src={icon} alt="icon" class='navbarIcon'/></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link><Link className = 'links' to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link className = 'links' to='/about'>About Us</Link></Nav.Link>
                            <Nav.Link><Link className = 'links' to='/contact'>Contact Us</Link></Nav.Link>
                        </Nav>
                </Navbar>
                <TransitionGroup>
                    <CSSTransition
                    key='some_key'
                    timeout={300}
                    classNames='fade'>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/speech_to_text" component={SpeechToText}/>
                        <Route path="/language" component={Language}/>
                        <Route path="/vision" component={Vision}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Router>
        );
    }
};

export default AppRouter;