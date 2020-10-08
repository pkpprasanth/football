var count = 0;
var runteam1 = [];
var runteam2 = [];
var score1;
var score2;
var confetti;
function play() {
    randomNumber = Math.floor(Math.random() * 2);;
    count = count + 1;

    console.log("count ", count);
    if (count == 11) {
        document.getElementById('btn').style.visibility = "hidden";
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log("Team 1 " + runteam1)
        console.log("Team 2 " + runteam2)
        score1 = runteam1.reduce(reducer);
        score2 = runteam2.reduce(reducer);
        var teamname1 = document.getElementById("team1").textContent;
        var teamname2 = document.getElementById("team2").textContent;
        var confettiSettings = {
            target: "confetti-canvas",
            props: ["square", "triangle", "line", "circle"],
            clock: 100,
            max: 500,
            animate: true
        };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        document.getElementById("confetti-canvas").style.zIndex = "1";
        if (score1 < score2) {
            document.getElementById("result").innerHTML = teamname2 + " Winner"
        }
        else if (score1 == score2) {
            document.getElementById("result").innerHTML = " Match draw try again"
        }
        else {
            document.getElementById("result").innerHTML = teamname1 + " Winner"
        }
        document.getElementById('teamname1').innerHTML = teamname1 + "  :  " + score1;
        document.getElementById('teamname2').innerHTML = teamname2 + "  :   " + score2;
        document.getElementById('board').style.visibility = "visible";
    }
    else if (count % 2 == 0) {

        var name = document.getElementById("team2").textContent;
        runteam2.push(player2(randomNumber))
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }
    else {
        var name = document.getElementById("team1").textContent;
        runteam1.push(player1(randomNumber))
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }

}

var index1 = 0;
function player1(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index1++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index1++].style.backgroundColor = "#f00";
    }
    return randomNumber;
}

var index2 = 0;
function player2(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress1").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index2++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index2++].style.backgroundColor = "#f00";
    }
    return randomNumber;

}
