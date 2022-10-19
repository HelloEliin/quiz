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
const questionView = document.getElementById('questionView').style.display = "none";
const answerView = document.getElementById('answerView').style.display = "none";
const vector = document.getElementById('whiteDonkey').style.display = "block";
const scoreView = document.getElementById('scoreView').style.display = "none";
const totalScore = document.getElementById('score')
const counter = document.getElementById('counter')
const counter2 = document.getElementById('counter2')
const progressBar = document.getElementById('progressBar')
const progressBar2 = document.getElementById('progressBar2')
const categories = document.getElementById('category')



let currentQuestion = 0;
let score = 0;
let questionCounter = 0;
let allQuestions;
let category;
let progressWidth = 0;
let progressWidth2 = 0;





startButton.addEventListener('click', startGame)

function startGame() {
   axios.get('/questions').then(response => {
         allQuestions = response.data  
         currentQuestion = 0  
         score = 0   
         questionCounter = 1  
         progressWidth = 0;
         progressWidth2 = 0;
     
         question.innerText = allQuestions[currentQuestion]['question'] 
         categories.innerText = allQuestions[currentQuestion]['category']  
         rightAnswer.innerText = allQuestions[currentQuestion]['answer']   
         
         $('#progressBar').width(progressWidth + '%');
         $('#progressBar2').width(progressWidth2 + '%');

         counter2.innerText = "Fråga " + questionCounter + " av 35";
         document.getElementById('questionView').style.display = "block";
         document.getElementById('startView').style.display = "none";



         nextQuestion();
   
     })};
 

     function nextQuestion(){
         
        $('#progressBar').width(progressWidth + '%');

        if(currentQuestion >= 6){

            document.getElementById('scoreView').style.display = "block";
            document.getElementById('questionView').style.display = "none";
            document.getElementById('startView').style.display = "none";
            document.getElementById('score').style.display = "block";
            totalScore.innerText = score + " av 35 rätt";
   
           }else{

            question.innerText = allQuestions[currentQuestion]['question']   //hämtar ut frågan för fråga 1
            rightAnswer.innerText = allQuestions[currentQuestion]['answer']
            document.getElementById('questionView').style.display = "block";
            document.getElementById('startView').style.display = "none";   //hämtar ut svaret för fråga 1
            document.getElementById('scoreView').style.display = "none";
           
            
            counter.innerText = "Fråga " + questionCounter + " av 35";
            counter2.innerText = "Fråga " + questionCounter + " av 35";

           }

     }



getAnswerBtn.addEventListener('click', showAnswer)

function showAnswer() {

    $('#progressBar2').width(progressWidth2 + '%');

    document.body.style.backgroundColor = "#7678ED";
    document.getElementById('questionView').style.display = "none";
    document.getElementById('whiteDonkey').style.display = 'none';
    document.getElementById('vector').style.display = 'none';
    document.getElementById('answerView').style.display = "block";

    progressWidth+=2.8;
    progressWidth2+=2.8;

}



yesBtn.addEventListener('click', ifRightAnswer)


function ifRightAnswer() {

    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('answerView').style.display = "none";
    document.getElementById('scoreView').style.display = "none";
    document.getElementById('vector').style.display = "block";
    document.getElementById('questionView').style.display = "block";
    document.getElementById('whiteDonkey').style.display = "block";

  
    questionCounter++
    currentQuestion++
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
    currentQuestion++
    score++

    $("#progressBar").width(widthProgressBar);
    $("#progressBar2").width(widthProgressBar);

    nextQuestion();


}



oneMoreTimeBtn.addEventListener('click', oneMoreRound)


function oneMoreRound() {

    questionCounter = 0;
    score = 0;

    document.getElementById('startView').style.display = "block";
    document.getElementById('answerView').style.display = "none";
    document.getElementById('scoreView').style.display = "block";
    document.getElementById('vector').style.display = "block";
    document.getElementById('questionView').style.display = "none";
    document.getElementById('whiteDonkey').style.display = "block";
    document.getElementById('scoreView').style.display = "none";





}
