import { Button } from "../utils/button";
import { lemon } from "@/app/fonts/fonts";

export const MakeHome = () => {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <div className="md:w-full w-full flex h-2/5 justify-center flex-wrap flex-col">
        <span
          className={`md:w-2/5 md:text-[64px] text-[48px] text-center inline-block align-top m-auto text-[#42A5F5] ${lemon.className}`}
        >
          Scheduler
          <hr />
        </span>
        <span className="text-center text-[#42A5F5] font-bold md:text-[18px] text-[18px]">
          An easy way to schedule your day
        </span>
      </div>
      <div className="w-3/5 flex flex-wrap flex-row m-auto justify-around">
        <Button buttonText="Login" link="/login" />
        <Button buttonText="Sign-up" link="/signup" />
      </div>
      <span className="text-center text-[#42A5F5] font-bold md:text-[10px] text-[10px] my-8">
        All rigths reserved - 2024
      </span>
    </div>
  );
};
