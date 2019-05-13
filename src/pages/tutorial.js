import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "../css/slick/slick.min.css";
import "../css/slick/slick-theme.min.css";

class Tutorial extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      adaptiveHeight: true
    };
    return(
        <div className="wrapper">
          <div className="cross">
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </div>

          <div className="slider-wrapper">
            <Slider {...settings}>
              <div>
                <div className="tutorial tut1">

                  <div className="tuttext">
                    Add your friends to start tracking anytimers!
                    </div>
                </div>
              </div>
              <div>
                <div className="tutorial tut1">

                  <div className="tuttext">
                    Create (or join) a group to keep track of your friends.
                    </div>
                </div>
              </div>
              <div>
                <div className="tutorial tut1">

                  <div className="tuttext">
                    Add or drink anytimers bij pressing the beer button.
                    </div>
                </div>
              </div>
              <div>
                <div className="tutorial tut4">

                  <Link to="/">
                    <div className="tuttext tuttext4">
                      That's it! Click me to start tracking those anytimers!
                    </div>
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
    )
  }
}

export default Tutorial;
