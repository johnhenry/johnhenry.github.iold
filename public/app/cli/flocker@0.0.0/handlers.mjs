import HELPSTRING, { BUNDLE } from "./helpstring.mjs";
import { VERSION } from "./settings.mjs";
export const bundle = ({ help }, ...rest) => {
  if (help) {
    console.log(BUNDLE);
    return;
  }
};
export const version = (args, dir, ...rest) => {
  console.log(VERSION);
};
export const error = (e, args, dir, ...rest) => {
  if (e) {
    throw e;
  }
  if (!rest.length) {
    console.log(HELPSTRING);
  } else {
    console.log("error");
  }
};
