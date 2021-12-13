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


    const  myQuestions = [{
        question: "1.  _____ is a subset of _____.", ///// Write the question inside double quotes
        answers: {
            a: "Data visualization, information design.",
            b: "None of the answers are correct.",
            c: "Information design, data visualization.",
            d: "None of the above.",///// Write the option 2 inside double quotes
        },
        correctAnswer: "a" ///// Write the correct option inside double quotes
    },

{
  question: "2.What is true about data visualization?",  ///// Write the question inside double quotes
  answers: {
    a: "It helps people see their future.",
    b: "It helps people make sense of data.",
    c: "It transforms data to the most basic form.",
    d: "None of these.",     },
  correctAnswer: "b"                ///// Write the correct option inside double quotes
},


{
  question: "3. Which of the following is NOT a trend in data visualization?",  ///// Write the question inside double quotes
  answers: {
    a: "Device Transparency.",
    b: "Mobility.",
    c: "Server-Side Architectures.",
    d: "Reducing the Amount of Data.",
     },
  correctAnswer: "d"                ///// Write the correct option inside double quotes
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
