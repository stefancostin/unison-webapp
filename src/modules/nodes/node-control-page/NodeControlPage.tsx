/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Input, Row } from 'antd';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import {
  addNodeFormAction,
  clearNodeFormAction,
  getNodeFormAction,
  setNodeFormAction,
  updateNodeFormAction,
} from 'store/actions/node-form-actions';
import { getNodeFormSelector } from 'store/selectors/node-form-selector';
import { UserAction } from 'types/user-actions/UserAction';

const { TextArea } = Input;

const NodeControlPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const [userAction, setUserAction] = useState<UserAction>(UserAction.Add);

  const form = useAppSelector(getNodeFormSelector);

  useEffect(() => {
    dispatch(clearNodeFormAction());
    return () => {
      dispatch(clearNodeFormAction());
    };
  }, []);

  useEffect(() => {
    if (isNil(id)) {
      setUserAction(UserAction.Add);
    } else {
      setUserAction(UserAction.Edit);
      dispatch(getNodeFormAction(Number(id)));
    }
  }, [id]);

  const handleSave = (): void => {
    if (userAction === UserAction.Add) {
      dispatch(addNodeFormAction(form));
    } else if (userAction === UserAction.Edit) {
      dispatch(updateNodeFormAction(form));
    }
  };

  return (
    <>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <label className="label">Node Name</label>
          <Input
            placeholder="Enter node name"
            value={form.name}
            onChange={e => dispatch(setNodeFormAction({ name: e.target.value }))}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <label className="label">Node Description</label>
          <TextArea
            placeholder="Enter node description"
            rows={4}
            value={form.description}
            onChange={e => dispatch(setNodeFormAction({ description: e.target.value }))}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NodeControlPage;
