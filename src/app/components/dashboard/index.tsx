"use client";

import { Logout } from "../logout/logout";
import { CreateDashBoard } from "./mainBoard";

var loggedIn = false;

export const setLoggedIn = async (value: boolean) => (loggedIn = value);

export const DashBoardPage = () => {
  return loggedIn ? <CreateDashBoard /> : <Logout path={"/login"} />;
};
