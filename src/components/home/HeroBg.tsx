type Props = {};

const HeroBg = (props: Props) => {
  return (
    <div
      className="absolute top-0 left-0 h-[60vh] w-screen"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp10604187.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HeroBg;
