import React from 'react'
import funFacts from "../../assets/images/fun-facts-img.png"

function Achievement() {
    return (
        <section className="fun-facts-section section-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Մեր <span>Գործունեությունը</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="fun-facts-img">
            <img src={funFacts} alt="fun-facts-img" />
          </div>
          <div className="fun-facts-items">
            <div className="row">
              <div className="fun-facts-item">
                <h3>5k</h3>
                <p>ավարտած ուսանող</p>
              </div>
              <div className="fun-facts-item">
                <h3>50k</h3>
                <p>գրանցված ուսանող</p>
              </div>
              <div className="fun-facts-item">
                <h3>20+</h3>
                <p>ընդհանուր կուրսեր</p>
              </div>
              <div className="fun-facts-item">
                <h3>95%</h3>
                <p>սերտեֆկավորում</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Achievement
