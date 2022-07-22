import Icons from './Icons';
import LogoutButton from './LogoutButton';
import './styles/LeftSideBar.css';
export default function LeftSideBar() {
  const iconPack = Icons();

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

          <button className="newBuzz">Buzz</button>
        </div>

        <div className="lsbBottom">
          <LogoutButton
            userImage={
              'https://pbs.twimg.com/profile_images/1548229654598651904/BckO7e-N_400x400.jpg'
            }
            username={'Soli'}
            userAt={'@ihas_cats'}
          />
        </div>
      </div>
    </div>
  );
}
