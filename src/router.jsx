import { createBrowserRouter } from "react-router";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ProfilePage from "./Pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>home</h1>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/me",
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
