// import { useEffect } from 'react';
import { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      history.push('/mynotes');
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Notes App</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttoncontainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
