const defaults = {
  SITE_AUTHOR: "John Henry",
  SITE_TITLE: "John Henry",
  SITE_FAVICON: "/image/iajh.png",
  SITE_FAVICON_TYPE: "image/png",
  SITE_BASE_PATH: "",
  SITE_BLOG_PAGE_SIZE: 8,
  SITE_LIB_PATH: "https://johnhenry.github.io/lib/",
  SITE_CANONICAL_URL: "http://localhost:3000/",
  SITE_DESCRIPTION: "John Henry's Person Portfolio and Blog",
  SITE_KEYWORDS: [],
  TAG_MANAGER_ID: "",
};
export default defaults;

export const SITE_AUTHOR = defaults.SITE_AUTHOR;

export const SITE_TITLE = process.env.SITE_TITLE || defaults.SITE_TITLE;

export const SITE_FAVICON = process.env.SITE_FAVICON || defaults.SITE_FAVICON;

export const SITE_FAVICON_TYPE =
  process.env.SITE_FAVICON_TYPE || defaults.SITE_FAVICON_TYPE;

export const SITE_BASE_PATH =
  process.env.SITE_BASE_PATH || defaults.SITE_BASE_PATH;

export const SITE_BLOG_PAGE_SIZE =
  Number(process.env.SITE_BLOG_PAGE_SIZE) || defaults.SITE_BLOG_PAGE_SIZE;

export const SITE_LIB_PATH =
  process.env.SITE_LIB_PATH || defaults.SITE_LIB_PATH;

export const SITE_CANONICAL_URL =
  process.env.SITE_CANONICAL_URL || defaults.SITE_CANONICAL_URL;

export const SITE_DESCRIPTION =
  process.env.SITE_DESCRIPTION || defaults.SITE_DESCRIPTION;

export const SITE_KEYWORDS = process.env.SITE_KEYWORDS
  ? process.env.SITE_KEYWORDS.split(",")
  : defaults.SITE_KEYWORDS;

export const TAG_MANAGER_ID =
  process.env.TAG_MANAGER_ID || defaults.TAG_MANAGER_ID;
