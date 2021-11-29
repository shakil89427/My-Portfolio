import React from "react";

const Banner = () => {
  return (
    <div className="banner-container text-center pt-5">
      <h1 className="mt-5 fw-light">
        Hey!, I'm <span>Shakil Ahmed</span>
      </h1>
      <h2 className="fw-light">Frontend Developer</h2>
      <p className="px-5 fw-light">
        Specializing in custom theme development. If you're a business seeking a
        web presence or are looking to hire, contact me.
      </p>
      <a
        className="down"
        href="https://drive.google.com/file/d/1rK0LtlgEpt2BsSndjo5Qvt_cpvahK8Hp/view?usp=sharing"
      >
        <button className="banner-btn">Get Resume</button>
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,266.7C384,256,480,192,576,186.7C672,181,768,235,864,234.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
