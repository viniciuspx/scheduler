"use client";

import { Logout } from "../logout/logout";
import { CreateDashBoard } from "./mainBoard";

var loggedIn = false;
var username = '';

export const setLoggedIn = async (value: boolean) => (loggedIn = value);
export const setUsername = async (name: string) => (username = name);

export const DashBoardPage = () => {
  return loggedIn ? <CreateDashBoard name={username}/> : <Logout path={"/login"} />;
};
