import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__container">
        <div className="bottom_left">
          <div className="box_whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
          </div>
        </div>
        <div className="bottom_right">
          <FontAwesomeIcon icon={faLinkedin}/>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}
<i class="fa-brands fa-linkedin"></i>;

export default Bottom;
