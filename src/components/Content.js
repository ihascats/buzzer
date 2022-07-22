import Buzz from './Buzz';
import './styles/Content.css';

export default function Content() {
  const user = {
    profilePicture:
      'https://pbs.twimg.com/profile_images/1548229654598651904/BckO7e-N_400x400.jpg',
    name: 'Soli',
    at: 'ihas_cats',
  };

  return (
    <div className="content">
      <div className="heading"></div>
      <div className="items">
        {/* user, time, text, image */}
        <Buzz
          user={user}
          time="1 July"
          text="What's one thing you'd like to learn this summer?"
        />
        <Buzz
          user={user}
          time="1 July"
          text="What's one thing you'd like to learn this summer?"
          image="https://pbs.twimg.com/profile_images/1548229654598651904/BckO7e-N_400x400.jpg"
        />
      </div>
    </div>
  );
}
