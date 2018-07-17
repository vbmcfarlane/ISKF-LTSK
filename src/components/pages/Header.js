import React, {Component} from "react";
 
import {   Grid, Row, Col, Image } from 'react-bootstrap';
import './Header.css';
import Navigate from "../Navigate";

export default class Header extends Component {
render() {
 
  return (
    <Grid className="gridborder"  style ={{background : "black" }}>
     
      
      <Row className="show-grid text-center">
              <Col xs={3} sm={3} md={3} lg={3} circle className="img-fluid">
                  <Image src="/iskflogo.png" circle className="profile-logo" />
            </Col> 
            <Col xs={6} sm={6} md ={6}>  lg={6} className="img-fluid"
             <center><h2 style= {{color: 'red'}}>

             ISKF Shotokan Karate at Lone Tree 

             </h2></center> 
             <center>
               <h5>   Lone Tree Recreation Center <br />
                  10249 Ridgegate Circle <br />
                  Lone Tree, Colorado <br /> </h5>
             </center> 
             </Col>
             <Col xs={3} sm={3} md={3}  lg={3}  circle className="img-fluid ">
                  <Image src="/SenseiSwain.jpg" circle className="swain-profile-pic" />
            </Col> 
             
        </Row>
        <br />
         <Row>
          <Navigate />
         </Row>
         
     
     </Grid>
      );
    }
}

 