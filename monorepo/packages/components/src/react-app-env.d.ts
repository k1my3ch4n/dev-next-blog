declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.js" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
