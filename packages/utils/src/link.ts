export const getExternalLinkProps = (href: string) => ({
  target: href.startsWith("mailto:") ? undefined : ("_blank" as const),
  rel: "noopener noreferrer" as const,
});
