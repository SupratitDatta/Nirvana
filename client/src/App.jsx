import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Preloader from './Components/Preloader';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Launches from './Pages/Launches';
import Profile from './Pages/Profile';
import './css/app.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Preloader />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/launches" element={<Launches />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;