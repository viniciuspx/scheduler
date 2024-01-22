"use client";

import { Logout } from "../logout/logout";
import { CreateDashBoard } from "./mainBoard";

var loggedIn = false;
var username = "";
var id = "";

export const setLoggedIn = async (value: boolean) => (loggedIn = value);
export const setUserInfo = async (name: string, id: string) => (
  (username = name), (id = id)
);

export const DashBoardPage = () => {
  return loggedIn ? (
    <CreateDashBoard user={username} id={id} />
  ) : (
    <Logout path={"/login"} />
  );
};
