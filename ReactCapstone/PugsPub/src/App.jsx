import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SiteNavbar from './components/SiteNavbar.jsx';
import Home from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import CartPage from "./pages/CartPage.jsx";

import altBackground from "./assets/altBackground.mp4";

const App = () => {
    return (
        <Router>
            <div className="video-background-holder-2">
                <video
                    className="video-background-video-2"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={altBackground} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="content-wrapper position-relative z-3 min-vh-100">
                <SiteNavbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/reservation" element={<ReservationPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;