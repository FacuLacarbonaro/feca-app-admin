import MethodCard from "./methodCard";

interface MethodListProps {
  methodList: Method[];
}

interface Method {
  name: string;
  img: string;
  type: string;
}

const MethodList = ({ methodList }: MethodListProps) => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {methodList.map((m) => (
          <MethodCard method={m} key={m.name} />
        ))}
      </div>
    </div>
  );
};

export default MethodList;
