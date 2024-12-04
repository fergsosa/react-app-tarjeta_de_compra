import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./header";
import CartTab from "./cartTab";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="bg-zinc-200">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        {/* <h1 className="bg-lime-400 text-center">layout</h1> */}
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
