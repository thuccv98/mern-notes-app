import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        position: 'relative',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#158cba',
        color: '#333',
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Thuc Cao</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
