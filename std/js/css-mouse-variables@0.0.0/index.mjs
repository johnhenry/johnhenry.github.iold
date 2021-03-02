const target = globalThis.document;

const setWindowSize = ()=>{
  target.documentElement.style.setProperty("--window-width", globalThis.innerWidth);
  target.documentElement.style.setProperty("--window-height", globalThis.innerHeight);
  target.documentElement.style.setProperty("--window-width-str", `"${globalThis.innerWidth}"`);
  target.documentElement.style.setProperty("--window-height-str", `"${globalThis.innerHeight}"`);
  target.documentElement.style.setProperty("--mouse-up-visibility", 'visible');
  target.documentElement.style.setProperty("--mouse-down-visibility", '');
}
globalThis.addEventListener('load', setWindowSize);
globalThis.addEventListener('resize', setWindowSize);

target.addEventListener("mousemove", ({clientX, clientY,}) => {
  target.documentElement.style.setProperty("--mouse-x", clientX);
  target.documentElement.style.setProperty("--mouse-y", clientY);
  target.documentElement.style.setProperty("--mouse-x-str", `"${clientX}"`);
  target.documentElement.style.setProperty("--mouse-y-str", `"${clientY}"`);
  target.documentElement.style.setProperty("--mouse-arctan2", Math.atan2(clientY, clientX));
});

target.addEventListener("mouseup", () => {
  target.documentElement.style.setProperty("--mouse-up-visibility", 'visible');
  target.documentElement.style.setProperty("--mouse-down-visibility", '');
});

target.addEventListener("mousedown", () => {
  target.documentElement.style.setProperty("--mouse-up-visibility", '');
  target.documentElement.style.setProperty("--mouse-down-visibility", 'visible');
});
