import { Button } from "../utils/button";

export const SignupPage = () => {
  return (
    <div className="h-lvh">
      <form className="w-4/5 h-4/5 flex flex-col flex-wrap m-auto justify-center">
        <label htmlFor="name" className="w-4/5 md:w-2/5 mx-auto font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-4/5 md:w-2/5  border-2 m-2 mx-auto h-[25px] border-[#24669C] my-2 p-4 text-center rounded-md"
        ></input>
        <label htmlFor="username" className="w-4/5 md:w-2/5  mx-auto font-bold">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-4/5 md:w-2/5  border-2 m-2 mx-auto h-[25px] border-[#24669C] my-2 p-4 text-center rounded-md"
        ></input>
        <label htmlFor="email" className="w-4/5 md:w-2/5 mx-auto font-bold">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          className="w-4/5 md:w-2/5  border-2 m-2 mx-auto h-[25px] border-[#24669C] my-2 p-4 text-center rounded-md"
        ></input>
        <label htmlFor="pswd" className="w-4/5 md:w-2/5 mx-auto font-bold">
          Password
        </label>
        <input
          type="password"
          id="pswd"
          className="w-4/5 md:w-2/5  border-2 m-2 mx-auto h-[25px] border-[#24669C] my-2 p-4 text-center rounded-md"
        ></input>
        <button
          type="submit"
          className="w-2/5 md:w-2/5 max-w-[600px] text-white font-bold border-[#42A5F5] bg-[#42A5F5] rounded-xl border-2 hover:bg-white hover:text-[#24669C] mx-auto my-2"
        >
          Register
        </button>
        <Button buttonText="Cancel" link="/" customClass="mx-auto my-4" />
      </form>
    </div>
  );
};
