import Image from "next/image";
import Link from "next/link";

import V60 from "../../../../../public/images/methods/V60.png";

interface IMethod {
  method: {
    name: string;
    img: string | any;
    type: string;
  };
}

const MethodCard = ({ method }: IMethod) => {
  return (
    <div className="w-60 bg-transparent">
      <Image
        src={method.img}
        alt=""
        width={300}
        height={100}
        className="duration-500 hover:scale-105"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">
          {method.type}
        </span>
        <p className="text-lg font-bold text-whtie truncate block capitalize ">
          {method.name}
        </p>
        <div className="flex items-center">
          <Link
            href="/dashboard/recipes"
            className="text-xs  text-gray cursor-pointer my-3 underline decoration-transparent hover:decoration-sky-500"
          >
            Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MethodCard;
