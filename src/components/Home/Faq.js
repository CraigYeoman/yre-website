import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="px-sm-4 bg-light">
    <Accordion className="p-5">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">FAQ</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I purchase an engine?</Accordion.Header>
        <Accordion.Body>
          We require a deposit of half of the engine cost. Final payment must
          either be cash or cashier's check.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What is the lead time on my engine purchase?
        </Accordion.Header>
        <Accordion.Body>
          This varies on the time of year. It can be between 3 weeks and during
          busy season 3 months.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          How often do I have to have my motor refreshened?
        </Accordion.Header>
        <Accordion.Body>
          Depending on the engine/track size usually between 800-1200 laps.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default Faq;
