import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landingpage';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notifications/Notifications';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from './Components/ProfileCard/ProfileCard';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Notification>
          <Routes>
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/review" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="<component_route>" element={<component_name />} /> {/* Replace <component_route> and <component_name> */}
          </Routes>
        </Notification>
      </Router>
    </div>
  );
}

export default App;
