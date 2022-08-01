import './styles/Popup.css';
import { user } from '../firebase.config';

export default function Popup({ top, right, bottom, left, logOut }) {
  function userLogout() {
    user.setName(undefined);
    user.setPicture(undefined);
    logOut();
  }

  return (
    <div style={{ inset: top, right, bottom, left }} className="popup">
      <button onClick={userLogout}>Log out</button>
    </div>
  );
}
