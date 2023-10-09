
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="pt-20 md:pt-0 font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="py-6 hidden md:inline-block text-sm md:text-lg w-full md:w-1/4">
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-opacity-80">
          Play
        </button>
        <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-opacity-50">
          Watch Later
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
