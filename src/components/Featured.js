import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const Slider = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isCurSlide = currentIndex === 0;
    const newIndex = isCurSlide ? Slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isCurSlide = currentIndex === Slider.length - 1;
    const nextSlide = isCurSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextSlide);
  };

  const moveToNextSlide = (SliderIndex) => {
    setCurrentIndex(SliderIndex);
  };

  return (
    <div className=" h-[500px] m-auto w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${Slider[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white bg-orange-700 hover:bg-orange-600 cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white bg-orange-700 hover:bg-orange-600 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {Slider.map((SliderItem, SliderIndex) => (
          <div
            key={SliderIndex}
            onClick={() => moveToNextSlide(SliderIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
