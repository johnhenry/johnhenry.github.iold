#!/usr/bin/env deno run --allow-read  --allow-write --unstable --allow-env 
import { parse } from "https://deno.land/std/flags/mod.ts";
import init from "./init.ts";
import main from "./main.mjs";
init();
main(parse(Deno.args));
