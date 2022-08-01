import Icons from './Icons';
import './styles/NewBuzz.css';
import { user, sendPost } from '../firebase.config';

export default function NewBuzz() {
  const iconPack = Icons();

  window.onload = () => {
    const buzzButton = document.querySelector(
      '.newBuzzElement > div:nth-child(2) > div:nth-child(2) > button',
    );
    if (document.querySelector('textarea').value === '') {
      buzzButton.disabled = true;
    }

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
      if (document.querySelector('textarea').value === '') {
        buzzButton.disabled = true;
      } else {
        buzzButton.disabled = false;
      }
    }
  };

  function createPost(event) {
    const postTextArea = document.querySelector('textarea');
    if (postTextArea.value !== '') {
      event.preventDefault();
      sendPost(postTextArea.value.replace('\n', '_nl_ '));
      postTextArea.value = '';
    }
  }

  return (
    <div className="newBuzzElement">
      <div>
        <img src={user.picture} alt="" />
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
          <button onClick={createPost} className="newBuzz">
            Buzz
          </button>
        </div>
      </div>
    </div>
  );
}
