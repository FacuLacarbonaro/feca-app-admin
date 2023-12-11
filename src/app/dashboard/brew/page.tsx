import MethodList from "@/app/ui/brew/methodList/page";
import { Methods } from "../../../../public/mock/methods";

const Brew = () => {
  return (
    <div>
      <h2 className=" text-4xl text-orange-400">
        Brewing methods collection
      </h2>

      <div>
        <MethodList methodList={Methods} />
      </div>
    </div>
  );
};

export default Brew;
