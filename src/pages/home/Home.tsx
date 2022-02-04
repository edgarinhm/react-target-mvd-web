import './home.scss';
const Home = () => {
  return (
    <div className="home-left">
      <div className="menu-icon"></div>
      <div className="smilies">
        <div className="oval-2"></div>
        <div className="oval-2-copy"></div>
      </div>
      <div className="target-mvd">TARGET MVD</div>
      <div className="form">
        <div className="sign-up"></div>
      </div>
      <div className="info">
        <div className="adress">Find people near you & Connect</div>
        <div className="text">
          Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and
          start conecting with others who share your interest.
        </div>
      </div>
    </div>
  );
};

export default Home;
