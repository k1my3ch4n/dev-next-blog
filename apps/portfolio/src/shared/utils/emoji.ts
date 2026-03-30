const EMOJI_REGEX = /^[\p{Emoji}]/u;
const EMOJI_WITH_SPACE_REGEX = /^[\p{Emoji}]\s*/u;

export const extractEmoji = (text: string, fallback = "📁"): string =>
  text.match(EMOJI_REGEX)?.[0] ?? fallback;

export const stripEmoji = (text: string): string =>
  text.replace(EMOJI_WITH_SPACE_REGEX, "");
