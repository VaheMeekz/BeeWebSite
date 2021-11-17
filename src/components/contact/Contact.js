import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import Iframe from "react-iframe";
import {Button, TextField} from "@material-ui/core";



function Contact() {


  //send Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wk41r2f',  'template_htax8fr', e.target, 'user_YB1ZfeSkFNlnDkV6epXcE')
        .then((result) => {
          console.log(result);
        }).catch(err => console.log(err));
  };

    return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>contact <span>us</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-img">

              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.405406946073!2d44.488959315644045!3d40.20004407671282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6bc6cf96ef%3A0x6932662afc4c86ff!2sBeeOnCode!5e0!3m2!1sen!2s!4v1636632487448!5m2!1sen!2s"
                      width="800"
                      height="450"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"/>

          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                {/*<input type="text" placeholder="Name" name={"name"} className="form-control" />*/}
                <TextField id="standard-basic" label="Name"  name={"name"} color="yellow" variant="standard" className="form-control"/>
              </div>
              <div className="input-group">
                {/*<input type="text" placeholder="E-mail" name={"email"} className="form-control" />*/}
                <TextField id="standard-basic" label="E-mail" variant="standard" color="warning" className="form-control" name={"email"}/>
              </div>
              <div className="input-group">
                {/*<input type="text" placeholder="Phone" name={"number"} className="form-control" />*/}
                <TextField id="standard-basic" label="Phone" variant="standard" color="default" name={"number"} className="form-control"/>
              </div>
              <div className="input-group">
                {/*<textarea placeholder="Message" className="form-control" name={"message"}></textarea>*/}
                <TextField id="standard-basic" label="Message" variant="standard" color="default" name={"message"} className="form-control"/>
              </div>
              {/*<input type={"submit"} value={"send"} className={"btn"}/>*/}
              <Button variant="contained" type={"submit"} className={"btn"}>Send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Contact
