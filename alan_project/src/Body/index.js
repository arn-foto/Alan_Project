import BoxCipher from "../CipherComponents/BoxCipher";
import Rot13 from "../CipherComponents/Rot13";
import LandingPage from "../LandingPage";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/boxcipher" element={<BoxCipher />} />
        <Route path="/rot13" element={<Rot13 />} />
      </Routes>
    </div>
  );
};

export default Body;
