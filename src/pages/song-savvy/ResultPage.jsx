import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@components/song-savvy/Navbar";
import Footer from "@components/song-savvy/Footer";
import Button from "@components/ui/Button";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const trackData = location.state?.data;

  if (!trackData) {
    navigate("/songsavvy");
    return;
  } else {
    var results = trackData?.result;
  }

  return (
    <div className='bg-gray-900 text-spotifyGreen w-full px-4 py-2 min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow'>
        <div className='container flex flex-wrap items-center justify-center mx-auto relative my-20 w-7/12 bg-gray-800 rounded-lg'>
          <h2 className='text-4xl font-semibold mt-10 mb-4 w-full mx-auto text-center'>
            Result
          </h2>
          <img src={results.imgUrl} className='w-52 h-52 my-10' />
          <h3 className='text-2xl text-stone-400 w-full mx-auto text-center mb-1'>
            {results.trackName}
          </h3>
          <p className='text-md text-stone-400 mb-1'>{results.artist}</p>
          <p className='text-xl text-stone-400 w-full mx-auto text-center mb-20'>
            {results.album}
          </p>
          <p className='text-lg mb-2 w-full mx-auto text-center'>
            {results.result === 1
              ? "Congrats! Your song is a hit!"
              : "Oops! Your song is a flop :( "}
          </p>
          <div className='flex flex-col items-center'>
            <Button
              title='Listen on Spotify'
              link={results.songUrl}
              linkType='link'
            />
            <Button
              title='Try Again'
              link='/songsavvy/prediction'
              linkType='route'
              className='mt-2 mb-10'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
