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
import { mockNodes } from 'modules/nodes/mock-data';

const EntityControlPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [userAction, setUserAction] = useState<UserAction>(UserAction.Add);

  useEffect(() => {
    if (isNil(id) && userAction !== UserAction.Add) {
      setUserAction(UserAction.Add);
    } else if (userAction !== UserAction.Edit) {
      setUserAction(UserAction.Edit);
    }
  }, [id]);

  const [tmpSelected, setTmpSelected] = useState<number>();

  const handleMenuClick = (e: MenuInfo): void => {
    const selectedNode = mockNodes.find((node: any) => node.id === Number(e.key))?.id;
    setTmpSelected(selectedNode);
  };

  const options: DropdownMenuItem[] = mockNodes.map(node => ({ id: node.id, name: node.name }));

  return (
    <>
      <Row className="form-group">
        <Col span={12}>
          <label className="label">Instance Id</label>
          <Input placeholder="Enter instance id" />
        </Col>
      </Row>
      <Row className="form-group">
        <Col span={12}>
          <label className="label">Parent Node</label>
          <Dropdown
            options={options}
            selected={tmpSelected}
            label="Node"
            placeholder="Select Nodes"
            handleClick={handleMenuClick}
          />
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

export default EntityControlPage;
