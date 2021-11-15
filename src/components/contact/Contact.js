import React from 'react'
import contactImg from "../../assets/images/contact-img.png"

function Contact() {
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
            <form>
              <div className="input-group">
                <input type="text" placeholder="Name" className="form-control" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="E-mail" className="form-control" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Phone" className="form-control" />
              </div>
              <div className="input-group">
                <textarea placeholder="Message" className="form-control"></textarea>
              </div>
              <button type="button" className="btn btn-1">send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Contact
