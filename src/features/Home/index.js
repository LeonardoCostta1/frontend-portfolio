"use client";
import React from "react";
import User from "@/components/User";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const {t} = useTranslation();
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

          <div className="resume">{t('Frontend developer / fulstack javascript / UX&UI designer')}</div>
          <Button text="hire me" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
