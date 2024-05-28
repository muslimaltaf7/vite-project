import Logos from "./Logos";

const Cta = ({ title, icon }) => {
  return (
    <>
      <button className="bg-[#CC0047] font-semibold text-[18px] md:text-xl text-white py-2 px-8 md:px-10 rounded-full w-full sm:w-fit">
        {title}
        <span>{icon}</span>
      </button>
    </>
  );
};

export default Cta;
