import React from "react";
import "../../styles/content_css/papersubmission.css";
import PageBanner from "../common/pageBanner";
import Table from "react-bootstrap/Table";
import qr_code from "../../assets/Images/qr_code.jpeg";

const PaperSubmission = () => {
  return (
    <>
      <PageBanner pageTitle="Paper Submission" />
      <p className="subimission-guidelines">
        Submissions must be original and should not have been published
        previously or be under consideration for publication while being
        evaluated for this Conference. The full manuscript must be submitted in
        IEEE format as Latex/Microsoft word. Paper length should be a maximum of
        6 pages. Papers submitted in the conference will undergo a rigorous and
        peer review process. Authors are requested not to include
        author/co-author(s) names in the manuscript for initial submission. All
        presented papers will be published in IEEE Xplore indexed in Scopus.
      </p>
      <div className="paper-submission-qr">
        <p>Scan the QR code to download the template</p>
        <img src={qr_code} alt="QR Code" />
        <p>
          <span>Note:</span>Do not temper the prescribed style and formatting.
          Working language is recommended as (US or UK) English
        </p>
      </div>
      <FeeandOnlineReg />
      {/* <div className="papersubmission_main">
        <h3 className="head_author"> Author's Guidelines</h3>
        <p className="para_author">
          {" "}
          Prospective authors are invited to submit full papers (maximum 6 pages
          in IEEE template) in PDF format. The conference paper template can be
          downloaded{" "}
          <a className="atag" href="#">
            here
          </a>
          . Do not temper the prescribed style and formatting. Further details,
          please visit conference website
        </p>
        <h3 className="head_workinglan">Working Language</h3>
        <p className="para_workinglan">
          The working languages of the conference are US or UK English, which
          will be used for all printed material from submission to publication
          and during presentations and discussion as well.
        </p>
        <h3 className="link_paersub">
          For paper submission please{" "}
          <a className="atag" href="#">
            click here
          </a>
        </h3>
      </div>
      */}
    </>
  );
};
export default PaperSubmission;

const FeeandOnlineReg = () => {
  return (
    <>
      <PageBanner pageTitle="Fee and Online Registration" />
      <div className="feeandonline_main">
        <div className="table_feeandonline">
          <Table
            style={{ textAlign: "center" }}
            responsive
            className="table"
            striped
            hover
            bordered
            size="sm"
          >
            <thead>
              <tr>
                <th></th>
                <th colSpan={2}>Standard Registration</th>
                <th colSpan={2}>Additional papers</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th></th>
                <th>Indian Author (INR)</th>
                <th>International Author (USD)</th>
                <th>Indian Author (INR)</th>
                <th>International Author (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Regular Authors</th>
                <td>8,500/-</td>
                <td>200</td>
                <td>1,000/- Per Page</td>
                <td>20 (USD) - Per Page</td>
              </tr>
              <tr>
                <th>IEEE Members</th>
                <td>7,500/-</td>
                <td>150</td>
                <td>1,000/- Per Page</td>
                <td>20 (USD) - Per Page</td>
              </tr>
              <tr>
                <th>IEEE Student Member</th>
                <td>7,000/-</td>
                <td>100</td>
                <td>1,000/- Per Page</td>
                <td>20 (USD) - Per Page</td>
              </tr>
              <tr>
                <th>Participation without paper</th>
                <td>1,500/-</td>
                <td>20 </td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="feeandonline-body">
          {/* <p className="para_feeandonline">
            Additional paper discount is applicable only for regular authors.
            Only one discounted registration is allowed for one IEEE student
            member. Two discounted registrations are allowed for IEEE members.
            For additional pages, Rs. 1000/- (20 USD) is charged for each page
            across all categories.
          </p> */}
          <h4 className="head_feeandonline">
            Registration:{" "}
            <a href="#" className="atag">
              Link will be updated soon
            </a>
          </h4>
        </div>
      </div>
    </>
  );
};
