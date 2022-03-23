import { MEDIA_ICONS } from 'constants/assets-constants';
import Target from 'interfaces/target/target-interface';
import { validateLocalSrc } from 'utils';
import './target-list-item.scss';
import topicOptions from 'data/topics.json';

const TargetListItem = ({ title, topicId }: Target) => {
  const topic = topicOptions.find(opt => opt.id === topicId);
  const image = validateLocalSrc(topic!.icon, process.env.PUBLIC_URL + MEDIA_ICONS + topic!.icon);
  return (
    <li className="list-details">
      <img src={image} alt={title + ' icon'} />
      <span>{title}</span>
    </li>
  );
};

export default TargetListItem;
