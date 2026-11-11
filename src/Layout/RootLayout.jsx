import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
