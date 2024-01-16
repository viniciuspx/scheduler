"use client";

import { Button } from "../utils/button";
import { lemon } from "@/app/fonts/fonts";
import { FC } from "react";

interface LoginForm {
  SubmitForm: any;
}

export const LoginForm: FC<LoginForm> = ({ SubmitForm }) => {
  return (
    <div className="w-full h-lvh flex flex-wrap justify-center">
      <span
        className={`md:w-2/5 md:text-[64px] text-[48px] text-center inline-block align-top m-auto text-[#42A5F5] ${lemon.className}`}
      >
        Scheduler
        <hr />
      </span>
      <div className="h-2/5 w-full flex flex-col mx-auto justify-center">
        <form className="w-4/5 flex flex-col flex-wrap justify-center m-auto" onSubmit={SubmitForm}>
          <input
            type="text"
            className="w-4/5 md:w-2/5 h-[25px] border-[2px] border-[#24669C] my-2 mx-auto p-4 text-center rounded-md"
            placeholder="Login/E-mail"
          ></input>
          <input
            type="password"
            className="w-4/5 md:w-2/5 h-[25px] border-[2px] border-[#24669C] my-2 mx-auto p-4 text-center rounded-md"
            placeholder="Password"
          ></input>
          <button
            type="submit"
            className="w-2/5 md:w-2/5 max-w-[600px] text-white font-bold border-[#42A5F5] bg-[#42A5F5] rounded-xl border-2 hover:bg-white hover:text-[#24669C] mx-auto my-2"
          >
            Login
          </button>
        </form>
        <Button buttonText="Cancel" link="/" customClass="mx-auto my-2" />
      </div>
    </div>
  );
};
