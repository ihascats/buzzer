import './styles/Buzz.css';

export default function Buzz({ user, profilePicture, time, text, image }) {
  let postTime = new Date().toLocaleString();
  if (time) {
    postTime = new Date(time.seconds * 1000).toLocaleString();
  }

  const textElement = () => {
    const newText = text.trim().replaceAll('_nl_', '\n').split(' ');

    const element = (
      <p>
        {newText.map((word) => {
          if (word.slice(0, 8) === 'https://') {
            return <a key="link" href={word}>{`${word} `}</a>;
          }
          return `${word} `;
        })}
      </p>
    );
    return element;
  };

  let child;
  if (text) {
    child = textElement();
  }

  return (
    <div className="buzz">
      <div>
        <img
          className="profilePicture"
          src={profilePicture}
          alt={`${user} pfp`}
        />
      </div>
      <div className="postContent">
        <div className="postInfo">
          <p>{user}</p>
          <p>
            @{user} {postTime}
          </p>
        </div>
        {child}
        {image ? <img className="contentImage" src={image} alt="" /> : null}
      </div>
    </div>
  );
}
