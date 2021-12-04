import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";

export default function App(props) {

	return (
     <ServicesGrid>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/mom_working.jpg"} />
              <h5>Apps, UI/UX and Frameworks</h5>
              <GradientKeyline />
              {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
              <h6>
                We chat to understand your vision better, current team
                structure, and existing skills. We also investigate the
                long-term website needs of you or your company so that we can
                provide a solution tailored just for you!
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/team_collab.jpg"} />
              <h5>Cloud and Infrastructure</h5>
              <GradientKeyline />
              {/* <h6>
              We are prepared to jump right in when with a team capable of
              designing, developing, and deploying high-performance systems to
              handle millions of queries every day. Areas of work include Big
              Data, Server-Side Software Engineering, Database, and Data
              Engineering.
            </h6> */}
              <h6>
                Our team is prepared to work with you on a wide range of
                projects. We can handle designing and developing
                high-performance systems to handle millions of hits every day.
                Our team develops and manages data centers that support users
                all over the globe.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/cloud.jpg"} />
              <h5>DevOps and Site Reliability</h5>
              <GradientKeyline />
              {/* <h6>
              By designing and building a continuous integration and delivery
              system, we’ll ensure the high availability, scalability, and
              security of a huge infrastructure every day. Areas of work include
              Site Reliability Engineering, Systems Engineering, Network
              Engineering, Performance Engineering, Systems Administration, and
              Hadoop Administration.
            </h6> */}
              <h6>
                We’ll build a system that is constantly up and running. Our
                engineers will be responsible for ensuring the high
                availability, scalability, security of the infrastructure every
                day with Site Reliability Engineering (SRE), Networking Systems
                Administration expertise - including performance engineering as
                well!
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/two_working_together.jpg"} />
              <h5>Project Management</h5>
              <GradientKeyline />
              <h6>
                We take ownership of projects by overseeing every aspect, from
                start to finish. Areas of work include Technical Project
                Management, Evangelism, Metrics, Analytics, and Program
                Management.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/wireframing_collaboration.jpg"} />
              <h5>Information Systems and Technology</h5>
              <GradientKeyline />
              <h6>
                You can depend on us, to help design and manage complex systems
                that run our country such as high traffic public-facing web
                platforms, as well as manufacturing, logistics, operations, and
                facilities. Areas of work include Web Application Engineering,
                Back-End Engineering, Mobile Software Engineering, Data Science
                and Applied Machine Learning, Software Quality Engineering,
                Security Engineering, Network Engineering, Content Delivery, and
                Data Center Operations.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/woman_worker.jpg"} />
              <h5>Machine Learning and AI</h5>
              <GradientKeyline />
              <h6>
                We help develop algorithms that learn from data to create the
                most insightful options for the best outcomes. We do it with the
                help of privacy experts to ensure users’ privacy is respected.
                Areas of work include Artificial Intelligence, Computer Vision,
                Data Science, and Deep Learning.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/workers.jpg"} />
              <h5>Defi and Blockchain</h5>
              <GradientKeyline />
              <h6>
                All though the technology is still not widely adopted, we've
                come to take Blockchain and Cryptocurrency seriously. We are
                proactivly engaged in the community to see what innovations we
                can advance as we create customer experiences that are seamless.
                Areas of work include Blockchain Solutions, Smart Contracts,
                Wallet Development, DAPP Development and NFTs.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={"https://eminent-web.s3.amazonaws.com/images/eminentapps/group_working.jpg"} />
              <h5>Quality, Automation, and Tools</h5>
              <GradientKeyline />
              <h6>
                We work to ensure that your software and services run as
                smoothly as each was designed to. Areas of work include Quality
                Assurance Engineering, Integration Engineering, Software
                Developer in Test Engineering, Applications Engineering,
                Software Compatibility Engineering, Automation Engineering, and
                Tools Development.
              </h6>
            </ServicesTextItem>

            <div className="paddlenav paddlenav-framed">
              <ul>
                <li>
                  <button
                    data-dir="-1"
                    aria-label="Previous article"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                    data-analytics-click="prop3:Previous News Article"
                    data-analytics-title="Previous News Article"
                    disabled=""
                  >
                    <svg
                      className="svg-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-36.9-80.2
											C-44.2-80.2-50-86-50-93.2c0-7.2,5.8-13.1,13-13.1c7.2,0,13.1,5.8,13.1,13.1C-23.9-86-29.7-80.2-36.9-80.2z M-34.1-85.9
											c0.3-0.3,0.3-0.9,0-1.2l-6.4-6.1l6.4-6.1c0.4-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0l-6.5,6.2c-0.7,0.6-0.7,1.6,0,2.2l6.5,6.2
											C-35-85.6-34.4-85.5-34.1-85.9z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      className="svg-icon icon-hover"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-34.1-85.9
											c-0.3,0.3-0.9,0.3-1.2,0l-6.5-6.2c-0.7-0.6-0.7-1.6,0-2.3l6.5-6.2c0.4-0.3,0.9-0.3,1.2,0c0.4,0.3,0.4,0.9,0,1.3l-6.4,6.1l6.4,6.1
											C-33.7-86.8-33.7-86.2-34.1-85.9z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    data-dir="1"
                    aria-label="Next article"
                    className="paddlenav-arrow paddlenav-arrow-next"
                    data-analytics-click="prop3:Next News Article"
                    data-analytics-title="Next News Article"
                  >
                    <svg
                      className="svg-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-36.9-80.2
											C-44.2-80.2-50-86-50-93.2c0-7.2,5.8-13.1,13-13.1c7.2,0,13.1,5.8,13.1,13.1C-23.9-86-29.7-80.2-36.9-80.2z M-40.2-85.9
											c0.3,0.3,0.9,0.3,1.3,0l6.5-6.2c0.7-0.6,0.7-1.6,0-2.2l-6.5-6.2c-0.4-0.4-0.9-0.4-1.2,0c-0.4,0.3-0.4,0.9,0,1.2l6.4,6.1l-6.4,6.1
											C-40.6-86.8-40.6-86.2-40.2-85.9z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      className="svg-icon icon-hover"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-40.3-85.7
											c-0.4-0.4-0.4-0.9,0-1.3l6.5-6.2l-6.5-6.2c-0.4-0.3-0.4-0.9,0-1.3c0.4-0.3,0.9-0.3,1.3,0l6.6,6.3c0.7,0.6,0.7,1.7,0,2.3l-6.6,6.3
											C-39.4-85.4-40-85.4-40.3-85.7z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </ServicesGrid>
  );
}

const ServicesGrid = styled.div`
  display: grid;
  overflow: visible;
  grid-auto-flow: column;
  grid-gap: 20px;

  grid-auto-flow: column;
  width: fit-content;
  overflow: visible;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 350px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;

  h3 {
    font-size: 1.6rem;
    color: #fff;
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }

  .btn {
    text-decoration: none;
    color: #40464c;
    background: #fff;
    padding: 15px 25px;
    border-radius: 31px;
    font-weight: 500;
    margin-top: 1.2rem;
  }

  .btn:hover {
    background: #081119;
    color: #4f5050;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: 0.3s;
    padding: 0;
    text-align: center;
  }

  .overlay {
    position: absolute;
    width: 0px;
    height: 0px;
    transform-origin: 50% 50%;
    mix-blend-mode: normal;
    border-radius: 50%;
    -webkit-transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0.8;
  }

  .red {
    width: 1400px;
    height: 1400px;
    background-color: #465e4f;
    left: calc(0% - 1400px);
    top: calc(50% - 700px);
  }

  .blue {
    width: 1400px;
    height: 1400px;
    background-color: #7dab9e;
    left: calc(100%);
    top: calc(50% - 700px);
  }

  &:hover .red {
    width: 1400px;
    height: 1400px;
    left: calc(0% - 700px);
    top: calc(50% - 700px);
  }

  &:hover .blue {
    width: 1400px;
    height: 1400px;
    left: calc(100% - 700px);
    top: calc(50% - 700px);
  }

  &:hover .content {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ServicesTextItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 500px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.5, 1, 0.89, 1);
  transition-delay: 0.25s;
  border-radius: 18px;
  background: #16181a;
  grid-row: 1;
  width: 335px;

  img {
    max-height: 400px;
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 20% 10%;
  }
  h5 {
    font-size: 26px;
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.3em;
    letter-spacing: 0.03em;
    text-align: left;
    padding: 0px 20px 0px;
    color: #fff;
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #999999, #ffffff);
  }

  h6 {
    display: none;
    padding: 0px;
    font-size: 22px;
    line-height: 1.52947;
    font-weight: 400;
    letter-spacing: 0.011em;
    margin: 10px 20px 20px;
    max-width: 550px;
    text-align: left;
    color: #e6e6eb;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    min-height: auto;
    h5 {
      font-size: 20px;
    }
    margin: 0px 20px;
  }
`;

const ServiceCardContent = (cardImage) => {
  const src = Object.values(cardImage);
  return (
    <ServiceCard className="card-1">
      <img src={src} alt="Logo" />
      <div className="content">
        <h3>Pick a Plan Below</h3>
        <h4>Let's work together.</h4>
        <button
          onClick={onScheduleClickHandler}
          className="btn"
          title="Request Quote"
        >
          GET STARTED
        </button>
      </div>
      <div className="overlay red"></div>
      <div className="overlay blue"></div>
    </ServiceCard>
  );
};

const GradientKeyline = styled.div`
  align-self: flex-end;
  width: 93%;
  margin: 10px auto 10px;
  height: 2px;
  background-image: linear-gradient(to right, #77a596, #9cd8c4);
  display: none;
`;

const onScheduleClickHandler = (e) => {
  document.getElementById("ScheduleBtn").click();
  document.getElementById("app").scrollTo(0, 0);
};