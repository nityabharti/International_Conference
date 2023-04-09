import React from "react";
import "../../styles/content_css/firstpage.css";
// import cuhlogo from "../../assets/cuh-logo.png";
import img1 from "../../assets/Images/cuh_1.jpeg";
import img2 from "../../assets/Images/cuh_2.jpeg";
import img3 from "../../assets/Images/cuh_3.jpeg";
import img4 from "../../assets/Images/cuh_4.jpeg";
import img5 from "../../assets/Images/cuh_5.jpeg";
import img6 from "../../assets/Images/cuh_6.jpeg";
import img7 from "../../assets/Images/cuh_7.jpeg";
import img8 from "../../assets/Images/cuh_8.jpeg";
import img9 from "../../assets/Images/cuh_9.jpg";
import img10 from "../../assets/Images/cuh_10.jpg";
import img11 from "../../assets/Images/cuh_11.jpg";
import img12 from "../../assets/Images/cuh_12.jpg";
import img13 from "../../assets/Images/cuh_13.jpg";
import img14 from "../../assets/Images/cuh_14.jpg";
import img15 from "../../assets/Images/cuh_15.jpg";
import img16 from "../../assets/Images/cuh_16.jpeg";
import img17 from "../../assets/Images/cuh_17.jpg";
import img18 from "../../assets/Images/cuh_18.jpg";
import img19 from "../../assets/Images/cuh_19.jpg";
import img20 from "../../assets/Images/cuh_20.jpg";
import img21 from "../../assets/Images/cuh_21.jpg";
import img22 from "../../assets/Images/cuh_22.jpg";
import img23 from "../../assets/Images/cuh_23.jpg";
import img24 from "../../assets/Images/cuh_24.jpg";
import cuh_vid from "../../assets/video/cuh_logo_vid.mp4";

const Firstpage = () => {
  return (
    <>
      <div className="firstpage">
        <div className="firstpage_container">
          <div className="spons1">
            {" "}
            {/* <img className="logo-img" src={cuhlogo} alt="cuh-logo" />{" "} */}
          </div>
          <div className="paragra">
            <h1 className="firstpage_heading">SSTEPS - 2022</h1>
            <p className="text-part">
              The 1st International Conference on Smart and Sustainable
              Technologies in Energy and Power Sectors (SSTEPS-2022) is being
              organized by the Department of Electrical Engineering, School of
              Engineering and Technology, Central University of Haryana on
              7th-9th Nov, 2022 at Mahendragarh, Haryana, India. SSTEPS-2022
              will provide an international platform for academicians,
              researchers, industrial experts and technocrafts to discuss and
              share progressive achievements, technical developments and
              limitations in the field of power systems, smart grids, renewable
              energy resources, energy for agriculture and rural growth. Eminent
              persons will be invited as keynote speakers to deliver talks on
              progressive trends and developments in the emerging technologies.
              SSTEPS - 2022 gives a venue for the researchers and technocrafts
              to identify the emerging challenges in the energy and power sector
              and to proceed with investigations. All the accepted papers are
              available in IEEE Xplore Digital Library.
            </p>
          </div>

          <div className="spons2">
            {" "}
            {/* <img className="logo-img" src={cuhlogo} alt="cuh-logo" />{" "} */}
            <video className="logo_vid" autoPlay muted loop>
              <source src={cuh_vid}></source>
            </video>
          </div>
        </div>
        <div class="life_cuh">
          <h1>Glimpses of Central University of Haryana (CUH)</h1>
          <div class="cuh_imgs">
            <marquee scrollamount={7}>
              <img src={img1} alt="cuh glimpse" />
              <img src={img2} alt="cuh glimpse" />
              <img src={img3} alt="cuh glimpse" />
              <img src={img4} alt="cuh glimpse" />
              <img src={img5} alt="cuh glimpse" />
              <img src={img6} alt="cuh glimpse" />
              <img src={img7} alt="cuh glimpse" />
              <img src={img8} alt="cuh glimpse" />
              <img src={img9} alt="cuh glimpse" />
              <img src={img10} alt="cuh glimplse" />
              <img src={img11} alt="cuh glimplse" />
              <img src={img12} alt="cuh glimplse" />
              <img src={img13} alt="cuh glimplse" />
              <img src={img14} alt="cuh glimplse" />
              <img src={img15} alt="cuh glimplse" />
              <img src={img16} alt="cuh glimplse" />
              <img src={img17} alt="cuh glimplse" />
              <img src={img18} alt="cuh glimplse" />
              <img src={img19} alt="cuh glimplse" />
              <img src={img20} alt="cuh glimplse" />
              <img src={img21} alt="cuh glimplse" />
              <img src={img22} alt="cuh glimplse" />
              <img src={img23} alt="cuh glimplse" />
              <img src={img24} alt="cuh glimplse" />
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};
export default Firstpage;
