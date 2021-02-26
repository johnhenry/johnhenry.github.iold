import { shadowOpen } from '/std/simpleelement@0.0.0/textElement.mjs';
import defineTag  from '/std/definetag@0.0.0/index.mjs';
import template from './template.mjs';
export default defineTag(shadowOpen(template));