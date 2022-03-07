import './home-empty-state.scss';
import TargetList from '../TargetList';
import targets from 'data/targets.json';

const HomeEmptyState = () => {
  return (
    <>
      <p className="home-empty-state-h2 home-empty-state-p">
        Create your first target by clicking wherever on the map.
      </p>
      <p className="home-empty-state-h3 home-empty-state-p">
        Psss!, these are the most popular targets:
      </p>
      <TargetList targets={targets} />
    </>
  );
};

export default HomeEmptyState;
