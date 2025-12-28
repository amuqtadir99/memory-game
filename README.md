# [Memory Master - Modern Memory Card Game](https://memory-game-seven-sigma.vercel.app/)

A beautifully designed, feature-rich memory card matching game built with modern web technologies. This is an enhanced version inspired by the classic Udacity Memory Game project, completely reimagined with additional features and modern best practices.

## Features

### Core Gameplay
- **Card Matching Mechanics** - Classic memory game where you flip cards to find matching pairs
- **Multiple Difficulty Levels**
  - Easy: 8 cards (4 pairs)
  - Medium: 16 cards (8 pairs)
  - Hard: 24 cards (12 pairs)
- **Dynamic Star Rating** - Performance-based rating system (1-3 stars)
- **Move Counter** - Track your efficiency
- **Timer** - See how fast you can complete the game

### Enhanced Features
- **Dark/Light Theme Toggle** - Switch between themes with smooth transitions
- **Sound Effects** - Audio feedback for flips, matches, and victories (with toggle)
- **Best Time Tracking** - Personal records saved per difficulty level
- **Statistics Dashboard**
  - Total games played
  - Total wins
  - Win rate percentage
- **Local Storage Persistence** - All stats and preferences saved locally
- **Victory Modal** - Celebration screen with game summary
- **New Record Notifications** - Get notified when you beat your best time
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Technical Highlights
- **Modern ES6+ JavaScript** - Class-based architecture with modules
- **CSS Grid & Flexbox** - Advanced layouts
- **CSS Variables** - Dynamic theming system
- **Smooth Animations** - CSS transitions and keyframes
- **Web Audio API** - Procedural sound generation
- **Local Storage API** - Data persistence
- **Semantic HTML5** - Accessible markup
- **Single Page Application** - No page reloads

## Project Structure

```
Memory game/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styles with CSS variables and animations
├── js/
│   └── app.js          # Game logic and state management
└── README.md           # This file
```

## How to Play

1. **Start the Game**
   - Open `index.html` in a modern web browser
   - Select your preferred difficulty level
   - Click "New Game" to start

2. **Playing**
   - Click on any card to flip it over
   - Click a second card to find its match
   - If the cards match, they stay face up
   - If they don't match, they flip back over
   - Continue until all pairs are matched

3. **Winning**
   - Match all pairs to win
   - Try to win with the fewest moves possible
   - Beat your best time for each difficulty level

## Game Controls

- **Difficulty Selector** - Choose between Easy, Medium, or Hard
- **Sound Toggle** - Enable/disable sound effects
- **New Game Button** - Start a fresh game
- **Theme Toggle** - Switch between light and dark modes

## Star Rating System

Your performance is rated based on the number of moves:

**Easy Mode (8 cards)**
- 3 stars: ≤8 moves
- 2 stars: ≤12 moves
- 1 star: >12 moves

**Medium Mode (16 cards)**
- 3 stars: ≤16 moves
- 2 stars: ≤24 moves
- 1 star: >24 moves

**Hard Mode (24 cards)**
- 3 stars: ≤24 moves
- 2 stars: ≤36 moves
- 1 star: >36 moves

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid for layout
  - CSS Variables for theming
  - Flexbox for component alignment
  - Keyframe animations
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Modern features including:
  - Classes
  - Arrow functions
  - Template literals
  - Destructuring
  - Array methods (map, forEach, etc.)
  - Local Storage API
  - Web Audio API

## Browser Compatibility

This game works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## Local Development

Simply open the `index.html` file in your browser. For a better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## Customization

### Adding More Card Symbols
Edit the `cardSymbols` array in `js/app.js`:

```javascript
this.cardSymbols = [
    '🎮', '🎯', '🎨', // Add more emoji here
];
```

### Changing Star Thresholds
Modify the `difficulties` object in `js/app.js`:

```javascript
this.difficulties = {
    easy: { pairs: 4, stars: { 3: 8, 2: 12, 1: 16 } },
    // Adjust the numbers for different star thresholds
};
```

### Customizing Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    /* Modify other colors here */
}
```

## Features Comparison: Original vs Enhanced

| Feature | Original Udacity Project | This Enhanced Version |
|---------|-------------------------|----------------------|
| Basic card matching | ✅ | ✅ |
| Move counter | ✅ | ✅ |
| Star rating | ✅ | ✅ |
| Timer | ❌ | ✅ |
| Difficulty levels | ❌ | ✅ (3 levels) |
| Dark/Light theme | ❌ | ✅ |
| Sound effects | ❌ | ✅ |
| Best time tracking | ❌ | ✅ |
| Statistics dashboard | ❌ | ✅ |
| Local storage | ❌ | ✅ |
| Victory modal | ❌ | ✅ |
| Responsive design | Basic | ✅ (Advanced) |
| Modern animations | ❌ | ✅ |
| Modular JS | ❌ | ✅ (ES6 Classes) |

## Performance Optimizations

- **Efficient DOM manipulation** - Minimal reflows and repaints
- **Event delegation** - Optimized event handling
- **CSS animations** - Hardware-accelerated transforms
- **Web Audio API** - Lightweight sound generation without files
- **LocalStorage caching** - Fast data retrieval

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast mode support
- Responsive text sizing

## Future Enhancement Ideas

- [ ] Online multiplayer mode
- [ ] Custom card themes (animals, flags, etc.)
- [ ] Leaderboard with cloud sync
- [ ] Achievements and badges
- [ ] Timed challenge mode
- [ ] Hints system
- [ ] Undo last move
- [ ] Card shuffle animation
- [ ] Custom difficulty settings
- [ ] Progressive Web App (PWA) features

## Credits

- Inspired by the [Udacity Memory Game Project](https://github.com/udacity/fend-project-memory-game)
- Built with modern web technologies
- Emoji card symbols from Unicode standard

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and add your own enhancements! Some ideas:
- Add new card themes
- Implement multiplayer functionality
- Add more sound effects
- Create additional difficulty modes
- Improve accessibility features

## Contact

Created as an enhanced learning project demonstrating modern web development practices.

## Author

**Abdul Muqtadir**
- GitHub: [@amuqtadir99](https://github.com/amuqtadir99)
- LinkedIn: [LinkedIn - Abdul Muqtadir](https://www.linkedin.com/in/amuqtadir1/)

Created: [27 December 2025]
Last Updated: [28 December 2025]


---

**Enjoy the game and challenge your memory!** 🧠✨
