const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="text-center border-4  border-gray-600 p-10 rounded">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for could not be found.
        </p>
        <button id="backToHomeButton">
          <a
            href="/home"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
