function Intro () {
    return (
        <>
        <div className="p-0 container mx-auto grid grid-cols-2 justify-center gap-0 mt-24">
  <div className="justify-end  sm:block container mx-auto grid grid-cols-1">
    <img
      src="\public\images\all-the-support-you-need.svg"
      className="w-[650px] h-[550px]"
      alt="img"
    />
  </div>

  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-left mb-4 text-[#05195F]" >We’ve got your back every step of<br></br> the way.</h2>

    <div className="justify-left text-lg leading-7 font-normal font-sans text-[#403F3F] tracking-wider">
      <p>Your dedicated Customer Experience Manager keeps open lines of <br></br> communication for every campaign. That’s way more support than<br></br> you’ll get from other high-intent lead vendors.</p>
    </div>

    <div className="h-20"></div>

    <div className="flex flex-row flex-wrap justify-start container mx-auto">
      <img
        src="\public\images\leadcapture_momentumleader_leader.svg"
        className="w-40 h-40"
        alt=""
      />
      <img
        src="\public\images\account-basedadvertising_easiesttodobusinesswith_enterprise_easeofdoingbusinesswith.svg"
        className="w-40 h-40"
        alt=""
      />
      <img
        src="\public\images\leadintelligence_bestestimatedroi_small-business_roi.svg"
        className="w-40 h-40"
        alt=""
      />
    </div>
  </div>
</div>

        </>
    )
}
export default Intro;