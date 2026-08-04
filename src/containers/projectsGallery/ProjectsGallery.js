import React, { Component } from "react";
import { Fade } from "react-reveal";
import ProjectsData from "../../shared/opensource/projects.json";
import { projectsHeader } from "../../portfolio";
import "./ProjectsGallery.css";

class ProjectsGallery extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-gallery-main">
        <div className="educations-header-div">
          <h2 className="educations-header" style={{ color: theme.text }}>
            {projectsHeader.title}
          </h2>
          <p className="subTitle" style={{ color: theme.secondaryText }}>
            {projectsHeader.description}
          </p>
        </div>
        <div className="projects-gallery-grid">
          {ProjectsData.data.map((project) => (
            <Fade bottom duration={1500} distance="30px" key={project.id}>
              <a
                className="gallery-card"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg, ${theme.highlight} 0%, ${theme.body} 90%)`,
                }}
              >
                <p
                  className="gallery-card-kicker"
                  style={{ color: theme.secondaryText }}
                >
                  {project.kicker}
                </p>
                <h3 className="gallery-card-title" style={{ color: theme.text }}>
                  {project.name}
                </h3>
                <p
                  className="gallery-card-tagline"
                  style={{ color: theme.secondaryText }}
                >
                  {project.tagline}
                </p>
                <p
                  className="gallery-card-desc"
                  style={{ color: theme.expTxtColor }}
                >
                  {project.description}
                </p>
                <div className="gallery-card-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="gallery-tag"
                      style={{
                        color: theme.text,
                        borderColor: theme.secondaryText,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="gallery-card-link"
                  style={{ color: theme.text }}
                >
                  Visit project ↗
                </span>
              </a>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsGallery;
