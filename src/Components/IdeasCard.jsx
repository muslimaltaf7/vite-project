const IdeasCard = ({ title, description, selected, onClick }) => {
    return (
      <div
        className={`bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition-shadow duration-300 ${
          selected ? "border-blue-500 border-4 bg-blue-200" : ""
        }`}
        onClick={onClick}
      >
        <h3 className="text-[30px] font-poppins font-bold text-left text-[#05195f]">
          {title}
        </h3>
        <p className="text-left text-[18px] font-inter py-2 text-[#444]">
          {description}
        </p>
      </div>
    );
  };
  
  export default IdeasCard;
  