// eslint-disable-next-line no-unused-vars
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { postCollection } from '../firebase.config';
import Buzz from './Buzz';
import NewBuzz from './NewBuzz';
import './styles/Content.css';

export default function Content({ loggedIn }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const recentPosts = query(postCollection, orderBy('timestamp', 'desc'));
    onSnapshot(recentPosts, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadPosts() {
    const allPosts = posts.map((values, index) => {
      if (index === 0) {
        // { user, time, text, image }
        return (
          <Buzz
            key={values.id}
            user={values.name}
            profilePicture={values.profilePicUrl}
            time={values.timestamp}
            text={values.text}
          />
        );
      }
      return (
        <Buzz
          key={values.id}
          user={values.name}
          profilePicture={values.profilePicUrl}
          time={values.timestamp}
          text={values.text}
        />
      );
    });
    return allPosts;
  }

  return (
    <div className="content">
      <div className="heading">
        <p className="title">Home</p>
      </div>
      <div className="items">
        {loggedIn ? <NewBuzz /> : null}
        {posts ? loadPosts() : null}
      </div>
    </div>
  );
}
