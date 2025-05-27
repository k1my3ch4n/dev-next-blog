"use client";

import { HomeButton } from "@repo/components";
import { useRouter } from "next/navigation";

const HomeButtonWrapper = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return <HomeButton onClick={handleClick} />;
};

export default HomeButtonWrapper;
