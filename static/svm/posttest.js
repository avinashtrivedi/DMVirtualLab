/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<span class="${letter}"><label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${currentQuestion.answers[letter]}
        </label></span><br>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"><strong> ${currentQuestion.question}</strong></div>
      <div class="answers"> ${answers.join("")}</div><br>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const answerSpans = answerContainer.getElementsByTagName("span");
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;  
            }
            // color the correct answers to green, wrong answers to red and rest to black
           for(var i=0;i<answerSpans.length;i++)
           {
               if(answerSpans[i].getAttribute("class") === currentQuestion.correctAnswer)
                   answerSpans[i].style.color = "green";
               else if(answerSpans[i].getAttribute("class") === userAnswer)
                   answerSpans[i].style.color = "red";
               else
                   answerSpans[i].style.color = "black";
           }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
        question: "1. What is the best separating hyperplane?", ///// Write the question inside double quotes
        answers: {
            a: "The one that maximizes the distance to the closest data points from both classes.",
            b: "The one that equally divides the classes.",
            c: "The one that divides the classes horizontally.",
            d: "The one that divides the classes vertically.",///// Write the option 2 inside double quotes
        },
        correctAnswer: "a" ///// Write the correct option inside double quotes
    },

    {
        question: "2. When the C parameter is set to infinite, which of the following holds true?",
        answers: {
            a: "The optimal hyperplane if exists, will be the one that completely separates the data.",
            b: "The soft-margin classifier will separate the data.",
            c: "The hard-margin classifier will separate the data.",
            d: "None of these.",
        },
        correctAnswer: "a"                ///// Write the correct option inside double quotes
    },


    {
        question: "3.Support vectors are the data points that lie closest to the decision surface.",  ///// Write the question inside double quotes
        answers: {
            a: "False.",
            b: "True.",
           
        },
        correctAnswer: "a"                ///// Write the correct option inside double quotes
    },







    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
