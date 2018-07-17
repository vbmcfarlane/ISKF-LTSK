import React, {Component} from "react";
import { Grid, Row, Col} from 'react-bootstrap';
import './Footer.css';
import Navigate from '../Navigate';
export default class Footer extends Component {
  render() {
    return (
      <Grid className="footer">
          <Row>
            <Col>
              <Navigate />
            </Col>
            
          </Row>

          <Row style={{ clear: 'both'}}>
              <Col xs={11} sm={11} md={11} lg ={11}>
                <center> <h5 style={{color: 'red'}}>  2018 © ISKF Shotokan Karate at Lone Tree   </h5> </center>
              </Col> 
          </Row>
      </Grid>
    );
  }
}