// ===== My Game Hub Script =====

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎮 Game Hub loaded successfully!");

  // Find all Play buttons
  const playButtons = document.querySelectorAll(".game-info a");

  // Attach event listeners to each button
  playButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Stop link from reloading the page
      const gameNumber = index + 1;
      alert(`🚧 Game ${gameNumber} is under construction. Coming soon!`);
      // Later: You can replace this with actual game loading logic.
      // Example: window.location.href = `/games/game${gameNumber}.html`;
    });
  });
});

