import './styles.scss';
import Container from 'components/container';
import sendNotification from 'services/notification-service';
import { Button, Col, Input, Row } from 'antd';
import { useAppDispatch } from 'store';
import { useState } from 'react';
import { isEmpty } from 'lodash';
import { authenticateAccountAction } from 'store/actions/account-actions';

const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSave = (): void => {
    if (isEmpty(username) || isEmpty(password)) {
      sendNotification('Incomplete Credentials', 'Both username and password must be provided', false);
      return;
    }
    dispatch(authenticateAccountAction({ username, password }));
  };

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
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col>
            <label className="label">Password</label>
            <Input.Password
              className="login-action"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col>
            <Button type="primary" className="login-button" onClick={handleSave}>
              Login
            </Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default LoginPage;
