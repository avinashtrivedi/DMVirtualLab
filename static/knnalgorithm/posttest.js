/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
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
            question: "1. Which of the following machine learning algorithm can be used for imputing missing values of both categorical and continuous variables?", ///// Write the question inside double quotes
            answers: {
                a: "K-NN", ///// Write the option 1 inside double quotes
                b: "Linear Regression", ///// Write the option 2 inside double quotes
                c: "Logistic Regression",
                d: "None of these",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "2. [True or False] k-NN algorithm does more computation on test time rather than train time.", ///// Write the question inside double quotes
            answers: {
                a: "True", ///// Write the option 1 inside double quotes
                b: "False", ///// Write the option 2 inside double quotes
                c: "None of these",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "Which of the following statements is true for k-NN classifiers ?", ///// Write the question inside double quotes
            answers: {
                a: "The classification accuracy is better with larger values of k", ///// Write the option 1 inside double quotes
                b: "The decision boundary is smoother with smaller values of k", ///// Write the option 2 inside double quotes
                c: "The decision boundary is linear",
                d: "k-NN does not require an explicit training step",
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: " In k-NN what will happen when you increase/decrease the value of k?", ///// Write the question inside double quotes
            answers: {
                a: "The boundary becomes smoother with increasing value of K", ///// Write the option 1 inside double quotes
                b: "The boundary becomes smoother with decreasing value of K", ///// Write the option 2 inside double quotes
                c: "Smoothness of boundary doesn’t dependent on value of K",
                d: "None of these",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "Which of the following will be true about k in k-NN in terms of Bias?", ///// Write the question inside double quotes
            answers: {
                a: "When you increase the k the bias will be increases ", ///// Write the option 1 inside double quotes
                b: "When you decrease the k the bias will be increases", ///// Write the option 2 inside double quotes
                c: "Can’t say",
                d: "None of these",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
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