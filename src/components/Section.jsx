import React from "react";

function Section({ img, title, paragraph }) {
  return (
    <section className="flex flex-row justify-between py-[120px] px-10">
      <img src={img} alt="" className="max-w-xl" />
      <div className="flex flex-col justify-center items-center max-w-xs ">
        <h2 className="text-5xl text-[#23273A] font-bold leading-tight ">
          {title}
        </h2>
        <p className="text-xl mt-6 text-[#23273A]">{paragraph}</p>
      </div>
      </section>
  );
}

export default Section;
