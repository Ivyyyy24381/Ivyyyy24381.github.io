import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { publications, publicationsHeader } from "../../portfolio";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
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
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
