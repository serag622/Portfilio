import React from "react";
import "./intro.css";
import serag from "../../assets/imgs/s3.png";
import CV from "../../assets/Serag Tarek CV.pdf"


const Intro = () => {
  return (
    <React.Fragment>
      <div className="d-flex intro">
        <div className="col d-flex justify-content-center align-item-center">
          <div className="p-5  d-flex flex-column">
            <h2 className="fs-2 m-2 ">Hello, My name is</h2>
            <h1 className="fw-bolder m-2" style={{ fontSize: "70px" }}>
              Serag Tarek
            </h1>
            <div className="intro-title m-2">
              <div className="intro-title-warpper">
                <div className="intro-title-item">Front End Developer</div>
                <div className="intro-title-item">Web Developer</div>
                <div className="intro-title-item">UI/UX Designer</div>
              </div>
            </div>
            <p className="mt-4 fw-bold fs-5 ">
              I'm front-end-developer, I'm designing and developing websites to
              be easy to use and responsive to suits all screen sizes using the
              latest web techniques. <br />I keep my skills updated and learning
              Modern technologies to make the website more interactive with
              user.
            </p>
            <div className=" row mt-5">

              <div className="col ">
               <a className="btn gcolor w-75" href={CV} download="serag_cv">Download CV</a>
              </div>

              <div className="col">
               <a className="btn gcolor w-75" href={'http:/google.com'}>Hire Me</a>
              </div>

            </div>

          </div>

          {/* <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className="i-scroll"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg> */}


        </div>

        <div className="col p-3 ">
          <div className="intro-bg p-4 border border-white">
            <div className="bg-success rounded-circle p-3  mx-auto">
              <img
                src={serag}
                alt="asd"
                className="intro-img bg-white img-fluid rounded-circle border border-dark border-3 m-3"
              /> 
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
