import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function logStatus() {
    const log = !loggedIn;
    setLoggedIn(log);
  }
  return (
    <div className="wrapper">
      <LeftSideBar loggedIn={loggedIn} logStatus={logStatus} />
      <Content loggedIn={loggedIn} logStatus={logStatus} />
      <RightSideBar />
    </div>
  );
}

export default App;
