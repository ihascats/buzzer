import './App.css';
import Content from './components/Content';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="wrapper">
      <LeftSideBar />
      <Content />
      <RightSideBar />
    </div>
  );
}

export default App;
