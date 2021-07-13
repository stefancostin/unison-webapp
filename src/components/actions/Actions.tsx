import { Space } from 'antd';
import { Link } from 'react-router-dom';
import { ActionsProps } from './types';

export const Actions = (props: ActionsProps): JSX.Element => {
  const { id, handleDelete } = props;

  return (
    <Space size="middle">
      <Link to={`${window.location.pathname}/${id}/edit`}>Edit</Link>
      <span className="danger-action" onClick={() => handleDelete(id)}>
        Delete
      </span>
    </Space>
  );
};

export default Actions;
