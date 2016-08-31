// Bind game
const snake = new LifelySnake(document.getElementById('snake-target'), {
    width: 400,
    height: 400,
    grid: 20,
    speed: 12000,
    wrap: true,
    chanceOfSpecialItem: 0.1, // 0 - 1
    specialItemTimeout: 50 // amount of snake-ticks
});
