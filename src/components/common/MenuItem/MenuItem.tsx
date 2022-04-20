import { useAppDispatch, useAppSelector } from 'hooks';
import { setHomeSidebar } from 'state/actions/home-actions';
import './menu-item.scss';

interface MenuItemProps {
  variant?: string;
}

const MenuItem = ({ variant }: MenuItemProps) => {
  const dispatch = useAppDispatch();
  const { activeSidebar } = useAppSelector(state => state.homeReducer);
  const handleOnClick = () => {
    dispatch(setHomeSidebar(!activeSidebar));
  };
  return (
    <div
      aria-hidden="true"
      onClick={handleOnClick}
      className={variant ? variant + ' menu-item' : 'menu-item'}
    >
      <div className="path"></div>
      <div className="path"></div>
      <div className="path"></div>
    </div>
  );
};

export default MenuItem;
