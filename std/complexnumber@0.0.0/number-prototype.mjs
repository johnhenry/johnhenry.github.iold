Number.prototype.consoleIterator = function(){
  return [this];
}
Object.defineProperty(Number.prototype, "r", {
  get: function () {
    return this;
  }
});
Object.defineProperty(Number.prototype, "i", {
  get: function () {
    return 0;
  }
});
Object.defineProperty(Number.prototype, "m", {
  get: function () {
    return this;
  }
});
Object.defineProperty(Number.prototype, "a", {
  get: function () {
    return 0;
  }
});