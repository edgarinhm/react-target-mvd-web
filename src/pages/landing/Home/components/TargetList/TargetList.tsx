import Target from 'interfaces/target/target-interface';
import TargetListItem from '../TargetListItem';
import './target-list.scss';

const TargetList = ({ targets }: TargetListProps) => {
  const targetItems = targets.map((target, index) => (
    <TargetListItem
      key={target.title + index}
      title={target.title}
      topicId={target.topicId}
      lat={target.lat}
      lng={target.lng}
      radius={target.radius}
      id={target.id}
    />
  ));

  return <div className="list">{targetItems}</div>;
};

interface TargetListProps {
  targets: Target[];
}

export default TargetList;
