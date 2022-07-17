import './styles/LeftSideBar.css';

export default function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <div className="lsbTop">
        <div className="logo"></div>
        <div className="navigation">
          <div className="buttons"></div>
        </div>
        <button className="buzz"></button>
      </div>
      <div className="lsbBottom">
        <div className="logout"></div>
      </div>
    </div>
  );
}
