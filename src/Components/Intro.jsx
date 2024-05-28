import Logos from "./Logos";

const Intro = ({ title, description, image }) => {
  const Logo1 = "/images/leadcapture_momentumleader_leader.svg";
  const Logo2 =
    "/images/account-basedadvertising_easiesttodobusinesswith_enterprise_easeofdoingbusinesswith.svg";
  const Logo3 =
    "/images/leadintelligence_bestestimatedroi_small-business_roi.svg";

  return (
    <>
      <div className="w-full sm:px-36 grid grid-cols-1 lg:grid-cols-2 justify-center gap-4 py-24">
        <div className="flex justify-center md:justify-end container mx-auto">
          <img
            src={image}
            className="w-full md:w-[650px] md:h-[450px] mx-auto md:mx-0"
            alt="img"
          />
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-bold text-left mb-4 text-[#05195F]">
            {title}
          </h2>

          <div className="text-lg leading-7 font-normal font-sans text-[#403F3F] tracking-wider pb-12">
            <p>{description}</p>
          </div>

          <div className="flex flex-row w-full justify-center md:justify-start">
            <Logos source={Logo1} />
            <Logos source={Logo2} />
            <Logos source={Logo3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
