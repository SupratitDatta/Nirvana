import React from 'react';
import { GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, db } from '../utils/firebaseConfig';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import google from '../Assets/Icons/google.png';
import github from '../Assets/Icons/github.png';
import twitter from '../Assets/Icons/twitter.png';
import '../css/signinOptions.css';

function SignInOptions() {
    const navigate = useNavigate();

    const handleSignIn = async (provider) => {
        try {
            const result = await signInWithPopup(firebaseAuth, provider);
            const user = result.user;
            handleBackToHome();
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    photo: user.photoURL,
                    lastName: "",
                });
                toast.success("User logged in Successfully", {
                    position: "top-center",
                });
                navigate("/");
            }
        }
        catch (error) {
            toast.error("Failed to sign in. Please try again.");
            console.error("Error during sign-in:", error);
        }
    };

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        handleSignIn(provider);
    };

    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        handleSignIn(provider);
    };

    const twitterLogin = () => {
        const provider = new TwitterAuthProvider();
        handleSignIn(provider);
    };
    
    const handleBackToHome = () => {
        navigate("/");
    };
    
    return (
        <div className="social-signin-container">
            <hr className="divider" />
            <p className="continue-p">--Or continue with--</p>
            <div className="social-signin-buttons">
                <div className="social-signin-btn" onClick={googleLogin}>
                    <img src={google} alt="Google Sign-In" className="social-icon google" />
                </div>
                <div className="social-signin-btn" onClick={githubLogin}>
                    <img src={github} alt="GitHub Sign-In" className="social-icon github" />
                </div>
                {/* Uncomment to enable Twitter login
                <div className="social-signin-btn" onClick={twitterLogin}>
                    <img src={twitter} alt="Twitter Sign-In" className="social-icon twitter" />
                </div> */}
            </div>
        </div>
    );
}

export default SignInOptions;