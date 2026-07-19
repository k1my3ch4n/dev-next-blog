import type { SVGProps } from "react";

const SvgStub = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} />
);

export default SvgStub;
