import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

interface logout {
  path: string;
}

export const Logout: FC<logout> = ({ path }) => {
  const router = useRouter();
  const loginFailed = () => router.replace(path);
  useEffect(() => {
    loginFailed();
  }, []);
  return <></>;
};
