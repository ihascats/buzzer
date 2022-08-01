// eslint-disable-next-line no-unused-vars
import Buzz from './Buzz';
import NewBuzz from './NewBuzz';
import './styles/Content.css';

export default function Content({ loggedIn }) {
  return (
    <div className="content">
      <div className="heading">
        <p className="title">Home</p>
      </div>
      <div className="items">
        {loggedIn ? <NewBuzz /> : null}

        {/* user, time, text, image */}
      </div>
    </div>
  );
}
