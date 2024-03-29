import React from "react";
import "./about.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <header id="header" className="header fixed-top" data-scrollto-offset={0}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center scrollto me-auto me-lg-0"
          >
            <h1>
              MedFile<span>.</span>
            </h1>
          </a>
          <a className="btn-getstarted scrollto" href="/login">
            Login / Sign Up
          </a>
        </div>
      </header>
      {/* End Header */}
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img
            src="assets/img/hospital.jpeg"
            className=" mt-5 pt-3 img-fluid"
            style={{ width: "40%" }}
          />
          <h2>
            Welcome to <span>MedFile</span>
          </h2>
          <p>An innovative solution for a general roblem.</p>

        </div>
        
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div
              className="row g-4 g-lg-5"
              data-aos="fade-up"
            >
              <div className="col-lg-5">
                <div className="another-illustration">
                  {/* Another illustration goes here... */}
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">
                  The purpose of the project should be written here.
                </h3>
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Benefits
                    </a>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p className="fst-italic">
                      About Us goes here.....
                    </p>
                  </div>
                  {/* End of Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <div className="d-flex align-items-center mt-4">
                      <p>The benefits of using this app [for both users and hospitals] goes here...</p>
                      </div>
                  </div>
                  {/* End Tab 2 Content */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
    </div>
  );
}

export default About;