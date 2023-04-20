
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/NicholasMorganDev/quiz-app";
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>
              <small>&copy; Nicholas Morgan {currentYear}</small>
              <br />
              <a href={githubLink} target="_blank" rel="noreferrer">Code in
              Github</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
