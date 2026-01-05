"use client";

import { useRouter } from "next/navigation";
import HomeButton from "./HomeButton";

interface HomeButtonWrapperProps {
  url?: string;
}

const HomeButtonWrapper = ({ url = "/" }: HomeButtonWrapperProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return <HomeButton onClick={handleClick} />;
};

export default HomeButtonWrapper;
