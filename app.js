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
 const questionView = document.getElementById('questionView').style.display="none";
 const answerView = document.getElementById('answerView').style.display="none";
 const vector = document.getElementById('whiteDonkey').style.display="block";

 const scoreView = document.getElementById('scoreView').style.display="none";


 let currentQuestion = 0;
 let score = 0;
 let questionCounter = 0;
 const MAX_QUESTIONS = 35;
 let availibleQuestions = [{

 }]




let getQuestion;





startButton.addEventListener('click', startGame)

function startGame(){
    questionCounter = 0;
    score = 0;
    console.log('started');
    document.getElementById('startView').style.display='none';
    document.getElementById('questionView').style.display="block";
    

}

getAnswerBtn.addEventListener('click', showAnswer)

function showAnswer(){
    document.body.style.backgroundColor = "#7678ED";
    document.getElementById('questionView').style.display="none";
    document.getElementById('whiteDonkey').style.display='none';
    document.getElementById('vector').style.display='none';
    document.getElementById('answerView').style.display="block";
    


}



yesBtn.addEventListener('click', ifRightAnswer)


function ifRightAnswer(){
    
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('answerView').style.display="none";
    document.getElementById('scoreView').style.display="block";
    document.getElementById('vector').style.display="block";
    document.getElementById('questionView').style.display="none";
    document.getElementById('whiteDonkey').style.display="block";




    var mydata = JSON.parse(questions);
    console.log(mydata);



    score++
    

}




noBtn.addEventListener('click', ifWrongAnswer)


function ifWrongAnswer(){
    
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('answerView').style.display="none";
    document.getElementById('scoreView').style.display="block";
    document.getElementById('vector').style.display="block";
    document.getElementById('questionView').style.display="none";
    document.getElementById('whiteDonkey').style.display="block";





}



oneMoreTimeBtn.addEventListener('click', oneMoreRound)


function oneMoreRound(){


    questionCounter = 0;
    score = 0;

    document.getElementById('startView').style.display="block";
    document.getElementById('answerView').style.display="none";
    document.getElementById('scoreView').style.display="block";
    document.getElementById('vector').style.display="block";
    document.getElementById('questionView').style.display="none";
    document.getElementById('whiteDonkey').style.display="block";





}