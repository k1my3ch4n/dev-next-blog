/// <reference types="next" />
/// <reference types="next/image" />
/// <reference types="react" />

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
