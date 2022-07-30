import Icons from './Icons';
import './styles/NewBuzz.css';

export default function NewBuzz({ user }) {
  const iconPack = Icons();

  return (
    <div className="newBuzzElement">
      <div>
        <img src={user.profilePicture} alt="" />
      </div>
      <div>
        <div>
          <textarea placeholder="What's happening?"></textarea>
        </div>
        <div>
          <div className="buzzAttach">
            <button>{iconPack.attachImage}</button>
            <button>{iconPack.attachGif}</button>
            <button>{iconPack.poll}</button>
            <button>{iconPack.attachEmoji}</button>
            <button>{iconPack.attachSchedule}</button>
            <button>{iconPack.attachLocation}</button>
          </div>
          <button className="newBuzz">Buzz</button>
        </div>
      </div>
    </div>
  );
}
