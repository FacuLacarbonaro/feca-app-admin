import { ReactNode } from "react";

import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

type LayoutProps = { children?: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex ">
      <div className="flex bg-slate-600 ">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full p-20">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
