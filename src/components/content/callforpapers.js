import React, { useState } from "react";
import "../../styles/content_css/callforpaper.css";
import PageBanner from "../common/pageBanner";
import PaperSubmission from "./papersubmission";

import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";

const CallForPapers = () => {
  const [modalData, setModalData] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const data = [
    {
      topic: "Power Systems",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPprnfujGcluqCYlYnrpWBgTHq-eeDy_YoD-Kg26YkGurYttlVdzSUaZQ_QpbBJaslmU&usqp=CAU",
      subTopics: [
        "Operation & Control of Power System",
        "Grid Flexibility, Resiliency & Security",
        "Power System Protections",
        "Energy Management System",
        "Power System Planning & Reliability",
        "Transactive Energy Markets",
        "Power System Optimization",
        "EV Technologies & Interaction with Grids",
        "High Voltage Engineering",
        "Power Quality Monitoring and Mitigation",
        "Wide Area Monitoring, Control & Automation",
        "Condition Monitoring",
        "Active Distribution Network Management",
      ],
    },
    {
      topic: "Smart grids",
      imgUrl:
        "https://d346xxcyottdqx.cloudfront.net/wp-content/uploads/2018/03/64998842_ml-smart-grid-123rf.jpg",
      subTopics: [
        "Smart Grid Modeling",
        "Artificial Intelligence Applications to Power Systems",
        "Blockchain applications in Smart Grid",
        "Energy Storage Technologies",
        "Cyber Security of Power Grids",
        "Grid Integration of Distributed Energy Sources",
        "Demand Side Management, Home Automation & Smart Buildings",
      ],
    },
    {
      topic: "Signal Processing, Control and Communication Technologies",
      imgUrl:
        "https://media.istockphoto.com/photos/sine-wave-technologies-picture-id178077952?k=20&m=178077952&s=612x612&w=0&h=aCz8BxOP7Xjw0rPLQMTKuyhIIv6CJS9VzfYW5aHJ6QU=",
      subTopics: [
        "Nonlinear Systems, Identification and Signatures",
        "Electrical Quantities, Embedded control Systems and Sensor networks",
        "Cloud Computing, Big Data, and Industrial Informatics",
        "IOT Applications to Smart Grids",
        "Control Applications to Power & Energy Systems",
        "Signal Processing Analytics for Power Systems",
      ],
    },
    {
      topic: "Energy for agriculture and rural development",
      imgUrl: "https://img.saurenergy.com/2016/12/solar-pumps.jpg",
      subTopics: [
        "Solar pump sets",
        "Nanogrids for remote villages",
        "Crop harvesting technologies using renewable energy resources",
        "Food processing and storage technologies powered by renewables",
        "Smart agriculture technologies",
      ],
    },
    {
      topic: "Advanced Power Converters",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7y34ws8zSAvG2vsE-V8Qoeg3AKAfjPyz8j9cE9FajvQ15X2vjF-vFl8I9YtR3ogFb-U&usqp=CAU",
      subTopics: [
        "New Power Converters",
        "Converter Topologies",
        "Modulation Techniques & Control",
        "Application of Power Converters for Transportation/EV/Traction Drives",
        "AC/DC, DC/DC, DC/AC, AC/AC Topologies",
        "Wide Band Gap Devices",
        "Converter technologies for solar PV and Wind power integration",
      ],
    },
    {
      topic: "Renewable Energy Sources",
      imgUrl:
        "https://www.ways2gogreenblog.com/wp-content/uploads/2016/07/renewable_resources.gif",
      subTopics: [
        "Renewable Energy Sources and Technology",
        "Solar/Wind Energy Systems and Its Integration",
        "Distributed Generation and Grid Interconnection",
        "Micro Grid Control and islanding technologies",
        "Integration of Energy Storage Systems",
        "Biomass, Hydrogen based Sources",
        "Energy Harvesting, Green Energy Issues",
        "Battery Technologies",
      ],
    },
  ];

  return (
    <>
      <PageBanner pageTitle="Call for Papers" />

      <div className="callforpaper">
        <div className="call-for-paper-intro">
          <p>
            The SSTEPS 2022 International Conference on Smart and Sustainable
            Technologies in Energy and Power Systems will feature invited talks
            by distinguished Scientists and Engineers as well as Paper
            Presentations and Poster Sessions. Distinguished speakers deliberate
            the latest developments in power and energy sectors for sustainable
            developments. The scope of the conference is as follows but not
            limited to.
          </p>
        </div>
        {data
          ? data.map((topicdetail, idx) => (
              <>
                <div key={idx} className="cfp_cardsa">
                  <div className="cfp_cards">
                    <div className="item uncover">
                      {/* <img
                        className="cfp_img"
                        src={topicdetail.imgUrl}
                        alt="call for paper"
                      /> */}
                      <span>{topicdetail.topic}</span>
                      <div className="overlay">
                        {/* <span>''</span> */}
                        <span>{topicdetail.topic}</span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="button m-2"
                    color="danger"
                    onClick={() => {
                      setShow(true);
                      setModalData(topicdetail);
                    }}
                  >
                    {topicdetail.topic} <span className="click_here">👈</span>
                  </Button>
                </div>
              </>
            ))
          : null}

        {modalData ? (
          <Modal show={show} onHide={handleClose}>
            <ModalHeader toggle={function noRefCheck() {}}>
              {modalData.topic}
            </ModalHeader>
            <ModalBody>
              {modalData.subTopics.map((line) => (
                <li>{line}</li>
              ))}
              {/* {modalData.desc} */}
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </Modal>
        ) : (
          <></>
        )}
      </div>
      <PaperSubmission />
    </>
  );
};

export default CallForPapers;
