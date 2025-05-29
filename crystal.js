class Crystal {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color; // 0: red, 1: blue, 2: violet
    this.resonance = Math.random() * 50 + 50;
  }

  draw(ctx) {
    ctx.fillStyle = this.color === 0 ? '#ff3333' : this.color === 1 ? '#3333ff' : '#cc33cc';
    ctx.beginPath();
    ctx.arc(this.x + 20, this.y + 20, this.resonance / 5, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.resonance -= 0.4;
    return this.resonance <= 0;
  }
}

module.exports = Crystal;
