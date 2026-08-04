import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import ProjectsGallery from "../../containers/projectsGallery/ProjectsGallery";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { publications, publicationsHeader, degrees } from "../../portfolio";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import DegreeCard from "../../components/degreeCard/DegreeCard";
class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <ProjectsGallery theme={this.props.theme} />
        {publications.data.length > 0 && (
          <div className="publication-section">
            <div className="educations-header-div">
              <h2
                className="educations-header"
                style={{ color: this.props.theme.text }}
              >
                {publicationsHeader.title}
              </h2>
              <p
                className="subTitle"
                style={{ color: this.props.theme.secondaryText }}
              >
                {publicationsHeader.description}
              </p>
            </div>
            <div className="educations-body-div">
              {publications.data.map((pub, index) => (
                <PublicationCard
                  key={index}
                  pub={pub}
                  theme={this.props.theme}
                />
              ))}
            </div>
          </div>
        )}
        <div className="publication-section">
          <div className="educations-header-div">
            <h2
              className="educations-header"
              style={{ color: this.props.theme.text }}
            >
              Education
            </h2>
          </div>
          <div className="educations-body-div">
            {degrees.degrees.map((degree, index) => (
              <DegreeCard
                key={index}
                degree={degree}
                theme={this.props.theme}
              />
            ))}
          </div>
        </div>
        <div
          className="undergraduate-projects-section"
          style={{
            textAlign: "center",
            padding: "40px 20px",
            marginTop: "40px",
          }}
        >
          <h2 style={{ color: this.props.theme.text, marginBottom: "20px" }}>
            Undergraduate Projects
          </h2>
          <p
            style={{
              color: this.props.theme.secondaryText,
              marginBottom: "30px",
              fontSize: "18px",
            }}
          >
            View my mechanical engineering and robotics projects from Carnegie
            Mellon University
          </p>
          <a
            href="https://hexiao24381.wixsite.com/ivyh"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              backgroundColor: this.props.theme.highlight,
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View Undergraduate Portfolio →
          </a>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
