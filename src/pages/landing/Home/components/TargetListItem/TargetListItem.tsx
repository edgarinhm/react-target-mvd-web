import { MEDIA_ICONS } from 'constants/assets-constants';
import { Target } from 'interfaces/target/target-interface';
import { validateLocalSrc } from 'utils';
import './target-list-item.scss';

const TargetListItem = ({ icon, title }: Target) => {
  const image = validateLocalSrc(icon, process.env.PUBLIC_URL + MEDIA_ICONS + icon);
  return (
    <li className="list-details">
      <img src={image} alt={title + ' icon'} />
      <span>{title}</span>
    </li>
  );
};

export default TargetListItem;
