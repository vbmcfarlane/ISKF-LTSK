import React, {Component} from "react";
import {   Grid, ResponsiveEmbed, Row,  Col} from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import './Classes.css';

class About extends Component {
render() {
  return (

<Grid>
  <Row className="boxline" xs={12} sm={12} md={12} lg={12}>
     <Header />
  </Row>   
     
<Row className="boxline">
  <Col xs={1} sm={1} md={1} lg={1}> </Col>
  <Col xs={10} sm={10} md={10} lg={10}> 
    <center><h3> Perspectives on Shotokan Karate Video </h3>
       Gary Swain   </center> <br />
  </Col>
  <Col xs={1} sm={1} md={1} lg={1}>  </Col>   
</Row>
<Row>
   
        <div style={{ width: 'auto', height: 'auto' }}>
          <ResponsiveEmbed a16by9>
            <embed type="image/svg+xml" src="https://www.youtube.com/embed/vxzM30LW6Nc" />
          </ResponsiveEmbed>
        </div>
     
</Row>
    <br />
<Row className="boxline">
    <Col xs={1} sm={1} md={1} lg={1}>  </Col> 
    <Col xs={10} sm={10} md={10} lg={10}>   
    <h3><center>
            "The ultimate aim of the art of karate 
              lies not in victory or defeat, 
            but in the perfection of character of its participants"
    </center></h3>
    <center>
          Gichin Funakoshi 1869-1957 <br />
          Founder of Shotokan Karate 
      </center> 
      <br /> 
    <h3 style={{color: 'red' }}><center><u>TRADITIONAL SHOTOKAN KARATE INSTRUCTION </u> </center></h3>
 
    <p>We teach and train in the traditional manner.  Respect and ettiqette are a main part of the classes.  The development of self-control and paying attention are only a couple of the things that are gained from martial arts training.  The classes are conducted in the following format:
    </p>

    <br />
     
       <ul>
            <li> Kihon-Basic Techniques   </li>
            <li> Kata-Forms or Self-Defense Training  </li>
            <li> Kumite-Sparring </li>
       </ul>
      
    <br />  
    <p>At the end of the Youth Classes,  the students participate in games to help build strength, speed and coordination. It is also a lot of fun. </p>
    <br />
    <p>The purpose of teaching Shotokan Karate to young people is to assist them in some of the following things: </p>
    <ul>
        <li> Self-Control </li>
        <li> Self-Discipline </li>
        <li> Self-Defense </li>
        <li> Increase attention span </li>
        <li> Learn to follow directions </li>
        <li> Respect for themselves and others </li>  
    </ul>
    <br />
    <p>
      Learning karate as an adult tends to make us more relaxed and comfortable around others.
      It creates confidence and a quiet pride that shows through.  Connecting the mind and the 
      body is the easiest way there is to get rid of stress at the end of the day.
    </p>
</Col>
<br /> <br />
   
  </Row>
  <Row xs={12} sm={12} md={12} lg={12}>
          <Footer />
  </Row>
  </Grid>
 );
}
}
export default About;