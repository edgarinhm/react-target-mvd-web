import { Target } from 'interfaces/target/target-interface';
import TargetListItem from '../TargetListItem';
import './target-list.scss';

const TargetList = ({ targets }: TargetListProps) => {
  const targetItems = targets.map((target, index) => (
    <TargetListItem key={index} icon={target.icon} title={target.title} />
  ));

  return <div className="list">{targetItems}</div>;
};

interface TargetListProps {
  targets: Target[];
}

export default TargetList;
