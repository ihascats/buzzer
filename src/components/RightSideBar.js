import Icons from './Icons';
import './styles/RightSideBar.css';

export default function RightSideBar() {
  const iconPack = Icons();

  function searchActive() {
    const searchBar = document.querySelector('.searchBar');
    const svg = document.querySelector('.searchBar > div > svg');
    searchBar.classList.add('active');
    svg.style.fill = 'rgb(0, 192, 80)';
  }

  function searchInactive() {
    const searchBar = document.querySelector('.searchBar');
    const svg = document.querySelector('.searchBar > div > svg');
    searchBar.classList.remove('active');
    svg.style.fill = '#8ba2b1';
  }

  return (
    <div className="rightSideBar">
      <div className="rightContainer">
        <div className="searchBar">
          <div>{iconPack.search}</div>
          <input
            onFocus={searchActive}
            onBlur={searchInactive}
            type="search"
            placeholder="Search Buzzer"
          ></input>
        </div>
      </div>
    </div>
  );
}
