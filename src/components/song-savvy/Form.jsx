import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ className }) {
  // todo: need to complete error handling & loading states
  const [songUrl, setSongUrl] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidLink = (url) => {
    const spotifyTrackRegex =
      /^https?:\/\/(open\.spotify\.com\/track\/[a-zA-Z0-9]+)(\?.*)?$/;
    return spotifyTrackRegex.test(url);
  };

  const getSongId = (url) => {
    return url.split("?")[0].split("/")[4];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidLink(songUrl)) {
      var songId = getSongId(songUrl);
    } else {
      setError("Enter a valid Spotify Track URL");
      return;
    }

    try {
      console.log("Im coming till here");
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/predict/${songId}`
      );
      console.log("just not till here");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const trackData = await response.json();

      console.log(trackData);
      navigate("/songsavvy/prediction/results", { state: { data: trackData } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className='flex items-center mb-4 justify-evenly'>
        <label htmlFor='songUrl' className='font-medium'>
          Enter Spotify Track Link:{" "}
        </label>
        <input
          type='text'
          id='songUrl'
          name='songUrl'
          value={songUrl}
          onChange={(e) => setSongUrl(e.target.value)}
          className='flex px-2 py-1 rounded-md min-w-80 text-black font-portfolioFont'
          autoFocus
        />
      </div>
      <button
        type='submit'
        className='px-10 py-2 bg-spotifyGreen text-white rounded-3xl border-2 border-spotifyGreen hover:bg-gray-800 hover:text-spotifyGreen block mt-10 mb-6 mx-auto font-semibold'
      >
        Submit
      </button>
    </form>
  );
}
