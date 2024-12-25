document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    localStorage.setItem('playerName', playerName);

    alert(`Player name "${playerName}" has been saved!`);

    // Optionally, hide the player name form after saving
    document.getElementById('playerForm').style.display = 'none';
});
function startQuiz() {
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        document.location = 'quiz3.html';
    } else {
        alert('Please enter your name before starting the quiz.');
    }
}
function startQuiz1() {
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        document.location = 'quiz1.html';
    } else {
        alert('Please enter your name before starting the quiz.');
    }
}
function startQuiz2() {
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        document.location = 'quiz2.html';
    } else {
        alert('Please enter your name before starting the quiz.');
    }
}
