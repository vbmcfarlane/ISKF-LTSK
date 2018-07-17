import React, {Component} from "react";
import { Grid, Row, Col, Image} from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import './Classes.css';

class Home extends Component {
render() {
  return (

    <Grid>
   <Row xs={12} sm={12} md={12} lg={12}>
     <Header />
   </Row> 
   <hr />
   <Row >
      <Col xs={1} sm={1} md={1} > </Col> 
       <Col xs={10} sm={10} md={10}  lg={10}   >
            <Image src="/2017MasterCamp.jpg" responsive className="imglandscape"/>
       </Col> 
      <Col xs={1} sm={1} md={1} > </Col>   

   </Row> 

    <Row>
    <hr /> 
        <br />
        <Col xs={1} sm={1} md={1}  lg={1}> </Col> 
        <Col xs={10} sm={10} md={10} lg={10} offset={0}>
            <center><u><h2 style= {{color: 'black'}}>Welcome to ISKF Shotokan Karate at Lone Tree</h2></u></center> 
        </Col>
        <Col xs={1} sm={1} md={1}  lg={1}> </Col>
    </Row>   
    <br />     
    <Row>
         
        <Col xs={2} sm={2} md={2} > </Col> 
        <Col xs={8} sm={8} md={8} offset={0}>
        <p>We are members of the  
          <b>
          <a href="https://iskf.com/" target="_default"> International Shotokan Karate Federation (ISKF) </a>
          </b> 

        and we teach karate as a  traditional martial art. </p>

       <p> This and all that it entails centers around building character in the participants.
        Self-control, self-discipline, mental and physical stamina are all part of this art.  
        </p>
        <p>
         We help you develop the physical and mental power to reach for your goals,
         no matter what they are:
        </p>
        <p>  
          We offer complete fitness programs for kids, teens, and adults that benefit your:</p>
          <br />
        <p>  
       <ul> 
        <li> Mind – Develop greater discipline, concentration, and self-respect </li>
        <li> Body – Increase your flexibility, endurance, and muscle tone </li>
        <li> Character   -   The ability to recover from something that has happened and carry on and grow from it. </li>
       </ul>
</p>
<br />  
        <h3><center><b>Stop by and ask about our FREE introductory classes </b></center></h3> 
         <hr />
<br />  

      </Col>
       <Col xs={2} sm={2} md={2} > </Col>
      </Row>
     <Footer />
     </Grid>
      );
    }
}
export default Home;