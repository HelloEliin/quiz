// Our main CSS
import '../css/app.css'

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


const startButton = document.getElementById('startButton')
let questions = document.getElementById('questions')
const getAnswerBtn = document.getElementById('getAnswerBtn')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const oneMoreTimeBtn = document.getElementById('oneMoreTimeBtn')
const startView = document.getElementById('startView')
const questionView = document.getElementById('questionView')
const answerView = document.getElementById('answerView')
const vector = document.getElementById('whiteDonkey')
const scoreView = document.getElementById('scoreView')
const totalScore = document.getElementById('score')
const counter = document.getElementById('counter')
const counter2 = document.getElementById('counter2')
const progressBar = document.getElementById('progressBar')
const progressBar2 = document.getElementById('progressBar2')
const categories = document.getElementById('category')
const movieScore = document.getElementById("movies").children
const sportsScore = document.getElementById("sports").children
const geographScore = document.getElementById("geograph").children
const historyScore = document.getElementById("history").children
const otherScore = document.getElementById("other").children
const scienceScore = document.getElementById("science").children
const musicScore = document.getElementById("music").children





let currentQuestion = 0;
let score = 0;
let questionCounter = 0;
let allQuestions;
let category;
let progressWidth = 0;
let progressWidth2 = 0;


let correctMovies = [];
let correctSports = [];
let correctScience = [];
let correctHistory = [];
let correctMusic = [];
let correctOther = [];
let correctGeoraph = [];




startButton.addEventListener('click', startGame)

function startGame() {

    axios.get('/questions').then(response => {
        allQuestions = response.data;


        score = 0
        questionCounter = 0;
        progressWidth = 0;
        progressWidth2 = 0;

        question.innerText = allQuestions[questionCounter]['question']
        categories.innerText = allQuestions[questionCounter]['category']
        rightAnswer.innerText = allQuestions[questionCounter]['answer']

        $('#progressBar').width(progressWidth + '%');
        $('#progressBar2').width(progressWidth2 + '%');

        counter2.innerText = "Fråga " + questionCounter + " av 35";
        questionView.style.display = "block";
        startView.style.display = "none";


        questionCounter++

        nextQuestion();

    })
};


function nextQuestion() {



    $('#progressBar').width(progressWidth + '%');

    if (questionCounter >= 6) {

        document.getElementById('scoreView').style.display = "block";
        document.getElementById('questionView').style.display = "none";
        document.getElementById('startView').style.display = "none";
        document.getElementById('score').style.display = "block";
        totalScore.innerText = score + " av 35 rätt";

    } else {

        question.innerText = allQuestions[questionCounter]['question']
        categories.innerText = allQuestions[questionCounter]['category']
        rightAnswer.innerText = allQuestions[questionCounter]['answer']
        questionView.style.display = "block";
        startView.style.display = "none";
        scoreView.style.display = "none";


        counter.innerText = "Fråga " + questionCounter + " av 35";
        counter2.innerText = "Fråga " + questionCounter + " av 35";

    }

}



getAnswerBtn.addEventListener('click', showAnswer)

function showAnswer() {

    $('#progressBar2').width(progressWidth2 + '%');

    document.body.style.backgroundColor = "#7678ED";
    questionView.style.display = "none";
    document.getElementById('whiteDonkey').style.display = 'none';
    document.getElementById('vector').style.display = 'none';
    document.getElementById('answerView').style.display = "block";

    progressWidth += 2.8;
    progressWidth2 += 2.8;

}



yesBtn.addEventListener('click', ifRightAnswer)


function ifRightAnswer() {



    if (allQuestions[questionCounter]['category'] === 'Film & TV') {

        movieScore[correctMovies.length].classList.remove("bg-lightGrey");
        movieScore[correctMovies.length].classList.add("bg-lightGreen");

        correctMovies.push(1)   

    }else if (allQuestions[questionCounter]['category'] === 'Historia') {

        movieScore[correctHistory.length].classList.remove("bg-lightGrey");
        movieScore[correctHistory.length].classList.add("bg-lightGreen");

        correctHistory.push(1)

    }

    else if (allQuestions[questionCounter]['category'] === 'Vetenskap') {

        scienceScore[correctScience.length].classList.remove("bg-lightGrey");
        scienceScore[correctScience.length].classList.add("bg-lightGreen");

        correctScience.push(1)

    }

    else if (allQuestions[questionCounter]['category'] === 'Sport') {

        sportsScore[correctSports.length].classList.remove("bg-lightGrey");
        sportsScore[correctSports.length].classList.add("bg-lightGreen");

        correctSports.push(1)

    }
    else if (allQuestions[questionCounter]['category'] === 'Geografi') {

        geographScore[correctGeoraph.length].classList.remove("bg-lightGrey");
        geographScore[correctGeoraph.length].classList.add("bg-lightGreen");

        correctGeoraph.push(1)

    }


    else if (allQuestions[questionCounter]['category'] === 'Övrigt') {

        otherScore[correctOther.length].classList.remove("bg-lightGrey");
        otherScore[correctOther.length].classList.add("bg-lightGreen");

        correctOther.push(1)

    }







    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('answerView').style.display = "none";
    document.getElementById('scoreView').style.display = "none";
    document.getElementById('vector').style.display = "block";
    questionView.style.display = "block";
    document.getElementById('whiteDonkey').style.display = "block";


    questionCounter++
    score++

    $("#progressBar").width(progressWidth);
    $("#progressBar2").width(progressWidth2);


    nextQuestion();

}




noBtn.addEventListener('click', ifWrongAnswer)


function ifWrongAnswer() {

    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('answerView').style.display = "none";
    document.getElementById('scoreView').style.display = "none";
    document.getElementById('vector').style.display = "block";
    document.getElementById('questionView').style.display = "none";
    document.getElementById('whiteDonkey').style.display = "block";


    questionCounter++



    $("#progressBar").width(progressWidth);
    $("#progressBar2").width(progressWidth2);

    nextQuestion();


}



oneMoreTimeBtn.addEventListener('click', oneMoreRound)


function oneMoreRound() {

    questionCounter = 0;
    score = 0;

    document.getElementById('startView').style.display = "block";
    document.getElementById('answerView').style.display = "none";
    document.getElementById('scoreView').style.display = "none";
    document.getElementById('vector').style.display = "block";
    document.getElementById('questionView').style.display = "none";
    document.getElementById('whiteDonkey').style.display = "block";
    document.getElementById('scoreView').style.display = "none";





}
