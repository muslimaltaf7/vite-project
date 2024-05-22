function Intro() {
  return (
    <>
      <div className="p-0 container mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center gap-4 mt-24">
        <div className="flex justify-center md:justify-end container mx-auto">
          <img
            src="\images\all-the-support-you-need.svg"
            className="w-full md:w-[650px] md:h-[450px] mx-auto md:mx-0"
            alt="img"
          />
        </div>

        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-bold text-left mb-4 text-[#05195F]">
            We’ve got your back every step of<br /> the way.
          </h2>

          <div className="text-lg leading-7 font-normal font-sans text-[#403F3F] tracking-wider">
            <p>Your dedicated Customer Experience Manager keeps open lines of <br /> communication for every campaign. That’s way more support than<br /> you’ll get from other high-intent lead vendors.</p>
          </div>

          <div className="h-10 md:h-20"></div>

          <div className="flex flex-wrap justify-center md:justify-start">
            <img
              src="/images/leadcapture_momentumleader_leader.svg"
              className="w-20 md:w-40 h-25 md:h-45 mr-2 md:mr-4 mb-4 md:mb-0"
              alt=""
            />
            <img
              src="/images/account-basedadvertising_easiesttodobusinesswith_enterprise_easeofdoingbusinesswith.svg"
              className="w-20 md:w-40 h-25 md:h-45 mr-2 md:mr-4 mb-4 md:mb-0"
              alt=""
            />
            <img
              src="/images/leadintelligence_bestestimatedroi_small-business_roi.svg"
              className="w-20 md:w-40 h-25 md:h-45 mr-2 md:mr-4 mb-4 md:mb-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
