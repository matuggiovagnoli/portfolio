import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import front from "../media/frontend.png";
import back from "../media/backend.png";
import database from "../media/database.png";
import js from "../media/js.png";
import ty from "../media/ty.png";
import html from "../media/html.png";
import css from "../media/css.png";
import ibmcert from "../media/IBM.pdf";
import nicelabel from "../media/nicelabel.png";
import comunication from "../media/comunication.png";
import team from "../media/team.png";
import motivation from "../media/motivation.png";
import firebase from "../media/firebase.png";
import express from "../media/express.png";
import git from "../media/git.png";
import axios from "../media/axios.png";
import node from "../media/node.png";
import mysql from "../media/mysql.png";
import redux from "../media/redux.png";
import react from "../media/react.png";
import mongo from "../media/mongo.png";
import sqlserver from "../media/sqlserver.png";
import rest from "../media/rest.png";
import postman from "../media/postman.svg";
import ibm from "../media/ibm.png";
import coder from "../media/coderhouse.png";
import ceac from "../media/CEAC.png";
import loftware from "../media/loftware.png";
import codercert from "../media/coder.png"

const About = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState("frontend");

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  const renderTechList = () => {
    switch (selectedTech) {
      case "frontend":
        return (
          <div className="w-full flex flex-row  items-center justify-center">
            <div className="w-2/5 flex flex-col max-sm:w-1/4 gap-8">
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left gap-3">
                <img
                  src={js}
                  alt="js"
                  className="w-12 max-sm:w-10 h-12 max-sm:h-10 animate-rotate"
                />
                <p>Javascript</p>
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left-2s gap-3">
                <img
                  src={ty}
                  alt="ts"
                  className="w-12 max-sm:w-10 h-12 max-sm:h-10  animate-rotate"
                />
                <p>Typescript</p>
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left-3s gap-3">
                <img
                  src={html}
                  alt="html"
                  className="w-12 max-sm:w-10 h-12 max-sm:h-10  animate-rotate"
                />
                <p>HTML</p>
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left-4s gap-3">
                <img
                  src={css}
                  alt="css"
                  className="w-12 max-sm:w-10 h-12 max-sm:h-10  animate-rotate"
                />
                <p>CSS</p>
              </div>
            </div>
            <img
              src={front}
              alt="frontend"
              className="w-96 h-96 self-center animate-enter max-sm:hidden"
            />
            <div className="w-2/5 flex flex-col max-sm:w-1/4 gap-8 max-sm:ml-20">
              <div className="relative flex flex-row items-center justify-center animate-slide-in-right gap-3 ">
                <p>React</p>
                <img
                  src={react}
                  alt="react"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-right-2s gap-3">
                <p>Redux</p>
                <img
                  src={redux}
                  alt="redux"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-right-3s gap-3">
                <p>Axios</p>
                <img src={axios} alt="axios" className="w-12  animate-rotate" />
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-right-4s gap-3">
                <p>Git</p>
                <img
                  src={git}
                  alt="git"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
            </div>
          </div>
        );
      case "backend":
        return (
          <div className="w-full flex flex-row max-sm:flex-col items-center justify-center">
            <div className="w-2/5 flex flex-col gap-8">
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left gap-3">
                <img src={node} alt="nodejs" className="w-20 animate-rotate" />
                <p>NodeJs</p>
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left-2s gap-3">
                <img
                  src={express}
                  alt="express"
                  className="w-12 h-12  animate-rotate"
                />
                <p>Express</p>
              </div>
            </div>
            <img
              src={back}
              alt="backend"
              className="w-96 h-96 self-center animate-enter max-sm:hidden"
            />
            <div className="w-2/5 flex flex-col max-sm:mt-5 gap-8">
              <div className="relative flex flex-row max-sm:flex-row-reverse items-center justify-center animate-slide-in-right gap-3">
                <p>RestAPIs</p>
                <img
                  src={rest}
                  alt="restapi"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
              <div className="relative flex flex-row max-sm:flex-row-reverse items-center justify-center animate-slide-in-right-2s gap-3">
                <p>Postman</p>
                <img
                  src={postman}
                  alt="postman"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
            </div>
          </div>
        );
      case "database":
        return (
          <div className="w-full flex flex-row max-sm:flex-col items-center justify-center">
            <div className="w-2/5 flex flex-col max-sm:w-full  max-sm:justify-around gap-8">
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left gap-3">
                <img src={mysql} alt="mysql" className="w-16 animate-rotate" />
                <p>MySQL</p>
              </div>
              <div className="relative flex flex-row items-center justify-center animate-slide-in-left-2s gap-3">
                <img
                  src={sqlserver}
                  alt="sqlserver"
                  className="w-16  animate-rotate"
                />
                <p>SQL Server</p>
              </div>
            </div>
            <img
              src={database}
              alt="database"
              className="w-96 h-96 self-center animate-enter max-sm:hidden"
            />
            <div className="w-2/5 flex flex-col max-sm:mt-5 gap-8">
              <div className="relative flex flex-row max-sm:flex-row-reverse items-center justify-center animate-slide-in-right gap-3">
                <p>MongoDB</p>
                <img
                  src={mongo}
                  alt="mongodb"
                  className="w-12 h-12  animate-rotate"
                />
              </div>
              <div className="relative flex flex-row max-sm:flex-row-reverse items-center justify-center animate-slide-in-right-2s gap-3">
                <p>Firebase</p>
                <img
                  src={firebase}
                  alt="firebase"
                  className="w-12 animate-rotate"
                />
              </div>
            </div>
          </div>
        );
      case "soft_skills":
        return (
          <div
            className="w-full flex flex-wrap justify-center mt-3 gap-5"
            key="soft_skills"
          >
            <div className="w-full sm:w-1/2 md:w-1/4 lg:h-40 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-2s">
              <div className="flex flex-col items-center justify-center mb-2 rounded-t-md py-2">
                <img
                  src={comunication}
                  alt="comunication logo"
                  className="w-10 h-10 lg:w-20 lg:h-20"
                />
                <h3 className="text-center lg:text-xl font-semibold">
                  {t("comunication_skills")}
                </h3>
              </div>
              <p>{t("")}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-3s">
              <div className="flex flex-col items-center justify-center mb-2 rounded-t-md py-2">
                <img
                  src={team}
                  alt="team logo"
                  className="w-10 h-10 lg:w-20 lg:h-20"
                />
                <h3 className="text-center lg:text-xl font-semibold">
                  {t("team_player")}
                </h3>
              </div>
              <p>{t("")}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-4s">
              <div className="flex flex-col items-center justify-center mb-2 rounded-t-md py-2">
                <img
                  src={motivation}
                  alt="motivation logo"
                  className="w-10 h-10 lg:w-20 lg:h-20"
                />
                <h3 className="text-center lg:text-xl font-semibold">
                  {t("motivation")}
                </h3>
              </div>
              <p>{t("")}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 font-bold mb-6">
        {t("about")}
      </h2>
      <div className="w-full text-left space-y-16 px-20">
        <p className="font-serif text-base text-center sm:text-lg">
          "{t("about_intro")}"
        </p>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-center">
            {t("skills")}
          </h3>
          <div className="flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-row justify-around max-sm:gap-3 max-sm:flex-wrap mb-4">
              <p
                className={`cursor-pointer h-fit lg:text-2xl transition duration-500 ease-in-out ${
                  selectedTech === "frontend"
                    ? "font-semibold text-white bg-blue-500 p-1 rounded-sm"
                    : ""
                }`}
                onClick={() => handleTechClick("frontend")}
              >
                Frontend
              </p>
              <p
                className={`cursor-pointer h-fit lg:text-2xl transition duration-500 ease-in-out ${
                  selectedTech === "backend"
                    ? "font-semibold text-white bg-blue-500 p-1 rounded-sm"
                    : ""
                }`}
                onClick={() => handleTechClick("backend")}
              >
                Backend
              </p>
              <p
                className={`cursor-pointer h-fit lg:text-2xl transition duration-500 ease-in-out ${
                  selectedTech === "database"
                    ? "font-semibold text-white bg-blue-500 p-1 rounded-sm"
                    : ""
                }`}
                onClick={() => handleTechClick("database")}
              >
                {t("database_tech")}
              </p>
              <p
                className={`cursor-pointer h-fit lg:text-2xl transition duration-500 ease-in-out ${
                  selectedTech === "soft_skills"
                    ? "font-semibold text-white bg-blue-500 p-1 rounded-sm"
                    : ""
                }`}
                onClick={() => handleTechClick("soft_skills")}
              >
                {t("soft_skills")}
              </p>
            </div>
            <div
              key={selectedTech}
              className="w-full flex items-center justify-evenly animate-enter"
            >
              {renderTechList()}
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <h3 className="text-xl lg:text-3xl sm:text-2xl font-semibold mb-8">
            {t("professional_experience")}
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base flex flex-wrap gap-14">
            <div>
              <p className="text-lg font-medium">FullStack Developer 3ns</p>
              <p className="font-light">{t("date_3ns")}</p>
              <ul className="list-disc list-inside ml-5 mb-3">
                <li>{t("3n_1")}</li>
                <li>{t("3n_2")}</li>
                <li>{t("3n_3")}</li>
                <li>{t("3n_4")}</li>
                <li>{t("3n_5")}</li>
                <li>{t("3n_6")}</li>
                <li>{t("3n_7")}</li>
                <li>{t("3n_8")}</li>
                <li>{t("3n_9")}</li>
                <li>{t("3n_10")}</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-medium">{t("walltrip_role")}</p>
              <p className="font-light">{t("walltrip_date")}</p>
              <ul className="list-disc list-inside ml-5">
                <li>{t("wall_1")}</li>
                <li>{t("wall_2")}</li>
                <li>{t("wall_3")}</li>
              </ul>
            </div>
          </ul>
        </div>
        <div>
          <h3 className="text-xl lg:text-3xl sm:text-2xl font-semibold text-center mb-14">
            {t("education_certifications")}
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-base grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <img src={ceac} alt="" className="w-16 lg:w-14 mb-4" />
              <li className="text-center">{t("CEAC")}</li>
            </div>
            <div className="flex flex-col items-center">
              <img src={loftware} alt="" className="w-52 lg:w-40 mb-4" />
              <li className="text-center">{t("loftware_cert")} 2024</li>
              <a
                href={nicelabel}
                download="Loftware Certification"
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-600"
              >
                {t("download_cert")}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src={ibm} alt="" className="w-28 lg:w-24 mb-4" />
              <li className="text-center">{t("ibm_cert")} 2023</li>
              <a
                href={ibmcert}
                download="IBM Skill Buildt"
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-600"
              >
                {t("download_cert")}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src={coder} alt="" className="w-48 lg:w-40 mb-4" />
              <li className="text-center">{t("coder_cert")} 2022</li>
              <a
                href={codercert}
                download="CoderHouse React"
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-600"
              >
                {t("download_cert")}
              </a>
            </div>
          </ul>
        </div>
        <div className="my-10">
          <h3 className="text-xl lg:text-3xl sm:text-2xl font-semibold text-center mb-8">
            {t("lenguajes")}
          </h3>
          <ul className="w-full list-disc list-inside text-sm sm:text-base flex flex-wrap justify-evenly">
            <li>{t("ln_spanish")}</li>
            <li>{t("ln_english")}</li>
            <li>{t("ln_cat")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
