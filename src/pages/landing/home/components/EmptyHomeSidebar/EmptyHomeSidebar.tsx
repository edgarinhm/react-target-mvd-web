import './empty-home-sidebar.scss';
import TargetList from '../TargetList';
import targets from 'data/targets.json';

const EmptyHomeSidebar = () => {
  return (
    <>
      <div className=" empty-sidebar empty-sidebar-h2">
        Create your first target by clicking wherever on the map.
      </div>
      <div className=" empty-sidebar empty-sidebar-h3">
        Psss!, these are the most popular targets:
      </div>
      <TargetList targets={targets} />
    </>
  );
};

export default EmptyHomeSidebar;
