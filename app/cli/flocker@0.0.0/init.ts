import { ensureDirSync, ensureFileSync } from "https://deno.land/std/fs/mod.ts";
export default ()=>{
  ensureFileSync(`${Deno.env.get("HOME")}/.flocker/configuration.json`);
  ensureDirSync(`${Deno.env.get("HOME")}/.flocker/bundles`);
  ensureDirSync(`${Deno.env.get("HOME")}/.flocker/directives`);
  ensureDirSync(`${Deno.env.get("HOME")}/.flocker/routes`);
}