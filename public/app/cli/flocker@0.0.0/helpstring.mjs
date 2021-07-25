import { APPNAME } from "./settings.mjs";

export default `
Usage: ${APPNAME} [OPTIONS] COMMAND
A application for delcarative web development

Commands:
  bundle      Build web-bundles
`;

export const BUNDLE = `
Usage: ${APPNAME} bundle [OPTIONS]
A application for delcarative web development

Options:
  --skip-flockerfile      Skip Flockefile
`;
