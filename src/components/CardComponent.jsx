const CardComponent = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-3">
      <div className="w-full h-48 flex items-center justify-center">
        <img src={image} className="w-full h-full rounded" alt="image" />
      </div>
      <h1 className="text-xl font-bold text-center text-gray-700">{title}</h1>
      <p className="text-center text-gray-700 ">{description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:opacity-80 transition duration-300 cursor-pointer">
        Enroll now
      </button>
    </div>
  );
};

export default CardComponent;
