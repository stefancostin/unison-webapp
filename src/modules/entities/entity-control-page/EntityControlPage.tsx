/* eslint-disable react-hooks/exhaustive-deps */
import Dropdown from 'components/dropdown';
import { Node } from 'types/nodes/Node';
import { Button, Col, Input, Row } from 'antd';
import { isNil } from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';
import { UserAction } from 'types/user-actions/UserAction';
import { DropdownMenuItem } from 'components/dropdown/types';
import { useAppDispatch, useAppSelector } from 'store';
import { getNodeListSelector } from 'store/selectors/node-list-selector';
import { getNodeListAction } from 'store/actions/node-list-actions';
import {
  addEntityFormAction,
  clearEntityFormAction,
  getEntityFormAction,
  setEntityFormAction,
  updateEntityFormAction,
} from 'store/actions/entity-form-actions';
import { getEntityFormSelector } from 'store/selectors/entity-form-selector';
import FieldList from 'components/field-list';

const EntityControlPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const [userAction, setUserAction] = useState<UserAction>(UserAction.Add);

  const form = useAppSelector(getEntityFormSelector);
  const nodes = useAppSelector(getNodeListSelector);

  useEffect(() => {
    dispatch(clearEntityFormAction());
    return () => {
      dispatch(clearEntityFormAction());
    };
  }, []);

  useEffect(() => {
    if (isNil(id)) {
      setUserAction(UserAction.Add);
      dispatch(getNodeListAction());
    } else {
      setUserAction(UserAction.Edit);
      dispatch(getEntityFormAction(Number(id)));
    }
  }, [id]);

  const handleMenuClick = (e: MenuInfo): void => {
    const selectedNode = nodes.find((node: Node) => node.id === Number(e.key));
    dispatch(setEntityFormAction({ node: selectedNode }));
  };

  const handleFieldChanges = (fields: string[]): void => {
    dispatch(setEntityFormAction({ fields: fields }));
  };

  const options: DropdownMenuItem[] = nodes.map(node => ({ id: node.id, name: node.name }));

  const handleSave = (): void => {
    if (userAction === UserAction.Add) {
      dispatch(addEntityFormAction(form));
    } else if (userAction === UserAction.Edit) {
      dispatch(updateEntityFormAction(form));
    }
  };

  return (
    <>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <label className="label">Entity Name</label>
          <Input
            placeholder="Enter entity name"
            value={form.entity}
            onChange={e => dispatch(setEntityFormAction({ entity: e.target.value }))}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <label className="label">Entity Primary Key</label>
          <Input
            placeholder="Enter entity primary key"
            value={form.primaryKey}
            onChange={e => dispatch(setEntityFormAction({ primaryKey: e.target.value }))}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <label className="label">Entity Fields</label>
          <FieldList data={form.fields} handleChange={(fields: string[]) => handleFieldChanges(fields)} />
        </Col>
      </Row>
      <Row className="form-group">
        <Col sm={24} md={12} lg={8} xxl={4}>
          <Dropdown
            options={options}
            selected={form.node?.id}
            label="Entity Node"
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

export default EntityControlPage;
