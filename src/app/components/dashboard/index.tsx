"use client";

import { Logout } from "../logout/logout";
import { CreateDashBoard } from "./mainBoard";

var loggedIn = false;

export const setLoggedIn = (value: boolean) => {
  console.log(value);
  loggedIn = value;
};

export const DashBoardPage = () => {
  return loggedIn ? <CreateDashBoard /> : <Logout />;
};
