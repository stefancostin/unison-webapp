/* eslint-disable react-hooks/exhaustive-deps */
import Dropdown from 'components/dropdown';
import { Button, Col, Input, Row } from 'antd';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import { UserAction } from 'types/ui-actions/UserAction';
import { DropdownMenuItem } from 'components/dropdown/types';
import {
  addAgentFormAction,
  clearAgentFormAction,
  getAgentFormAction,
  setAgentFormAction,
  updateAgentFormAction,
} from 'store/actions/agent-form-actions';
import { useAppDispatch, useAppSelector } from 'store';
import { getAgentFormSelector } from 'store/selectors/agent-form-selector';
import { getNodeListSelector } from 'store/selectors/node-list-selector';
import { Node } from 'types/nodes/Node';
import { getNodeListAction } from 'store/actions/node-list-actions';

const AgentControlPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const [userAction, setUserAction] = useState<UserAction>(UserAction.Add);

  const form = useAppSelector(getAgentFormSelector);
  const nodes = useAppSelector(getNodeListSelector);

  useEffect(() => {
    dispatch(clearAgentFormAction());
    return () => {
      dispatch(clearAgentFormAction());
    };
  }, []);

  useEffect(() => {
    if (isNil(id)) {
      setUserAction(UserAction.Add);
      dispatch(getNodeListAction());
    } else {
      setUserAction(UserAction.Edit);
      dispatch(getAgentFormAction(Number(id)));
    }
  }, [id]);

  const handleMenuClick = (e: MenuInfo): void => {
    const selectedNode = nodes.find((node: Node) => node.id === Number(e.key));
    dispatch(setAgentFormAction({ node: selectedNode }));
  };

  const options: DropdownMenuItem[] = nodes.map(node => ({ id: node.id, name: node.name }));

  const handleSave = (): void => {
    if (userAction === UserAction.Add) {
      dispatch(addAgentFormAction(form));
    } else if (userAction === UserAction.Edit) {
      dispatch(updateAgentFormAction(form));
    }
  };

  return (
    <>
      <Row className="form-group">
        <Col span={12}>
          <label className="label">Instance Id</label>
          <Input
            placeholder="Enter instance id"
            value={form.instanceId}
            onChange={e => dispatch(setAgentFormAction({ instanceId: e.target.value }))}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col span={12}>
          <Dropdown
            options={options}
            selected={form.node?.id}
            label="Parent Node"
            placeholder="Select Node"
            handleClick={handleMenuClick}
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

export default AgentControlPage;
