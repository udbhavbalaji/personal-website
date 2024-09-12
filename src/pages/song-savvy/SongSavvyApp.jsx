import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "@pages/song-savvy/HomePage";
import AboutPage from "@pages/song-savvy/AboutPage";
import FormPage from "@pages/song-savvy/FormPage";
import ResultPage from "@pages/song-savvy/ResultPage";

export default function SongSavvyApp() {
  return (
    <div className='font-songSavvyFont'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/prediction' element={<FormPage />} />
        <Route path='/prediction/results' element={<ResultPage />} />
      </Routes>
    </div>
  );
}
