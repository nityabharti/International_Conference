import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer">
          <div className="box contact-box">
            <h1>SSTEPS- 2022</h1>
            <p>
              Department of Electrical Engineering
              <br />
              Central University of Haryana
              <br />
            </p>
          </div>
          <div className="box">
            <h2>Contact</h2>
            <p>
              Tel: +91 9550944396 <br /> +91 9704638836{" "}
            </p>
            <p>Email: ssteps2022@gmail.com</p>
            <div className="social-media">
              <a className="icon" href="/">
                <FaFacebook />
              </a>
              <a className="icon" href="/">
                <FaInstagram />
              </a>
              <a className="icon" href="/">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="box newsletter">
            <h3>Important Dates</h3>
            <ul>
              <li>Submission paper:</li>
              <li>Paper Submission Deadline: 31 Aug. 2022</li>
              <li>Paper Acceptance Notification: 28 Sep. 2022</li>
              <li>Submission of camera ready paper: 15 Oct. 2022</li>
              <li>Early bird registration: 18 Oct. 2022</li>
              <li>Standard registration: 30 Oct. 2022</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright @ 2022</p>
          {/* <p>Copyright @ 2022 Created and Maintained by <a href="https://abhishek-rao-portfolio.herokuapp.com/">Abhishek Rao</a></p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
