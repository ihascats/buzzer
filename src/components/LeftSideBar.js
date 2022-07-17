import Icons from './Icons';
import './styles/LeftSideBar.css';
export default function LeftSideBar() {
  const iconPack = Icons();

  return (
    <div className="leftSideBar">
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

        <button className="buzz">Buzz</button>
      </div>

      <div className="lsbBottom">
        <div className="logout"></div>
      </div>
    </div>
  );
}
