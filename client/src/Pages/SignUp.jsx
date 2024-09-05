import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseConfig';
import satellite from "../Assets/Videos/Satellite.mp4";
import SignInOptions from '../Components/SignInOptions';
import '../css/signup.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            navigate('/');
        }
        catch (error) {
            alert('Error signing up: ' + error.message);
        }
    };

    const togglePasswordVisibility = (event) => {
        const input = document.getElementById('password-input');
        if (input.getAttribute('type') === 'password') {
            event.target.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            event.target.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = (event) => {
        const input = document.getElementById('confirm-password-input');
        if (input.getAttribute('type') === 'password') {
            event.target.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            event.target.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <section className="login-container">

            <button className="back-btn" onClick={handleBackToHome}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 back-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                <div>Back</div>
            </button>

            <video autoPlay muted loop className="sig-background-video">
                <source src={satellite} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="box">
                <div className="square" style={{ '--i': 0 }}></div>
                <div className="square" style={{ '--i': 1 }}></div>
                <div className="square" style={{ '--i': 2 }}></div>
                <div className="square" style={{ '--i': 3 }}></div>
                <div className="square" style={{ '--i': 4 }}></div>
                <div className="square" style={{ '--i': 5 }}></div>
                <div className="container">
                    <div className="signup-form">
                        <h2>SIGN UP</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="input">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <span>Name</span>
                            </div>
                            <div className="input">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <span>Email Id</span>
                            </div>
                            <div className="input password">
                                <input
                                    type="password"
                                    name="password"
                                    id="password-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span>Password</span>
                                <a href="#" className={`password-control ${passwordVisible ? 'view' : ''}`}
                                    onClick={togglePasswordVisibility}
                                >
                                    <div onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: 'pointer' }}>
                                        {passwordVisible ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        )}
                                    </div>
                                </a>
                            </div>
                            <div className="input password">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password-input"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <span>Confirm Password</span>
                                <a
                                    href="#"
                                    className={`password-control ${confirmPasswordVisible ? 'view' : ''}`}
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    <div onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={{ cursor: 'pointer' }}>
                                        {confirmPasswordVisible ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        )}
                                    </div>
                                </a>
                            </div>
                            <button type="submit" className="btn signup-btn">Sign Up</button>
                        </form>
                        <p>Already Have an Account ? <Link to="/login">Log In</Link></p>
                        <div><SignInOptions /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;