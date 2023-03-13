import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub,faBehance,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone,faLocationDot,faArrowDown} from "@fortawesome/free-solid-svg-icons";
function cv() {
  return (
    <div className="cv">
      <div className="cv--container">
        <div className="cv--container--top">
          <div>
            <div className="cv--container--top__headline">leonardo costa</div>
            <div className="cv--container--top__subheadline">
              CRIATIVE DEVELOPER
            </div>
          </div>

          <div className="cv_download_container">
            
            <div className="cv_download"><FontAwesomeIcon icon={faGithub} /></div>
            <div className="cv_download"><FontAwesomeIcon icon={faBehance} /></div>
            <div className="cv_download"><FontAwesomeIcon icon={faInstagram} /></div>
            <div className="cv_download"><FontAwesomeIcon icon={faArrowDown} /></div>
          </div>
        </div>

        <div className="cv--info--container">
          <div className="cv--info--container__left">
            <div className="photo"></div>

            <div className="username">about</div>

            <div className="resume">
              Sou uma pessoa apaixonada pelo design e pelo desenvolvimento de
              aplicações, desde que me lembro sempre me interessei bastante por
              aspectos relacionados à arte e design, desde de então me dediquei
              a seguir este caminho, mas ao percorrer este percurso me
              interessei por uma área que considero muito interessante o
              desenvolvimento de aplicações e foi aí que eu me descobri um
              desenvolvedor/programador, juntei essas duas peças importantes pra
              mim o design + o desenvolvimento de aplicações e me tornei um
              profissional melhor e mais qualificado onde posso expressar a
              minha paixão pelo o design nas aplicações desenvolvidas.
            </div>

            <div className="cv_skils">
              <div className="experience_title">Skills</div>

              <div className="cv_skils_box">
                <div className="name">javascript</div>
                <div className="progressbar" style={{ width: "90%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">nodejs</div>
                <div className="progressbar" style={{ width: "60%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">react js</div>
                <div className="progressbar" style={{ width: "80%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">nextjs</div>
                <div className="progressbar" style={{ width: "50%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">react native</div>
                <div className="progressbar" style={{ width: "60%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">git</div>
                <div className="progressbar" style={{ width: "50%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">sass</div>
                <div className="progressbar" style={{ width: "70%" }}></div>
              </div>

              <div className="cv_skils_box">
                <div className="name">ux|ui designer</div>
                <div className="progressbar" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
          <div className="cv--info--container__right">
            <div className="experience_title">experience</div>

            <div className="experience_box">
              <div className="experience_top">
                <div className="corporate">horizon value express</div>
                <div className="date">2018 - present</div>
              </div>

              <div className="resume_experience">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </div>
            </div>

            <div className="experience_box">
              <div className="experience_top">
                <div className="corporate">horizon value express</div>
                <div className="date">2018 - present</div>
              </div>

              <div className="resume_experience">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </div>
            </div>

            <div className="experience_box">
              <div className="experience_top">
                <div className="corporate">horizon value express</div>
                <div className="date">2018 - present</div>
              </div>

              <div className="resume_experience">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </div>
            </div>

            <div className="experience_title">education</div>
            <div className="experience_box">
              <div className="experience_top">
                <div className="corporate">faculdade pitágoras</div>
                <div className="date">2014 - 2019</div>
              </div>

              <div className="resume_education">
                Bacharelado, Sistemas de informação
              </div>
            </div>

            <div className="experience_box">
              <div className="experience_top">
                <div className="corporate">
                  SCRUM FOUNDATION PROFESSIONAL CERTIFICATE (SFPC) – PORTUGUESE
                </div>
                <div className="date">2019</div>
              </div>

              <div className="resume_education">
                Código da credencial: 21553629870727
              </div>
            </div>
            <div className="experience_title">contact</div>

            <div className="cv_contact_container">
              <div className="cv_contact">
                <FontAwesomeIcon icon={faPhone} /> +55 (31) 99126-1722
              </div>
              <div className="cv_contact"><FontAwesomeIcon icon={faEnvelope} />lc08093@gmail.com</div>
              <div className="cv_contact"><FontAwesomeIcon icon={faLocationDot} />Belo Horizonte / Minas Gerais</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cv;
