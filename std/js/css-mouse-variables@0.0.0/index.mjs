// https://codepen.io/bramus/pen/eBZgPB
// https://css-tricks.com/how-to-map-mouse-position-in-css/
// https://codersblock.com/blog/what-can-you-put-in-a-css-variable/
const target = globalThis.document;
const wrapString = (number)=>`'${number}'`;
const setWindowSize = ()=>{
  target.documentElement.style.setProperty('--window-width', globalThis.innerWidth);
  target.documentElement.style.setProperty('--window-height', globalThis.innerHeight);
  target.documentElement.style.setProperty('--window-width-str', wrapString(globalThis.innerWidth));
  target.documentElement.style.setProperty('--window-height-str', wrapString(globalThis.innerHeight));
  target.documentElement.style.setProperty('--mouse-up-visibility', 'visible');
  target.documentElement.style.setProperty('--mouse-down-visibility', '');
}
globalThis.addEventListener('load', setWindowSize);
globalThis.addEventListener('resize', setWindowSize);


target.addEventListener('mousemove', ({clientX, clientY,}) => {
  const angle = Math.atan2(clientY, clientX) + Math.PI/2;
  const magnitude = Math.sqrt(clientX**2+clientY**2);
  const magnitudeNormalized = Math.sqrt((clientX/globalThis.innerWidth)**2+(clientY/globalThis.innerHeight)**2);
  target.documentElement.style.setProperty('--mouse-x', clientX);
  target.documentElement.style.setProperty('--mouse-y', clientY);
  target.documentElement.style.setProperty('--mouse-x-str', wrapString(clientX));
  target.documentElement.style.setProperty('--mouse-y-str', wrapString(clientY));
  target.documentElement.style.setProperty('--mouse-ang', angle);
  target.documentElement.style.setProperty('--mouse-ang-str', wrapString(angle));
  target.documentElement.style.setProperty('--mouse-mag', magnitude);
  target.documentElement.style.setProperty('--mouse-mag-str', wrapString(magnitude));
  target.documentElement.style.setProperty('--mouse-magnorm', magnitudeNormalized);
  target.documentElement.style.setProperty('--mouse-magnorm-str', wrapString(magnitudeNormalized));

});

target.addEventListener('mouseup', () => {
  target.documentElement.style.setProperty('--mouse-up-visibility', 'visible');
  target.documentElement.style.setProperty('--mouse-down-visibility', '');
});

target.addEventListener('mousedown', () => {
  target.documentElement.style.setProperty('--mouse-up-visibility', '');
  target.documentElement.style.setProperty('--mouse-down-visibility', 'visible');
});
