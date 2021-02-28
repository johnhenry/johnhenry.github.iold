import ColorWheel from "./index.mjs";
const c = new ColorWheel({lightness:0.6, max:1});
const printSequential = (total)=>{
  let steps = 0;
  return ()=>{
    const hex = c.color(steps/total*2*Math.PI, 1);
    console.log(`%c#${hex} θ=${2*(steps % total)/total}π`, `color:#${hex}`)
    steps++;
  };
}
setInterval(printSequential(64), 24);