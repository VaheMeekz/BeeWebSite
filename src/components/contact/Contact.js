import React, {useRef} from 'react'
import contactImg from "../../assets/images/contact-img.png"
import emailjs from 'emailjs-com';

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
            <img src={contactImg} alt="contact-img" />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <input type="text" placeholder="Name" name={"name"} className="form-control" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="E-mail" name={"email"} className="form-control" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Phone" name={"number"} className="form-control" />
              </div>
              <div className="input-group">
                <textarea placeholder="Message" className="form-control" name={"message"}></textarea>
              </div>
              <input type={"submit"} value={"send"} className={"btn"}/>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Contact
