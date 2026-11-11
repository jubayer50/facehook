import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Header from "../Components/Header/Header";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoute = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileProvider>
            <Header />

            <main className="mx-auto max-w-255 py-8">
              <div>
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
