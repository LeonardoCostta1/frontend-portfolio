"use client";
import React from "react";
import User from "@/components/User";
import Button from "@/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp
} from "@fortawesome/free-regular-svg-icons";

const HomePage = () => {
  return (
    <div className="home">
      <User />
      <div className="home__container">
        <div className="headline">
          <div className="welcome">hello welcome</div>
          <div className="text_headline">
            criative
            <br />
            developer
          </div>

          <div className="option">
          <FontAwesomeIcon icon={faArrowAltCircleUp}/>
          <span>personalize nutrition plan</span>
          </div>

          <div className="option">
          <FontAwesomeIcon icon={faArrowAltCircleUp}/>
          <span>personalize nutrition plan</span>
          </div>

          <div className="resume">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>

          <Button text="hire me" />
        </div>

        <div className="home_information_container">
          <div className="info_box">
            <div className="number">10</div>
            <div className="info">yaers</div>
          </div>

          <div className="info_box">
            <div className="number">+20</div>
            <div className="info">brands</div>
          </div>

          <div className="info_box">
            <div className="number">+30</div>
            <div className="info">projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
