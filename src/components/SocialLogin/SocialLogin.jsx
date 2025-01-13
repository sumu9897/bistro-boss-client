import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user);
    })
  }
  return (
    <div className="mx-auto pb-8">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className=""></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
