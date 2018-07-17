import React, {Component} from "react";
import { Grid, Glyphicon, Row, Col, Button} from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import './Classes.css';
class Classes extends Component {
render() {
  return (

    <Grid>
     <Header />
  <div>
    <center><u><h2 style={{color:'black'}}>Classes</h2></u></center>
    <br />  
 
        <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr style={{fontSize:'18px'}}>
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                            </tr>
                        </thead>
                        <tbody><tr style={{fontSize:'14px'}}>
                            <td ><b>No scheduled <br /> class Sundays</b></td>
                            <td >
                                    <u><b>5:30 - 6:30 P</b></u><br />
                                    Youth (7 -13) <br />
                                    <br />
                                    <u><b>7:00 - 8:00 P</b></u><br />
                                    Adults 14+
                            </td>
                            <td >
                                    <u><b>5:30 - 6:30 P</b></u><br />
                                    Youth (7 -13) <br />
                                    <br />
                                    <u><b>7:00 - 8:00 P</b></u><br />
                                    Adults 14+
                            </td>
                            <td >
                                    <u><b>5:30 - 6:30 P</b></u><br />
                                    Youth (7 -13) <br />
                                    <br />
                                    <u><b>7:00 - 8:00 P</b></u><br />
                                    Adults 14+
                            </td>
                            <td >
                                    <u><b>5:30 - 6:30 P</b></u><br />
                                    Youth (7 -13) <br />
                                    <br />
                                    <u><b>7:00 - 8:00 P</b></u><br />
                                    Adults 14+
                            </td>
                            <td >
                               <b> No scheduled <br /> class Fridays</b>
                            </td>
                            <td >
                                9:00 - 10:00 A<br />
                                * Adults (14+) Drop-in class <br />
                                 Green Belt &amp; Above. <br />
                                 <br />
                                 <b>* Deferred in lieu of Instructors<br /> &amp;
                                 Sandan Training (TBA)</b>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
                  <br />
                <hr />
                    <center><h4><u><b> JUNIOR CLASSES  7-13 YEARS OLD</b></u> </h4></center>
                    <br /> <br />
                <Row>
                  <Col xs={1} sm={1} md={1} lg={1}> </Col>
                  <Col xs={10} sm={10} md={10} lg={10}> 
                <p> We have two classes for Juniors.  One is on Monday/Wednesday and the other is on Tuesday/Thursday.  Any time a student has a conflict they are welcome to substitute any other night that is convenient for them.  
                <br />
                    This age group is just starting to move into adulthood.  The benefits of karate are many for them.  
                    They will become stronger physically and mentally.
                    In school they are sometimes faced with bullies.  Karate helps them learn that they can walk away 
                    if they want to and not be embarrased.  If it is not possible to walk away they are learning the things 
                    they need to keep them safe.  Both options should be discussed with their parents to find out what 
                  they want the student to do.  
                 <br />     
                    The physical benefits are amazing at this age.  Coordination improves as well as strength.  
                    Overall fitness drastically grows and gives them skills they can use in any other sport they want to pursue.
                  <br />
                    The main thing that improves is the ability to focus and pay attention. </p>
                </Col>
                </Row>

                <center>
                <Button>
                    <Glyphicon glyph="cart" /><a href="https://www.ssprd.org/Catalog/s/cecfbe4f-5fb1-414d-b9a9-382f3b6981c2" target ="_default"> <span> Register- Youths 7-13 </span> (Click) </a>
                </Button>
                </center>
                  <hr />
                   <br />
                
                    <center><h4><u> ADULT CLASSES  14+ YEARS OLD</u> </h4></center>
                    <br /> <br />
          <Row>
              <Col xs={1} sm={1} md={1} lg={1}> </Col>
              <Col xs={10} sm={10} md={10} lg={10}> 
                  <p>

                    Adults who study Shotokan Karate do so for a multitude of reasons.  
                    Some pursue self-defense skills, some want more physical fitness, some want more self-confidence
                    and still others want to have a more peaceful outlook on life.  
                    Whatever the reason, all of these are attainable throught the art of karate-do.  
                    <br />      
                    Karate is the study of blocking, punching, kicking and striking. 
                    Karate-do is all of this and also following the philosophy behind the need for all of it, 
                    following the path of honor, justice and respect for others and yourself.  
                    This is what is taught at our dojo.  This is accomplished through hard training and focusing 
                    on the moment when we train.  
                     <br /> 
                    Most adults will say that they feel better physically and mentally when they have finished a training.  
                    This is because karate engages the whole person, body and mind, when it is done properly.  
                  </p>
              </Col>
          </Row>
          <center>
                <Button>
                    <Glyphicon glyph="cart" /><a href="https://www.ssprd.org/Catalog/s/9b56d9d1-ac50-4693-b7c6-99e192e04a27" target ="_default"> <span> Register- Adults 14 +</span> (Click) </a>
                </Button>
          </center>
     <br /> <br />
  
  </div>
  <Footer />
  </Grid>
  );
}
}
export default Classes;