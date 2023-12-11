import Image from "next/image";
import MenuLink from "./menuLink/page";

import Avatar from "../../../../../public/images/avatar.png";

const menuItems = [
  {
    title: "Categories",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "",
      },
      {
        title: "Brew",
        path: "/dashboard/brew",
        icon: "",
      },
      {
        title: "Coffee collection",
        path: "/dashboard/coffee",
        icon: "",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky h-screen w-60">
      <div className="flex items-center gap-5 mb-5 px-5 pt-8">
        <Image
          className="rounded object-cover"
          src={Avatar}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col px-5">
        <span className="text-white text-xs">Lisandro Gonaez</span>
        <span>Administrator</span>
      </div>

      <ul>
        {menuItems.map((cat) => (
          <>
            <li key={cat.title} className="flex flex-col ">
              <span className="font-bold my-2 text-orange-300 px-5">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <MenuLink key={item.title} item={item} />
              ))}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
