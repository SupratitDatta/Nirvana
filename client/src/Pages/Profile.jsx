import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import logo from "../Assets/Logo/logo.svg";
import '../css/profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const name = user.displayName || user.email;
                const email = user.email || '';
                const photo = user.photoURL || logo;

                setUserName(name);
                setUserPhoto(photo);
                setUserEmail(email);
            }
            else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    const handleBackToHome = () => {
        navigate("/home");
    };

    return (
        <div className="profile">
            <button className="back-btn" onClick={handleBackToHome}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 back-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                <div>Back</div>
            </button>
            <div className="profile-wrapper">
                <div className="profile-image">
                    <img
                        src={userPhoto}
                        alt="Profile Picture"
                        className="high-res-image"
                    />
                    <span className="profile-status">online</span>
                    <div className="temp-overlay one"></div>
                    <div className="temp-overlay two"></div>
                </div>
                <div className="profile-username">
                    <span id="profile-username-first">{userName.split(' ')[0]}</span>
                    <span>&nbsp;</span>
                    <span id="profile-username-second">{userName.split(' ')[1] || ''}</span>
                </div>
                <div className="profile-intro">
                    <span className="profile-intro-email">EMAIL: {userEmail}</span>
                    <div className="profile-intro-description">
                        Space is the vast, seemingly infinite expanse beyond Earth's atmosphere. It encompasses everything from celestial bodies like stars and planets to cosmic phenomena, and is characterized by a near-perfect vacuum.
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="profile-stat">
                        <span className="profile-stat-title">VIEWS</span>
                        <br />
                        <span className="profile-stat-value">14,000</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat-title">FOLLOWERS</span>
                        <br />
                        <span className="profile-stat-value">2,000</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat-title">LIKES</span>
                        <br />
                        <span className="profile-stat-value">7,000</span>
                    </div>
                </div>
                <div className="profile-accounts">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Profile;