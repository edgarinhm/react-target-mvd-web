import { MEDIA_ICONS } from 'constants/assets-constants';
import { Target } from 'interfaces/target/target-interface';
import { validateLocalSrc } from 'utils';
import './target-list-item.scss';

const TargetListItem = ({ icon, description }: Target) => {
  const image = validateLocalSrc(icon, process.env.PUBLIC_URL + MEDIA_ICONS + icon);
  return (
    <li className="list-details">
      <img src={image} alt={description + ' icon'} />
      <span>{description}</span>
    </li>
  );
};

export default TargetListItem;
