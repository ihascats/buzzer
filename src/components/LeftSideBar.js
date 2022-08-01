import { useState } from 'react';
import Icons from './Icons';
import LogoutButton from './LogoutButton';
import NewBuzz from './NewBuzz';
import './styles/LeftSideBar.css';
import { user } from '../firebase.config';
import SignIn from './SignIn';

export default function LeftSideBar() {
  const iconPack = Icons();
  const [createNewBuzz, setCreateNewBuzz] = useState(false);
  const [logIn, setLogIn] = useState(false);

  // const user = {
  //   profilePicture:
  //     'https://pbs.twimg.com/profile_images/1548229654598651904/BckO7e-N_400x400.jpg',
  //   name: 'Soli',
  //   at: 'ihas_cats',
  // };

  function logInStatus() {
    const status = !logIn;
    setLogIn(status);
  }

  function overlayStatusTrue() {
    setCreateNewBuzz(true);
  }
  function overlayStatusFalse(event) {
    if (
      event.target.classList[0] === 'overlay' ||
      event.target.classList[0] === 'close' ||
      event.target.parentElement.classList[0] === 'close' ||
      event.target.parentElement.parentElement.classList[0] === 'close'
    )
      setCreateNewBuzz(false);
  }

  const newBuzzOverlay = (
    <div onClick={overlayStatusFalse} className="overlay">
      <div>
        <button onClick={overlayStatusFalse} className="close">
          {iconPack.close}
        </button>
        <NewBuzz user={user} />
      </div>
    </div>
  );

  return (
    <div className="leftSideBar">
      <div className="leftContainer">
        <div className="lsbTop">
          <button className="logo">{iconPack.bee}</button>

          <div className="navigation">
            <button>{iconPack.home}Home</button>
            <button>{iconPack.hashtag}Explore</button>
            <button>{iconPack.bell}Notifications</button>
            <button>{iconPack.mail}Messages</button>
            <button>{iconPack.bookmark}Bookmarks</button>
            <button>{iconPack.account}Profile</button>
            <button>{iconPack.more}More</button>
          </div>

          <button onClick={overlayStatusTrue} className="newBuzz">
            Buzz
          </button>
        </div>

        <div className="lsbBottom">
          {logIn ? (
            <LogoutButton
              userImage={user.picture}
              username={user.name}
              userAt={`@${user.name}`}
              logOut={logInStatus}
            />
          ) : (
            <SignIn logIn={logInStatus} />
          )}
        </div>
      </div>
      {createNewBuzz ? newBuzzOverlay : null}
    </div>
  );
}
