import './styles/SignIn.css';
import { signInWithGoogle, user } from '../firebase.config';

export default function SignIn({ logIn }) {
  const processInformation = async (userInfo) => {
    const info = await userInfo;
    const name = info.user.displayName;
    const userPicture = info.user.photoURL;
    user.setName(name);
    user.setPicture(userPicture);
    logIn();
  };

  return (
    <button
      onClick={() => {
        processInformation(signInWithGoogle());
      }}
      className="signIn logout"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
        alt="google logo"
      />
      Sign In
    </button>
  );
}
