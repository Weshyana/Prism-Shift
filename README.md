# Prism Shift

Prism Shift is a unique JavaScript-based strategy puzzle game where players align prismatic crystals to form resonant color chains. Match crystal colors (red, blue, violet) in adjacent grid cells to create chains, earning points and advancing through resonance tiers. Built with Node.js and the `canvas` library, this game is designed for developers seeking a modular, extensible project.

## Features
- **Color-Based Gameplay**: Align crystals with matching colors (red, blue, violet) horizontally or vertically to form resonant chains.
- **Resonance Tiers**: Progress through tiers as you score, increasing crystal counts and resonance levels.
- **Modular JavaScript**: Clean, object-oriented code for seamless integration and extension.
- **Canvas Rendering**: Server-side rendering with the `canvas` library, suitable for desktop or web applications.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/prism-shift.git
   ```
2. Navigate to the project directory:
   ```bash
   cd prism-shift
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the game:
   ```bash
   npm start
   ```

## How to Play
- **Objective**: Align adjacent crystals with the same color (red, blue, violet) horizontally or vertically by cycling their colors.
- **Scoring**: Each resonant chain earns 30 points multiplied by the current tier.
- **Tier Progression**: Reach 300 points per tier to advance, increasing crystal count and resonance levels.
- **Interaction**: Use `game.handleClick(x, y)` to cycle crystal colors (requires UI integration).
- **Reset**: Call `game.reset()` to restart the game.

## Development
- **Tech Stack**: Node.js, JavaScript, `canvas`
- **Dependencies**: `canvas` for rendering
- **Code Structure**:
  - `index.js`: Main game logic and canvas rendering.
  - `crystal.js`: Crystal class for prismatic entities.
  - `package.json`: Project metadata and dependencies.
- **Extending**: Integrate with a UI framework (e.g., Electron for desktop or a web server) to handle input and display the canvas.

## Notes
- The current implementation outputs a PNG snapshot (`output.png`) for testing. For interactive play, integrate with a UI framework to handle mouse clicks and real-time rendering.
- Example integration: Use Electron for a desktop app or a WebSocket server for web-based play.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major updates, open an issue first to discuss your ideas.

## Support
If you enjoy Prism Shift and want to support its development, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/Weshyana). Your support helps keep this project alive and growing!

## License
MIT License. See [LICENSE](LICENSE) for details.
