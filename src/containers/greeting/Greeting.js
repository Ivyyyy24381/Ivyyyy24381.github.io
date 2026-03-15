import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, degrees, recentNews } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import SkillSection from "../skills/SkillSection";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p
                style={{
                  color: theme.secondaryText,
                  fontFamily: "Google Sans Regular",
                  fontSize: "16px",
                  margin: "12px 0 8px 0",
                }}
              >
                xiao_he@brown.edu
              </p>
              <SocialMedia theme={theme} />
              <SkillSection theme={theme} />
              {recentNews.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <h2
                    className="educations-header"
                    style={{
                      color: theme.text,
                      fontSize: "22px",
                      marginBottom: "16px",
                    }}
                  >
                    Recent News
                  </h2>
                  {recentNews.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginBottom: "14px",
                      }}
                    >
                      <span
                        style={{
                          color: theme.secondaryText,
                          fontFamily: "Google Sans Regular",
                          fontSize: "14px",
                          minWidth: "90px",
                          paddingTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {item.date}
                      </span>
                      <span
                        style={{
                          color: theme.text,
                          fontFamily: "Google Sans Regular",
                          fontSize: "14px",
                          lineHeight: "1.6",
                        }}
                      >
                        {item.text}{" "}
                        {item.links.map((link, i) => (
                          <span key={i}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: theme.text,
                                textDecoration: "underline",
                                fontWeight: "500",
                              }}
                            >
                              [{link.label}]
                            </a>
                            {i < item.links.length - 1 && " "}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            {/* <FeelingProud theme={theme} /> */}
            <img
              src={require("../../assets/images/home_ballet_picture.png")}
              alt="Ivy's portfolio image'"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
