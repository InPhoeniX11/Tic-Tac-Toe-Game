﻿# Tic-Tac-Toe Game

This is an interactive implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game is designed to be visually appealing and user-friendly, allowing players to enjoy a fun match with simple controls.

---

## Features

1. **Interactive Gameplay**:
   - Players take turns clicking on squares to mark them with "X" or "O."
   - The game automatically detects winners or a draw and displays a message.

2. **Dynamic UI**:
   - Winning combinations are visually highlighted.
   - Buttons allow for resetting or starting a new game easily.

3. **Responsive Design**:
   - The layout adjusts seamlessly for mobile and desktop devices.

4. **Accessibility Enhancements**:
   - Includes ARIA roles and labels for better screen reader support.

---

## Technologies Used

- **HTML**: Provides the structure for the game layout.
- **CSS**: Styles the interface, including hover effects and animations.
- **JavaScript**: Implements the game logic and interactivity.

---

## How to Run the Project

1. **Download or Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd tic-tac-toe
   ```

3. **Open the `index.html` File in a Web Browser**:
   - Double-click on `index.html` or open it through your preferred browser.

---

## File Structure

```
tic-tac-toe/
|-- index.html        # Main HTML file
|-- style.css         # CSS file for styling
|-- app.js            # JavaScript file for game logic
```

---

## Gameplay Instructions

1. Open the game in your browser.
2. Players take turns clicking on empty squares:
   - Player 1 uses "O."
   - Player 2 uses "X."
3. The game announces the winner or a draw after every turn.
4. Use the "Reset Game" or "New Game" buttons to restart.

---

## How It Works

1. **Game Logic**:
   - A winning pattern is any row, column, or diagonal where all three squares have the same mark ("X" or "O").
   - A draw occurs when all squares are filled, and no winning pattern exists.

2. **JavaScript Interaction**:
   - Event listeners are used to handle clicks and update the game board dynamically.
   - Functions detect win or draw conditions and update the UI accordingly.

3. **Dynamic Updates**:
   - Scores and messages are updated in real-time using DOM manipulation.

---

## Responsive Design

- The layout is optimized for both desktop and mobile devices.
- Uses CSS media queries to ensure buttons and text remain accessible on smaller screens.

---

## Future Enhancements

1. Add an AI opponent for single-player mode.
2. Include animations for moves and winning combinations.
3. Allow players to customize their markers and colors.
4. Add a scoreboard to track multiple games.

---

## Credits

- Icons: Styled using CSS.
- Code: Developed by [Sudhanshu Singh].

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project as needed.

