import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Submit from "./Pages/submit";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import FloatingDeadText from "./components/FloatingDeadText";
import BackgroundAudio from "./components/BackgroundAudio";
import NotFound from "./Pages/NotFound";
import Storys from "./Pages/Storys";
import SingleStory from "./Pages/SingleStory";
import UserStoryList from "./Pages/UserStoryList";
import SingleUserStory from "./Pages/SingleUserStory";
import AdminPanel from "./Pages/AdminPanel";
import Solve from "./Pages/solve";
import SolveSingle from "./Pages/SolveSingle";
import About from "./Pages/about";
import PrivacyPolicy from "./Pages/privacy-policy";
import Terms from "./Pages/terms";
import AgeGate from "./components/AgeGate";
import TheAge from "./Pages/theage";
import TheAgeSingle from "./Pages/TheAgeSingle";


function App() {
  const hasConsent = localStorage.getItem("isOver18") === "true";
  const [ageVerified, setAgeVerified] = useState(hasConsent);

  const handleAgeConfirm = () => {
    localStorage.setItem("isOver18", "true");
    setAgeVerified(true);
  };

  return (
    <BrowserRouter basename="/fear-archives">
      {/* Main Content Wrapper with blur when popup is active */}
      <div className={`min-h-screen bg-darkBg text-fogWhite relative overflow-hidden transition duration-300 ${!ageVerified ? "blur-sm pointer-events-none" : ""}`}>
        <FloatingDeadText />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/story/:id" element={<SingleStory />} />
          <Route path="/read" element={<Storys />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/user-stories" element={<UserStoryList />} />
          <Route path="/user-story/:id" element={<SingleUserStory />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/solve" element={<Solve />} />
          <Route path="/solve/:id" element={<SolveSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/theage" element={<TheAge />} />
<Route path="/theage/:id" element={<TheAgeSingle />} />
        </Routes>
        <Footer />
        <BackgroundAudio />
      </div>

      {/* AgeGate Popup Overlay */}
      {!ageVerified && <AgeGate onConfirm={handleAgeConfirm} />}
    </BrowserRouter>
  );
}

export default App;
