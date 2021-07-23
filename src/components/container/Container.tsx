import './styles.scss';
import { ContainerProps } from './types';

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;

  return (
    <section className="page">
      <div className="container">{children}</div>
    </section>
  );
};

export default Container;
