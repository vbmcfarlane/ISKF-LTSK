import React, {Component} from "react";
import  {Grid, Glyphicon, Row, Col } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import './About.css';
 
class Contact extends Component {
render() {
  return (

    <Grid>
     <Header />
   
    <center><u><h1>Contact Us</h1></u></center>
    <br /> <br />
     <div >
        <Row className="row">
            <Col xs={4} sm={4} md={4} lg={4}>
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><b>Chief Instructor</b></h4></div>
                    <div className="panel-body">
                        <address>
                            <p><strong>Gary Swain</strong>
                            <br /> <br />
                            <Glyphicon glyph="envelope"/> Email : <a href="mailto:karatecoach10@gmail.com?
                            &subject=Shotokan%20Karate%20Inquiry
                            ">karatecoach10@gmail.com
                            </a><br /> <br />
                            
                            <Glyphicon glyph="phone" /> Cell Phone (303) 475-8664 
                         
                          </p>  
                        </address>
                    </div>
                </div>
            </Col>
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><b>Dojo Address</b></h4></div>
                    <div className="panel-body">
                     
                        <address>  
                        <p>
                            <Glyphicon glyph="home" />
                            <a href="https://www.ssprd.org/Lone-Tree-Recreation-Center" target ="_default">
                            <span> South Suburban Parks and Recreation- Lone Tree </span>(Click Link)
                            </a><br />
                          <br />
                             
                            <Glyphicon glyph="globe" /><a href="https://goo.gl/maps/6nLtEh9fPj42" target ="_default"> <span> 10249 Ridgegate Circle, Lone Tree, CO, 80124, US </span> (Click Map) </a><br />
                             <br />
                            <Glyphicon glyph="phone-alt" /> Phone (303) 708-3500 
                         </p> 
                        </address>  
                    </div>
                </div>
            </div>
            
            <div className="col-md-2">
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><b>Web Master</b></h4></div>
                    <div className="panel-body">
                        <address>
                            <p>
                               <Glyphicon glyph="envelope"/>  Email :  <a href="mailto:vbmcfarlane@gmail.com?subject=Web%20Site%20Inquiry"><br />Web Master</a><br />
                            </p>
                        </address>
                    </div>
                </div>
            </div>
        </Row>
    </div>
<br /> 
<br />
 
  <Footer />
  </Grid>
  );
}
}
export default Contact;