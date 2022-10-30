import { Routes, Route } from "react-router-dom";
import Splash from "./modules/Splash/Splash";
import Start from "./modules/Start/Start";
import Home from "./modules/Home/Home";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="start" element={<Start />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
