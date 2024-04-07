import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* We want route specific content to show up in this position */}
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
