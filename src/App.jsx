import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import HomeApp from "@pages/home-app/page";
import PortfolioApp from "@pages/portfolio/page";
import SongSavvyApp from "@pages/song-savvy/SongSavvyApp";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={"/portfolio"} />} />
          <Route
            path='/portfolio/*'
            element={<PortfolioApp theme={theme} setTheme={setTheme} />}
          />
          <Route path='/songsavvy/*' element={<SongSavvyApp />} />
          <Route path='/*' element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      <Outlet />
    </div>
  );
}

export default App;
