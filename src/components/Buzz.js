import './styles/Buzz.css';

export default function Buzz({ user, time, text, image }) {
  return (
    <div className="buzz">
      <div>
        <img
          className="profilePicture"
          src={user.profilePicture}
          alt={`${user.name} pfp`}
        />
      </div>
      <div className="postContent">
        <div className="postInfo">
          <p>{user.name}</p>
          <p>
            @{user.at} {time}
          </p>
        </div>
        <div>{text}</div>
        {image ? <img className="contentImage" src={image} alt="" /> : null}
      </div>
    </div>
  );
}
