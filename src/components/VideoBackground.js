import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useVideoTrailer(movieId);
  return (
      <iframe
        className="w-full md:w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
  );
};

export default VideoBackground;
