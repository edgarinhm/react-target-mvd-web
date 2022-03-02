import avartarOne from 'assets/layout/avatars/avatar1.png';
import avartarTwo from 'assets/layout/avatars/avatar2.png';
import avartarThree from 'assets/layout/avatars/avatar3.png';
import avartarFour from 'assets/layout/avatars/avatar4.png';
import worldIcon from 'assets/layout/icons/world-icon.svg';
import filmIcon from 'assets/layout/icons/film-icon.svg';
import tvIcon from 'assets/layout/icons/tv-icon.svg';
import './chats.scss';

const Chats = () => {
  return (
    <>
      <h3 className="chat-title">Chat</h3>
      <div className="grid chats">
        <div className="chat-details chat-details-first">
          <img className="avatar-chat" src={avartarOne} alt="avatar one" />
          <div className="group-chats">
            <span>
              <strong>José Gazzano</strong>
            </span>
            <span>¡Hola! A dónde querés viajar?</span>
          </div>
          <div className="group-icon">
            <img className="icon" src={worldIcon} alt="world icon" />
            <div className="icon-badge">2</div>
          </div>
        </div>
      </div>
      <div className="grid chats">
        <div className="chat-details">
          <img className="avatar-chat" src={avartarTwo} alt="avatar one" />
          <div className="group-chats">
            <span>
              <strong>Karen Bauer</strong>
            </span>
            <span>¿Alguna película para recomendar?</span>
          </div>
          <div>
            <img className="icon" src={filmIcon} alt="film icon" />
            <div className="icon-badge">2</div>
          </div>
        </div>
      </div>
      <div className="grid chats">
        <div className="chat-details">
          <img className="avatar-chat" src={avartarThree} alt="avatar one" />
          <div className="group-chats">
            <span>
              <strong>JP Mazza</strong>
            </span>
            <span>¡Hola! ¿Cuál es tu serie de TV favorita?</span>
          </div>
          <div>
            <img className="icon" src={tvIcon} alt="film icon" />
          </div>
        </div>
      </div>
      <div className="grid chats">
        <div className="chat-details">
          <img className="avatar-chat" src={avartarFour} alt="avatar one" />
          <div className="group-chats">
            <span>
              <strong>Belu Iglesias</strong>
            </span>
            <span>Te gustó el último disco de NOFX?</span>
          </div>
          <div>
            <img className="icon" src={tvIcon} alt="film icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
