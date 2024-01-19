import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();
  const loginFailed = () => router.replace("/");
  useEffect(() => {
    loginFailed();
  }, []);
  return <></>;
};
