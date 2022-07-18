import Icons from './Icons';

export default function LogoutButton({ userImage, username, userAt }) {
  const iconPack = Icons();

  function popup(event) {
    const coordinates = event.target.getBoundingClientRect();
    // make a new element at coordinates
  }

  return (
    <button onClick={popup} className="logout">
      <div className="userPfp">
        <img src={userImage} alt="" />
      </div>

      <div className="user">
        <div className="username">{username}</div>
        <div className="userAt">{userAt}</div>
      </div>
      <div className="dots">{iconPack.threeDots}</div>
    </button>
  );
}
