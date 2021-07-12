/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Input, Row } from 'antd';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserAction } from 'types/ui-actions/UserAction';

const { TextArea } = Input;

const NodeControlPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [userAction, setUserAction] = useState<UserAction>(UserAction.Add);

  useEffect(() => {
    if (isNil(id) && userAction !== UserAction.Add) {
      setUserAction(UserAction.Add);
    } else if (userAction !== UserAction.Edit) {
      setUserAction(UserAction.Edit);
    }
  }, [id]);

  return (
    <>
      <Row className="form-group">
        <Col span={12}>
          <label className="label">Node Name</label>
          <Input placeholder="Enter node name" />
        </Col>
      </Row>
      <Row className="form-group">
        <Col span={12}>
          <label className="label">Node Description</label>
          <TextArea placeholder="Enter node description" rows={4} />
        </Col>
      </Row>
      <Row className="form-group">
        <Col>
          <Button type="primary">Save</Button>
        </Col>
      </Row>
    </>
  );
};

export default NodeControlPage;
