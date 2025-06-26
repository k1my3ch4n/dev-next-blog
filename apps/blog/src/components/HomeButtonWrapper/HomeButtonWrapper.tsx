"use client";

import { HomeButton } from "@repo/components";
import { useRouter } from "next/navigation";

const HomeButtonWrapper = ({ url = "/" }: { url?: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return <HomeButton onClick={handleClick} />;
};

export default HomeButtonWrapper;
