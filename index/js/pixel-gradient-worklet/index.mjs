class PixelGradient {
  static get inputProperties() {
    // The CSS values we're interested in:
    return ["--pixel-gradient-color", "--pixel-gradient-size"];
  }
  paint(ctx, bounds, props) {
    // Get styles from our input properties:
    const size = props.get("--pixel-gradient-size").value;
    ctx.fillStyle = props.get("--pixel-gradient-color");

    // Loop over columns
    for (let x = 0; x < bounds.width; x += size) {
      // Loop over rows
      for (let y = 0; y < bounds.height; y += size) {
        // Convert our vertical position to 0-1
        const pos = (y + size / 2) / bounds.height;
        // Only draw a box if a random number
        // is less than pos
        if (Math.random() < pos) ctx.fillRect(x, y, size, size);
      }
    }
  }
}

// Give our custom painting a name
// (this is how CSS will reference it):
globalThis.registerPaint("pixel-gradient", PixelGradient);
