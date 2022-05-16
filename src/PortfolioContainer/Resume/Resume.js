import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    {skill:"Data Structures & Algorithms", ratingPercentage:85},
    {skill:"Core Java", ratingPercentage:85},
    {skill:"Blockchain", ratingPercentage:85},
    {skill:"React.JS", ratingPercentage:85},
    {skill:"Solidity Smart Contract", ratingPercentage:80},
    {skill:"HTML", ratingPercentage:80},
    {skill:"CSS", ratingPercentage:80},
    {skill:"JavaScript", ratingPercentage:80},
    {skill:"Python", ratingPercentage:70},
    {skill:"Docker", ratingPercentage:70},
    {skill:"Kubernetes", ratingPercentage:70},
    {skill:"Firebase", ratingPercentage:70},
    {skill:"MySQL", ratingPercentage:60}
  ];

  const projectsDetails = [
    {
      title: "Resume Builder",
      duration: {fromDate: "2021", toDate: "2022"},
      description:
        "A Resume Builder that uses Redux State management property of React.js to serve resumes to users for FREE!",
      subHeading: "Technologies Used: React JS, Firebase",
      link: "https://github.com/SNEHAASHISH/Resume_Builder"
    },
    {
      title: "Whiteboard",
      duration: {fromDate: "2021", toDate: "2022"},
      description:
      "A realtime and interactive whiteboard application with draw, erase add images, add notes functionality.",
      subHeading: "Technologies Used: HTML, CSS, JavaScript, Socket.io, Canvas API",
      link: "https://snehaashish.github.io/Whiteboard/"
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Malaviya National Institute of Technology, Jaipur, IN"}
        subHeading={"BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE ENGINEERING"}
        fromDate={"2019"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"Pelkhil Higher Secondary School, Thimphu, BTN"}
        subHeading={"CLASS XII, SCIENCE (I.T.)"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Father Agnel School, Noida, IN"}
        subHeading={"CLASS X, SCIENCE"}
        fromDate={"2015"}
        toDate={"2017"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MoonCase (FNT Technologies Pvt. Ltd.)"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"Jan 2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
            <span className='resume-description-text'>
                Currently working as a full stack developer intern and primary tech stack is <b>React.js</b>, <b>Python(Flask)</b>, <b>MongoDB</b>, <b>Amazon S3</b> and <b>Algolia</b>.
            </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Co-developed the frontend and backend code for Broker Panel involving responsive pages for <i>Client Details, Cheque Upload,</i> and <i>TnC</i> and backend APIs for interacting between Admin Panel and Broker Panel.
          </span>
          <br />
          <span className="resume-description-text">
          - Developed file upload feature to Amazon S3 which also updated the
Mongo collection and Algolia index for <i>coins</i> and <i>pod data</i> in the backend.{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <a rel="noopener noreferrer" href={projectsDetails.link} target="_blank" style={{ textDecoration: 'none', color: '#1f2235'}}>
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
        </a>
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading='Current Affairs &nbsp; 🌏'
        description='I really like following geopolitical developments around the world, by virtue of my schooling in multiple countries, keeping up to date with global affairs is something with which I really vibe with!'
      />
      <ResumeHeading
        heading='Gaming &nbsp; 🎮'
        description='From the Nintendo Gameboy  in my childhood, to switching from PS2 to PS3 during my teens, and in a later while with Mobile Gaming, my tryst with this addictive combination of both adrenaline and dopamine inducing activity has been so far a lifetime feature that I really cherish'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
        fadeInSubscription.unsubscribe();
    }
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;