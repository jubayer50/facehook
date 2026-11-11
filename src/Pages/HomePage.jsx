import { Link } from "react-router";

import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();

  console.log(auth);

  return (
    <div>
      <h2>Home page</h2>

      <Link className="mt-5" to={"/me"}>
        go to profile page
      </Link>
    </div>
  );
};

export default HomePage;
