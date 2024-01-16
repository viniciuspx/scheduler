"use client";

import { LoginForm } from "./loginForm";

const handleLogin = () => {
  
};

export const LoginPage = () => {
  return <LoginForm SubmitForm={handleLogin()} />;
};
