type Props = {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: any;
};

const RoundedButton = ({ active, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={`flex items-center p-4 h-10 border-2 rounded-3xl ${active && "border-primary"} bg-secondary`}>
      <div>
        <SvgtoImg
      </div>
      <div>{children}</div>
    </button>
  );
};

export default RoundedButton;
