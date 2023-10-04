
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="pt-20 md:pt-0 font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="py-6 hidden md:inline-block text-sm md:text-lg w-full md:w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black md:p-4 p-2 my-2 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-300 text-black md:p-4 md:mx-2 p-2 mx-2 rounded-lg hover:bg-opacity-50">
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
