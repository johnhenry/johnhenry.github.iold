registerPaint(
  "background-canvas",
  class {
    static get inputProperties() {
      return ["--background-canvas", "--background-canvas-arg"];
    }
    paint(...args) {
      eval(args[2].get("--background-canvas").toString())(...args);
    }
  }
);
