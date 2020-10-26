// import testing framework
import TAPRunner from "../tester@0.0.0/TAPRunner.mjs";
import equal from "../tester@0.0.0/tests/equal.mjs";
import ok from "../tester@0.0.0/tests/ok.mjs";
import notok from "../tester@0.0.0/tests/notok.mjs";

// import library
import './string-prototype.mjs';
import {negater, scale, concat, equal as strEqual, abs } from './NegatableString.mjs';


await TAPRunner("Normal Strings", function *(){
  const SAMPLE_STRING = "sample string";
  yield ok(SAMPLE_STRING.rep, "string has rep property");
  yield ok(SAMPLE_STRING.rep.every(([char, sign])=>!sign), "all characters are \"positive\"." );
  yield equal(SAMPLE_STRING, SAMPLE_STRING.rep.map(([char])=>char).join(""), "all characters have proper \"absolute value\"." );
});

await TAPRunner("Negative Strings: Create negative string by scaling regular string by -1", function *(){
  const DESREVER = "DESREVER";
  const REVERSED = scale(DESREVER, -1);
  yield equal("REVERSED", REVERSED.toString().split().reverse().join(""), "negative string should be textually reversed");
  yield equal("~R~E~V~E~R~S~E~D", REVERSED.toString("~").split().reverse().join(""), "negative numbres should be represented by prefix when given passed to toString method");
});

await TAPRunner("Negater: Use specific character to negate characters within string", function *(){

  yield ok(strEqual(negater("mississippi"), "mississippi"))
  yield notok(strEqual(negater("m~iss~iss~ipp~i"), "mississippi"))
  yield ok(strEqual(negater("m~iss~iss~ipp~i").toString(), "mississippi"))
  
  yield ok(strEqual(negater("mis~sis~sip~pi"), "miiii"))
  yield ok(strEqual(negater("mi~ssi~ssi~ppi"), "miiii"))
  yield ok(strEqual(negater("mi~ss~is~si~pp~i"), "m"))
  yield ok(strEqual(negater("1~-1", "-").toString(), "1~1"));
  
});

await TAPRunner("Concat: Combine negative numbers", function *(){
  const HELLO = "HELLO";
  const GOODBYE = scale("HELLO", -1);
  const COMBO = concat(HELLO, GOODBYE);
  yield equal(HELLO + GOODBYE, concat("HELLO", abs(GOODBYE)).toString());
  yield ok(strEqual(COMBO, ""));
});

