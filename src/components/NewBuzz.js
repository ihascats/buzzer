import Icons from './Icons';
import './styles/NewBuzz.css';

export default function NewBuzz({ user }) {
  const iconPack = Icons();
  window.onload = () => {
    // code from https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        'style',
        'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;',
      );
      tx[i].addEventListener('input', OnInput, false);
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight - 20 + 'px';
    }
  };

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
