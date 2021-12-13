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
            question: "1. which of the following is not involve in data mining ?", ///// Write the question inside double quotes
            answers: {
                a: "Knowledge extraction",
                b: "Data exploration",
                c: "Data transformation",
                d: "Data archaeology",///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. _____ works to remove the noise from the data that includes techniques like binning, clustering, and regression.",  ///// Write the question inside double quotes
      answers: {
        a: "Data Normalization",
        b: "Data Smoothing",
        c: "Data Discretization",
        d: "Data Aggregation",     },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
      question: "3. In Binning, we first sort data and partition into (equal-frequency) bins and then which of the following is not a valid step ?",  ///// Write the question inside double quotes
      answers: {
        a: "Smooth by bin boundaries",
        b: "Smooth by bin median",
        c: "Smooth by bin means ",
        d: "Smooth by bin values",	},
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "4. Invalid data is known as _________.",  ///// Write the question inside double quotes
      answers: {
        a: "Missing data",
        b: "Outlier",
        c: "Noisy data ",
        d: "Changing data",	},
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    
    {
      question: "5. Which of the following is not a Data discretization Method ?",  ///// Write the question inside double quotes
      answers: {
        a: "Histogram analysis",
        b: "Cluster Analysis ",
        c: "Data compression ",
        d: "Binning",	},
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
