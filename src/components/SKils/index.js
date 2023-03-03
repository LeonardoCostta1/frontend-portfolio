import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faNodeJs,
  faGit,
  faSass
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
function SKils() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="skils">
      <div className="headline">my skils</div>
      <div className="skils_home_container">
        <Slider {...settings}>
          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
            </div>
            <div className="title">javascript</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
            </div>
            <div className="title">node js</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faReact} />
              </div>
            </div>
            <div className="title">react</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faReact} />
              </div>
            </div>
            <div className="title">react native</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faGit} />
              </div>
            </div>
            <div className="title">git</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faSass} />
              </div>
            </div>
            <div className="title">sass</div>
          </div>

          <div className="box_container">
            <div className="box_skils">
              <div className="circle_center">
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
            </div>
            <div className="title">ux & ui designer</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SKils;
