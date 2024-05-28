import Cta from "./CTA";

const Tool = ({ title, description, image }) => {
  return (
    <>
      <div className="grid lg:grid-cols-2 w-full place-items-center items-center py-12">
        <div className="w-full flex flex-col justify-around py-6 h-full gap-2">
          <h2 className="text-[38px] font-poppins font-bold text-blue-900">
            {title}
          </h2>
          <p className="text-[18px] font-inter tracking-wider leading-relaxed text-gray-700 pb-4">
            {description}
          </p>
          <Cta title= "Calculate Now"/>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt="Hands on a laptop"
            className="h-[380px] w-[700]"
          />
        </div>
      </div>
    </>
  );
};

export default Tool;
