import './styles.scss';
import { Button, Input, List } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { FieldListProps } from './types';
import { useState } from 'react';
import { toSortedSet } from 'utilities/collections';

export const FieldList = (props: FieldListProps): JSX.Element => {
  const { data, handleChange } = props;

  const [newField, setNewField] = useState<string>();

  const dataSet = toSortedSet(data);

  const handleAdd = () => {
    const changes = toSortedSet([...dataSet, newField]);
    handleChange(changes);
    setNewField(null);
  };

  const handleDelete = (item: any) => {
    handleChange(dataSet.filter(d => d !== item));
  };

  const addNewFieldAction: JSX.Element = (
    <div className="add-action-container">
      <Input placeholder="Enter a new field" value={newField} onChange={e => setNewField(e.target.value)} />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );

  return (
    <List
      size="small"
      footer={addNewFieldAction}
      bordered
      dataSource={dataSet}
      renderItem={item => (
        <List.Item actions={[<CloseCircleOutlined className="delete-action" onClick={() => handleDelete(item)} />]}>
          {item}
        </List.Item>
      )}
    />
  );
};

export default FieldList;
