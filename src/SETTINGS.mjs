export const SITE_AUTHOR = "John Henry";
export const SITE_TITLE = process.env.SITE_TITLE || "John Henry";
export const SITE_CANONICAL_URL =
  process.env.SITE_CANONICAL_URL || "https://iamjohnhenry.com";
export const SITE_DESCRIPTION =
  process.env.SITE_DESCRIPTION || "John Henry's Person Portfolio and Blog";
export const SITE_KEYWORDS = process.env.SITE_KEYWORDS
  ? process.env.SITE_KEYWORDS.split(",")
  : [];
export const TAG_MANAGER_ID = process.env.TAG_MANAGER_ID || "";
