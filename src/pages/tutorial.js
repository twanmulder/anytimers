import React from 'react';
import Slider from "react-slick";

import "../css/slick/slick.min.css";
import "../css/slick/slick-theme.min.css";

class Tutorial extends React.PureComponent {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: false
    };
    return(
      <div>
        <div className="wrapper">
          <div className="cross">
            <i className="fas fa-times"></i>
          </div>

          <Slider {...settings}>
            <div>
              <div className="tutorial tut1">
                <img src="https:///via.placeholder.com/150.jpg" alt="placeholder" />
                <div className="tuttext">
                  Make (or join) a group to start tracking your anytimers.
                  </div>
              </div>
            </div>
            <div>
              <div className="tutorial tut1">
                <img src="https:///via.placeholder.com/150.jpg" alt="placeholder" />
                <div className="tuttext">
                  Invite your friends using the special code or using email/whatsapp.
                  </div>
              </div>
            </div>
            <div>
              <div className="tutorial tut1">
                <img src="https:///via.placeholder.com/150.jpg" alt="placeholder" />
                <div className="tuttext">
                  Make (or join) a group to start tracking your anytimers.
                  </div>
              </div>
            </div>
            <div>
              <div className="tutorial tut1">
                <img src="https:///via.placeholder.com/150.jpg" alt="placeholder" />
                <div className="tuttext">
                  Make (or join) a group to start tracking your anytimers.
                  </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default Tutorial;
