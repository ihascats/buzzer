import { useState } from 'react';
import Icons from './Icons';
import Popup from './Popup';

export default function LogoutButton({ userImage, username, userAt }) {
  const iconPack = Icons();
  const [popup, setPopup] = useState(false);
  const [resize, setResize] = useState(false);

  function popupState() {
    setPopup(!popup);
  }

  const logout = document.querySelector('.logout');
  let logoutCoords;
  if (logout) {
    logoutCoords = logout.getBoundingClientRect();
  }

  window.onresize = () => {
    setResize(!resize);
  };
  if (popup) {
    window.onclick = (event) => {
      if (event.target === logout || logout.contains(event.target)) return;
      popupState();
      window.onclick = null;
    };
  }

  return (
    <div onClick={popupState} className="logout">
      <div className="userPfp">
        <img src={userImage} alt="" />
      </div>

      <div className="user">
        <div className="username">{username}</div>
        <div className="userAt">{userAt.replace(' ', '_')}</div>
      </div>
      <div className="dots">{iconPack.threeDots}</div>
      {popup ? (
        <Popup
          top={logoutCoords.top - 90 + 'px'}
          right={logoutCoords.right + 'px'}
          bottom={logoutCoords.bottom + 'px'}
          left={logoutCoords.left + 'px'}
        />
      ) : null}
    </div>
  );
}
