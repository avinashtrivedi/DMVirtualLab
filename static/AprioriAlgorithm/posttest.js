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
            question: "1. In Apriori algorithm, if 1 item-sets are 100, then the number of candidate 2 item-sets are", ///// Write the question inside double quotes
            answers: {
                a: "100",
                b: "4950",
                c: "200",
                d: "5000",///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. If we know the support of itemset {a, b, c} is 10, which of the following numbers are the possible supports of the itemset {a, b}?",  ///// Write the question inside double quotes
      answers: {
        a: "7",
        b: "9",
        c: "11",
        d: "13",     },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


    {
      question: "3. If we know the support of itemset {a, b} is 10, which of the following numbers are the possible supports of itemset {a, b, c}?",  ///// Write the question inside double quotes
      answers: {
        a: "7",
        b: "9",
        c: "11",
        d: "13",    },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "4. Considering Apriori Algorithm, assume we have 5 items (A to E) in total. In the 1-st scan, we find out all frequent items A, B, C, and E. How many size-2 (i.e. containing 2 items, e.g. A, B) itemsets should be considered in 2-nd scan, i.e. are potential to be size-2 frequent itemsets?",  ///// Write the question inside double quotes
      answers: {
        a: "5",
        b: "6",
        c: "7",
        d: "8",     },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
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
