import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="rounded-md p-6 border border-gray-200 bg-gray-100 text-center space-y-6">
        <p className="font-bold text-4xl">404</p>
        <h2 className="font-bold text-2xl">Not found</h2>

        <Link to={"/"}>
          <button className="cursor-pointer px-4 py-2 bg-gray-600 text-white rounded-md">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
