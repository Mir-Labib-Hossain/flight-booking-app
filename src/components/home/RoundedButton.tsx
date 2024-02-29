import SvgToImg from "../SvgToImg";

type Props = {
  active?: boolean;
  onClick: () => void;
  children: string;
  icon: any;
};

const RoundedButton = ({ icon, active, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 p-4 h-10 border-2 rounded-3xl ${active ? "border-primary text-primary" : "border-transparent"} bg-secondary`}>
      <div className={`h-[22px] w-[22px] rounded-full flex items-center justify-center ${active ? "bg-primary-light" : "bg-white"}`}>
        <SvgToImg alt={children} code={icon} height={14} width={14} />
      </div>
      <div className="text-sm">{children}</div>
    </button>
  );
};

export default RoundedButton;
