import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css"

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0: {
              items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          }
      }
  }
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What they say about me!"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel 
                className="owl-carousel" 
                id="testimonial-carousel"
                {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                      This is to certify that Mr.Sneh Gupta has worked for Frshr
                      Technologies Pvt. Ltd. as “Blockchain Developer” from
                      6-December-2021 to 31-January-2022. His conduct has been
                      excellent.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img 
                        src="img/testimonial/man.png" 
                        alt="Old White Man"
                    />
                    <h5>Naren Lokwani</h5>
                    <p>CEO, Frshr Technologies</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left" />
                      This is to certify that Mr.Sneh Gupta has worked for Frshr
                      Technologies Pvt. Ltd. as “Blockchain Developer” from
                      6-December-2021 to 31-January-2022. His conduct has been
                      excellent.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                        <li>
                            <i className='fa fa-star-half-alt'></i>
                        </li>
                        <li>
                            <i className='fa fa-star'></i>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img 
                        src="img/testimonial/mike.png" 
                        alt="Black Man"
                    />
                    <h5>Naren Lokwani</h5>
                    <p>CEO, Frshr Technologies</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
