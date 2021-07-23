import './styles.scss';
import Container from 'components/container';
import { Button, Col, Input, Row } from 'antd';
import { useAppDispatch } from 'store';

const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <section className="login-container">
        <Row className="form-group">
          <Col>
            <p className="login-logo">UNISON</p>
          </Col>
        </Row>
        <Row className="form-group">
          <Col>
            <label className="label">Username</label>
            <Input
              className="login-action"
              placeholder="Enter username"
              // value={form.name}
              onChange={e => console.log(e)}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col>
            <label className="label">Password</label>
            <Input.Password
              className="login-action"
              placeholder="Enter password"
              // value={form.name}
              onChange={e => console.log(e)}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col>
            <Button type="primary" className="login-button" onClick={() => console.log('login')}>
              Login
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default LoginPage;
