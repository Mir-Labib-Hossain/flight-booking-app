import { LoadingOutlined } from "@ant-design/icons";
import SvgToImg from "./SvgToImg";
import { PlaneRightPrimaryIcon } from "./icons";

type Props = {
  fromCode: string;
  toCode: string;
};

const Loading = ({ fromCode, toCode }: Props) => {
  return (
    <div className="z-40 absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-80"></div>
      <div className="bg-white relative w-[400px] h-[250px] p-4 flex flex-col justify-between rounded-lg">
        <div className="flex items-center">
          <p>{fromCode}</p>
          <div className="relative h-[2px] m-2 w-full bg-[#E4E4E4]">
            <div className="fill-left-to-right">
              <SvgToImg className={`mt-[-9px] ml-auto`} alt={"plane"} code={PlaneRightPrimaryIcon} height={20} width={20} />
            </div>
          </div>
          <p>{toCode}</p>
        </div>
        <p className="text-center">Please wait while we are searching the best flights for you.</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p>Finding the best value price</p>
          </div>
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p className="text-[#A0A0A0]">Checking your details</p>
          </div>
          <div className="flex gap-2 items-center">
            <LoadingOutlined />
            <p className="text-[#A0A0A0]">Sorting your preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
