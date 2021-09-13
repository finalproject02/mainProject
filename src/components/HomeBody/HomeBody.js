import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const HomeBody = () => {
  const founder = {
    url: "https://www.lus.ac.bd/wp-content/uploads/2020/01/chairman.jpg",
    name: "Danobir Dr. Syed Ragib Ali",
    title: "Founder & Chairman, Board of Trustees, Leading University, Sylhet",
    message:
      "It is my privilege to welcome faculty members, officers and staff, students and guardians to Leading University. Since its inception, the University endeavors to impart internationally standard tertiary education for the students at an affordable cost and exerts its attempt to disseminate expertise knowledge at home and abroad relentlessly. In essence, the missions and visions of this university are attributed to the production of competent and skilled manpower so as to expedite collective development of the country and it is my chance to underscore here that Leading University makes its progress on that direction. As a matter of fact, Leading University enjoys its international reputation through various prestigious employment patterns of its graduates and vows to continue for augmentation yet further. Indeed, Leading University attempts not only to create bona fide denizens of the land but it also cherishes to embed knowledge of extra-curricular activities in the mindsets of the students and as a citadel of liberal cum ultra-modern knowledge, this university seeks to make rooms for morally enlightened education.",
  };
  const vc = {
    url: "https://www.lus.ac.bd/wp-content/uploads/2021/03/Qazi-Azizul-Mowla.jpg",
    name: "Prof. Qazi Azizul Mowla, PhD, FIAB, AAG",
    title: "Vice-Chancellor",
    message:
      "I would like to warmly welcome all to Leading University. The vision of LU is to produce professionally competent and accomplished graduates who will be able to encounter any challenges at home and abroad, to contribute significantly to the human development. The missions of the LU are to provide internationally comparable education at a reasonable cost in a range of programs that are particularly relevant to societal needs, to offer opportunities and expertise to the students so that they can achieve their goals, to gain confidence of all stakeholders through Key Performance Indicators (KPI). Leading University is a higher education institute that boosts capacity in generating and sharing knowledge, skills and attitudes as recognised nationally and globally, making important contributions to development of the country. Leading University is characterised of a congenial academic environment where inspired intellect, high morals and social responsibilities are focused. Being in the bulk of challenges, LU addresses the multidimensional requirements of the job markets through smooth employment patterns. As it emphasises on interdisciplinary, cross disciplinary and international collaboration, it has establishes network with other institutions and organisations, where such partnerships can lead to cutting-edge research and teaching. The programs are designed based on the needs of the industry and society. Moreover, the nature of the courses of the programs that LU offers is diversified, skills-based and career oriented where the students have an ample access to hands-on training, seminars, dissertation and monograph with a view to achieving the mapped Program Educational Objectives (PEOs) and Program Learning Outcomes (PLOs). Intended Learning Outcomes (ILOs) of each course are rationally extracted for students applying domains of knowledge. The faculty members of Leading University with higher degrees (Ph.D./M.Phil.) are professionally competent and highly trained in quality teaching and assessment. The curricula of the programs at Leading University are designed to be fit for and of the purposes for job markets while producing capable graduates with generic skills. The LU takes its pride while completing an external peer review (EPR) system for the programs of LU through a rigorous academic process. The continuous process management for quality higher education is the crux of the matter of the University.",
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md="8">
          <Row>
            <Col md="6">
              <WelcomeMessage
                url={founder.url}
                name={founder.name}
                title={founder.title}
                message={founder.message}
              ></WelcomeMessage>
            </Col>
            <Col md="6">
              <WelcomeMessage
                url={vc.url}
                name={vc.name}
                title={vc.title}
                message={vc.message}
              ></WelcomeMessage>
            </Col>
          </Row>
        </Col>
        <Col md="4"></Col>
      </Row>
    </Container>
  );
};

export default HomeBody;
