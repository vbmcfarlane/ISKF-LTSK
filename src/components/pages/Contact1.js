 import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, ResponsiveEmbed, Row, Col, Image, Button} from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
 import './About.css';
import Navigate from "../Navigate";
class Contact extends Component {
render() {
  return (

    <Grid>
     <Header />
  <div>
    <center><u><h1>Contact Us</h1></u></center>
    <br /> <br />
     <Row className="show=grid text-center">
        <Col xs={12} sm={4} md={3} className="person-wrapper">
        <Image src="/swain.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={12} sm={6} md={8} >
<h3><b> Gary Swain </b></h3> 
<p>
Chief Instructor Gary Swain teaches all classes. Gary started his martial arts training in 1973.
His instructor is Master Yutaka Yaguchi, with whom he has been training for almost 44 years.
Gary has had to privilege of training with many of the world famous Masters.  
<br/>  These includes: 
Master Nakayama, Master Okazaki, Masters Tanaka, Osaka, Shiina, Ochi, Miura, Kanazawa, Okamoto, Takashina, Koyama and Mikami.
<br /> <br />
His accomplishments include:
<ul>
    <li> 8th Dan ISKF </li>
    <li> Certified Graduate of the ISKF Instructor Training Course </li>
    <li> Member -ShihanKai (Master Committee) </li>
    <li> ISKF Technical Committee Member </li>
    <li> Chairman-Mt. States Technical Committee </li>
    <li> Regional Director- MT. States Region-ISKF </li>
</ul>
<br />
Gary has been teaching and training children and adults in the Denver Metro area since 1987.
</p>
 </Col>
  </Row>
  <hr />
<Row className="show=grid text-center">
        <Col xs={12} sm={4} md={3} className="person-wrapper">
        <Image src="/Irene.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={12} sm={6} md={8} >
<br />
<h4><b>Irene Bowden </b> </h4>
<br /> <p>
Irene helps assist and teach in classes and handles dojo communications. <br /> 
<p>Her accomplishments include: </p>
<ul>
    <li> 4th Dan ISKF </li>
    <li> ISKF Certified Instructor </li>
    <li> Examiner and Judge </li>
 </ul>
</p>
</Col>
</Row>
<hr />
<Row className="show=grid text-center">
        <Col xs={12} sm={4} md={3} className="person-wrapper">
        <Image src="/Hy.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={12} sm={6} md={8} >
<h4><b>Hy Dreksler</b></h4>
<p>Hy assists on all of the Youth classes and some of the Junior classes. <br />
He also trains 4 times a week in a regular karate class. He is an invaluable asset to the dojo.</p>
<br /> His accomplishments include:
<ul>
    <li> 5th Dan ISKF </li>
    <li> National competitor in individual competition </li>
</ul>   
<br />
<p>Still going strong as an octogenarian</p>
<p>Hy started training in 1973 in New York. </p>
</Col>
</Row>
<hr />
<Row className="show=grid text-center">
        <Col xs={12} sm={4} md={3} className="person-wrapper">
        <Image src="/HMaria.jpg" circle className="swain-profile-pic" />
        </Col>
        <Col xs={12} sm={6} md={8} >
<h4><b>Maria Mullen</b></h4>
<br /> <p>Maria assists in the Junior classes and teaches the adult classes periodically.
 <br /> Her bubbly personality and sense of humor add life to any class she attends.</p>
 <br />
Her accompishments include: 
<ul>
    <li>3rd Dan ISKF Maria has been training almost 16 years with Sensei Swain </li>
</ul>
 </Col>
 </Row>
  
  </div>
  <Footer />
  </Grid>
  );
}
}
export default Contact;



// 

<div class="container">

    <form class="well form-horizontal" action=" " method="post"  id="contact_form">
<fieldset>

<!-- Form Name -->
<legend>Contact Us Today!</legend>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label">First Name</label>  
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
    </div>
  </div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label" >Last Name</label> 
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
    </div>
  </div>
</div>

<!-- Text input-->
       <div class="form-group">
  <label class="col-md-4 control-label">E-Mail</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
    </div>
  </div>
</div>


<!-- Text input-->
       
<div class="form-group">
  <label class="col-md-4 control-label">Phone #</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
  <input name="phone" placeholder="(845)555-1212" class="form-control" type="text">
    </div>
  </div>
</div>

<!-- Text input-->
      
<div class="form-group">
  <label class="col-md-4 control-label">Address</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="address" placeholder="Address" class="form-control" type="text">
    </div>
  </div>
</div>

<!-- Text input-->
 
<div class="form-group">
  <label class="col-md-4 control-label">City</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="city" placeholder="city" class="form-control"  type="text">
    </div>
  </div>
</div>

<!-- Select Basic -->
   
<div class="form-group"> 
  <label class="col-md-4 control-label">State</label>
    <div class="col-md-4 selectContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select name="state" class="form-control selectpicker" >
      <option value=" " >Please select your state</option>
      <option>Alabama</option>
      <option>Alaska</option>
      <option >Arizona</option>
      <option >Arkansas</option>
      <option >California</option>
      <option >Colorado</option>
      <option >Connecticut</option>
      <option >Delaware</option>
      <option >District of Columbia</option>
      <option> Florida</option>
      <option >Georgia</option>
      <option >Hawaii</option>
      <option >daho</option>
      <option >Illinois</option>
      <option >Indiana</option>
      <option >Iowa</option>
      <option> Kansas</option>
      <option >Kentucky</option>
      <option >Louisiana</option>
      <option>Maine</option>
      <option >Maryland</option>
      <option> Mass</option>
      <option >Michigan</option>
      <option >Minnesota</option>
      <option>Mississippi</option>
      <option>Missouri</option>
      <option>Montana</option>
      <option>Nebraska</option>
      <option>Nevada</option>
      <option>New Hampshire</option>
      <option>New Jersey</option>
      <option>New Mexico</option>
      <option>New York</option>
      <option>North Carolina</option>
      <option>North Dakota</option>
      <option>Ohio</option>
      <option>Oklahoma</option>
      <option>Oregon</option>
      <option>Pennsylvania</option>
      <option>Rhode Island</option>
      <option>South Carolina</option>
      <option>South Dakota</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option> Uttah</option>
      <option>Vermont</option>
      <option>Virginia</option>
      <option >Washington</option>
      <option >West Virginia</option>
      <option>Wisconsin</option>
      <option >Wyoming</option>
    </select>
  </div>
</div>
</div>

<!-- Text input-->

<div class="form-group">
  <label class="col-md-4 control-label">Zip Code</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="zip" placeholder="Zip Code" class="form-control"  type="text">
    </div>
</div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label">Website or domain name</label>  
   <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
  <input name="website" placeholder="Website or domain name" class="form-control" type="text">
    </div>
  </div>
</div>

<!-- radio checks -->
 <div class="form-group">
                        <label class="col-md-4 control-label">Do you have hosting?</label>
                        <div class="col-md-4">
                            <div class="radio">
                                <label>
                                    <input type="radio" name="hosting" value="yes" /> Yes
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" name="hosting" value="no" /> No
                                </label>
                            </div>
                        </div>
                    </div>

<!-- Text area -->
  
<div class="form-group">
  <label class="col-md-4 control-label">Project Description</label>
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
          <textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
  </div>
  </div>
</div>

<!-- Success message -->
<div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

<!-- Button -->
<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4">
    <button type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
  </div>
</div>

</fieldset>
</form>
</div>
    </div><!-- /.container -->


    //css
#success_message{ display: none;}

//  js

 $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});