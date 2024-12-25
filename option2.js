/*alert("THERE IS MINUS MARK IN THIS QUIZ ")
alert("WELCOME PLAYER 👍👍👍")*/



/*const quizData = [
    {
        question: "Grant central Terminal park Avenue, NewYork is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        correct: "a",
    },
    {
        question: "Entamology is the science that studies about",
        a: "Behaviour of human",
        b: "Insect",
        c: "the origin and history of technical and scientific terms",
        correct: "b",
    },

    {
        question: "Erita,which became the 182 nd membe of the un in 1993 is in continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        correct: "b",
    },]
const Quiz = document.getElementById('quiz')
const ans = document.querySelectorAll('.answer')
const ques = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text');
const submitbutton = document.getElementById('Submit');
let currentQuiz = 0
let score = 0;

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    ques.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}
window.onload = function () {
    var threeSeconds = 10, // 10seconds
        display = document.querySelector('#time');
    startTimer(threeSeconds, display);
};
document.addEventListener('DOMContentLoaded', function() {
    displayLeaderboard();
});
function startTimer(duration, display) {
    var timer = duration, seconds;
    var interval = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 11 ? "0" + seconds : seconds;
        display.textContent = "Time left: " + seconds + " seconds";
        submitbutton.addEventListener('click', () => {
            const answer = getSelected()
            if (answer) {
                if (answer === quizData[currentQuiz].correct) {
                    score++
                }
                
        
                currentQuiz++;
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                }
                else {
        
                    Quiz.innerHTML =
                        `you scored ${score} out of ${quizData.length} questions correctly
        
        
                        <button class='final' onclick="location.reload()">  start again  </button>
                        <h2>Scoreboard</h2>
        <ul id="leaderboard">
        </ul>`
        

            
        
                }
            }
        })
        
        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            Quiz.innerHTML =
                `you scored ${score} out of ${quizData.length} questions correctly


                <button class='final' onclick="location.reload()">  start again  </button>
                <h2>Scoreboard</h2>
        <ul id="leaderboard">
        
        </ul>`
        
        }
    }, 1000);
    
}

function deselectAnswers() {
    ans.forEach(ansE1 => ansE1.checked = false)
}
function getSelected() {
    let answer
    ans.forEach(ansE1 => {
        if (ansE1.checked) {
            answer = ansE1.id
        }
    })
    return answer
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';

    leaderboard.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        leaderboardElement.appendChild(li);
    });
}*/
/*alert("THERE IS MINUS MARK IN THIS QUIZ ")
alert("WELCOME PLAYER 👍👍👍")*/

const quizData = [
    {
        question: "1. Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _ 54, 60. ",
        a: "32, 45",
        b: "30, 48",
        c: "24, 40",
        correct: "b",
    },
    {
        question: "2.Solve 3 + 6 × ( 5 + 4) ÷ 3 - 7 ",
        a: "11",
        b: "16",
        c: "14",
        correct: "c",
    },
    {
        question: "3.How Many Years are there in a Decade? ",
       
        a: "10",
        b: "12",
        c: "15",
        correct: "a",
    },
];

const Quiz = document.getElementById('quiz');
const ans = document.querySelectorAll('.answer');
const ques = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitbutton = document.getElementById('Submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    ques.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

window.onload = function () {
    var threeSeconds = 60, // 10 seconds
        display = document.querySelector('#time');
    startTimer(threeSeconds, display);
};

document.addEventListener('DOMContentLoaded', function() {
    displayLeaderboard();
});

function startTimer(duration, display) {
    var timer = duration, seconds;
    var interval = setInterval(function () {
        seconds = parseInt(timer % 60,0);
        seconds = seconds < 61 ?   seconds : seconds;
        display.textContent = "Time left: " + seconds + " seconds";

        submitbutton.addEventListener('click', () => {
            const answer = getSelected();
            if (answer) {
                if (answer === quizData[currentQuiz].correct) {
                    score++;
                }
                currentQuiz++;
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    clearInterval(interval);
                    saveScoreAndDisplay();
                }
            }
        });

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            saveScoreAndDisplay();
        }
    }, 1000);
}

function deselectAnswers() {
    ans.forEach(ansE1 => ansE1.checked = false);
}

function getSelected() {
    let answer;
    ans.forEach(ansE1 => {
        if (ansE1.checked) {
            answer = ansE1.id;
        }
    });
    return answer;
}

/*function saveScoreAndDisplay() {
    const playerName = localStorage.getItem('playerName') || 'Player';

    // Retrieve existing leaderboard from localStorage
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Add current player's score
    leaderboard.push({ name: playerName, score: score });

    // Sort the leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    // Store updated leaderboard in localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Display the player's score and leaderboard
    Quiz.innerHTML = `
        <h2>You scored ${score} out of ${quizData.length} questions correctly</h2>
        <button class='final' onclick="location.reload()">Start again</button>
        <h2>Scoreboard</h2>
        <ul id="leaderboard"></ul>`;

    displayLeaderboard();
}
function saveScoreAndDisplay() {
    const playerName = localStorage.getItem('playerName') || 'Player';

    // Retrieve existing leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Check if the player already exists in the leaderboard
    const playerIndex = leaderboard.findIndex(player => player.name === playerName);

    if (playerIndex !== -1) {
        // Update the existing player's score if the new score is higher
        if (score > leaderboard[playerIndex].score) {
            leaderboard[playerIndex].score = score;
        }
    } else {
        // Add new player to the leaderboard
        leaderboard.push({ name: playerName, score: score });
    }

    // Sort the leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    // Store updated leaderboard in localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Display the player's score and leaderboard
    Quiz.innerHTML = `
        <h2>You scored ${score} out of ${quizData.length} questions correctly</h2>
        <button class='final' onclick="location.reload()">Start again</button>
        <h2>Scoreboard</h2>
        <ul id="leaderboard"></ul>`;

    displayLeaderboard();
}*/

/*
function saveScoreAndDisplay() {
    const playerName = localStorage.getItem('playerName') || 'Player';

    // Retrieve existing leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Remove existing entry for the player if it exists
    leaderboard = leaderboard.filter(player => player.name !== playerName);

    // Add the player with the new score
    leaderboard.push({ name: playerName, score: score });

    // Sort the leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    // Store updated leaderboard in localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Display the player's score and leaderboard
    Quiz.innerHTML = `
    
            <button onclick="toggleMenu()" class="dropbtn">Menu</button>
             <div id="menuItems" class="dropdown-content">
        <a href="#verbal" onclick="startQuiz2()">Verbal</a>
        <a href="#general" onclick="startQuiz()">General</a>
        <a href="#logical" onclick="startQuiz1()">Logical</a>
    </div>
       
        <h2>You scored ${score} out of ${quizData.length} questions correctly</h2>
        <button class='final' onclick="location.reload()">Start again</button>
        <h2>Scoreboard</h2>
        <ul id="leaderboard"></ul>
        `;


    displayLeaderboard();
}

  






function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';

    leaderboard.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        leaderboardElement.appendChild(li);
    });
}*/
function saveScoreAndDisplay() {
    const playerName = localStorage.getItem('playerName') || 'Player';

    // Retrieve existing leaderboard from localStorage
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Remove existing entry for the player if it exists
    leaderboard = leaderboard.filter(player => player.name !== playerName);

    // Add the player with the new score
    leaderboard.push({ name: playerName, score: score });

    // Sort the leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    // Store updated leaderboard in localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Display the player's score and leaderboard
    document.getElementById('quiz').innerHTML = `
        
        <h2>You scored ${score} out of ${quizData.length} questions correctly</h2>
        <button onclick="toggleMenu()" class="dropbtn " >Menu</button>
        <div id="menuItems" class="dropdown-content">
            <a href="verb.html">Verbal</a>
            <a href="general.html">General</a>
            <a href="logical.html">Logical</a>
            
        </div>
        <button class='final' onclick="location.reload()">Start again</button>
      
        <h2>Scoreboard</h2>
        <ul id="leaderboard"></ul>
    `;

    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';

    leaderboard.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${player.score}`;
        leaderboardElement.appendChild(li);
    });
}

function toggleMenu() {
    document.getElementById('menuItems').classList.toggle('show');
}

// CSS for the show class
const style = document.createElement('style');
style.innerHTML = `
    .dropdown-content.show {
        display: block;
    }
`;
document.head.appendChild(style);

















