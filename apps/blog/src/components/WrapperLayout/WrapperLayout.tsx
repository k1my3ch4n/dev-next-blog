"use client";

import { Layout } from "@repo/components";

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default WrapperLayout;
