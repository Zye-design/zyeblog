import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-32 mx-auto bg-[#E9F1FA]">
      <div className="text-[#111439] text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Info<span className="text-[#00ABE4]">hub</span>
        </h1>
        <p className="text-[#111439] lg:w-3/5 mx-auto mb-5 font-secondary">
          Stay updated with the latest insights across crucial sectors such as
          finance, oil and gas, real estate, and information technology, both
          locally and globally. We provide comprehensive
          support for making informed financial decisions, offering valuable
          investment tips, practical budgeting advice, and family financial
          planning assistance, among other resources. Don't hesitate any
          longer! subscribe or join today to receive daily tips and stay ahead!
        </p>
        <div>
            <Link to="/about" className="font-medium hover:text-[#00ABE4] inline-flex items-center py-1">
                learn more <FaArrowRight className="mt-1 ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
