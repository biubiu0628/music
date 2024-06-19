import React, { useState } from "react";

const Button = ({ name, isActive, handleActive }) => (
  <div>
    <button
      className={`px-[24px] h-[25px] ${
        isActive
          ? "border-[1px] border-[#8B45CA] bg-[#8B45CA]"
          : "border-[1px] border-[#261E31]"
      } uppercase text-[13px] rounded-full`}
      onClick={handleActive}
    >
      {name}
    </button>
  </div>
);

const Main = () => {
  const [isActive, setIsActive] = useState("tất cả");

  const handleActive = (name) => {
    setIsActive(name);
  };

  return (
    <div>
      <div className="group w-full">
        <div className="grid grid-cols-3 gap-8 pt-16">
          <div className="relative cursor-pointer">
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/9/e/5/4/9e549a9f53b0b9196e4d90d38acd4eef.jpg"
              alt=""
              className="rounded-lg"
            />
            <button
              className="absolute top-[39%] ml-2 size-[55px] rounded-full p-2 
                bg-gray-200 bg-opacity-20 hover:bg-opacity-15 hidden group-hover:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="cursor-pointer">
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/e/1/c/a/e1ca85748b4e8e9d98f2e28e9c3a6967.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="relative cursor-pointer">
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/d/2/c/8/d2c8b5b5f0facbacbf122d8015642933.jpg"
              alt=""
              className="rounded-lg"
            />
            <button
              className="absolute top-[39%] right-0 mr-2 size-[55px] rounded-full p-2 
                bg-gray-200 bg-opacity-20 hover:bg-opacity-15 hidden group-hover:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="text-white pt-20">
        <p className="text-[20px] font-bold">Mới Phát Hành</p>
        <div class="w-full flex items-center justify-between">
          <div className="flex gap-4">
            <Button
              name="tất cả"
              isActive={isActive === "tất cả"}
              handleActive={() => handleActive("tất cả")}
            />
            <Button
              name="Việt Nam"
              isActive={isActive === "Việt Nam"}
              handleActive={() => handleActive("Việt Nam")}
            />
            <Button
              name="Quốc Tế"
              isActive={isActive === "Quốc Tế"}
              handleActive={() => handleActive("Quốc Tế")}
            />
          </div>
          <button className="group flex items-center gap-1 pt-11">
            <p className="uppercase text-[12px] text-[#ffffff80] group-hover:text-[#8B45CA]">
              tất cả
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff80"
              class="size-5 group-hover:stroke-[#8B45CA]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
