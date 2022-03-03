import footballIcon from 'assets/layout/icons/football-icon.svg';
import travelIcon from 'assets/layout/icons/travel-icon.svg';
import musicIcon from 'assets/layout/icons/music-icon.svg';
import './home-empty-state.scss';

const HomeEmptyState = () => {
  return (
    <>
      <p className="home-empty-state-h2 home-empty-state-p">
        Create your first target by clicking wherever on the map.
      </p>
      <p className="home-empty-state-h3 home-empty-state-p">
        Psss!, these are the most popular targets:
      </p>
      <div className="list">
        <li className="list-details">
          <img src={footballIcon} alt="football icon" />
          <span>Football</span>
        </li>
        <li className="list-details">
          <img src={travelIcon} alt="travel icon" />
          <span>Travel</span>
        </li>
        <li className="list-details">
          <img src={musicIcon} alt="music icon" />
          <span>Music</span>
        </li>
      </div>
    </>
  );
};

export default HomeEmptyState;
