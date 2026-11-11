import { Link } from "react-router";
import Logo from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import Avatar from "../../assets/images/avatars/avatar_1.png";
import Logout from "../auth/Logout";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";

const Header = () => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = state?.user ?? auth?.user;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-mediumDark py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img
            className="max-w-25 rounded-full lg:max-w-32.5"
            src={Logo}
            alt="logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>

          <button className="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>

          <Logout />

          <button className="flex items-center ml-8! gap-3">
            <span className="text-lg font-medium lg:text-xl text-white">
              {user?.firstName}
            </span>
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`}
              alt={user?.firstName}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
