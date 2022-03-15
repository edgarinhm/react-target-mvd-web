import './menu-item.scss';

interface MenuItemProps {
  variant?: string;
}

const MenuItem = ({ variant }: MenuItemProps) => {
  return (
    <div className={variant ? variant + ' menu-item' : 'menu-item'}>
      <div className="path"></div>
      <div className="path"></div>
      <div className="path"></div>
    </div>
  );
};

export default MenuItem;
