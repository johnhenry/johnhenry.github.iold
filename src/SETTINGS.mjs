export const SITE_AUTHOR = "John Henry";

export const SITE_TITLE = process.env.SITE_TITLE || "John Henry";

export const SITE_FAVICON = process.env.SITE_FAVICON || "/image/iajh.png";

export const SITE_FAVICON_TYPE =
  process.env.SITE_FAVICON_TYPE || "image/x-icon";

export const SITE_BASE_PATH = process.env.SITE_BASE_PATH || "";

export const SITE_LIB_PATH =
  process.env.SITE_LIB_PATH || "https://johnhenry.github.io/lib/";

export const SITE_CANONICAL_URL =
  process.env.SITE_CANONICAL_URL || "http://localhost:3000/";

export const SITE_DESCRIPTION =
  process.env.SITE_DESCRIPTION || "John Henry's Person Portfolio and Blog";

export const SITE_KEYWORDS = process.env.SITE_KEYWORDS
  ? process.env.SITE_KEYWORDS.split(",")
  : [];

export const TAG_MANAGER_ID = process.env.TAG_MANAGER_ID || "";
