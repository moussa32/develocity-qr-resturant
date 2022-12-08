import { Routes, Route } from "react-router-dom";
import Splash from "./modules/Splash/Splash";
import Start from "./modules/Start/Start";
import Scan from "./modules/Scan/Scan";
import Home from "./modules/Home/Home";
import FoodDetails from "./modules/FoodDetails/FoodDetails";

const App = () => {
  return (
    <>
      <div className="mainBackground"></div>
      <main className="mainApp">
        <Routes>
          <Route index element={<Splash />} />
          <Route path="scan" element={<Scan />} />
          <Route path="start" element={<Start />} />
          <Route path="home" element={<Home />} />
          <Route path=":foodId" element={<FoodDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
