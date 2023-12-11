"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemType = {
  item: {
    title: string;
    path: string;
    icon: string;
  };
};

const MenuLink = ({ item }: ItemType) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`text-s py-2 px-5 ${
        pathName === item.path && "bg-slate-500 text-orange-300"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default MenuLink;
