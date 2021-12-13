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
                 `<div class="question"><strong> ${currentQuestion.question}</strong> </div>
       <div class="answers"> ${answers.join("")} </div><br>`
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
            question: "1. What techniques can be used to improve the efficiency of apriori algorithm?", ///// Write the question inside double quotes
            answers: {
            a: "Hash-based techniques",
            b: "Transaction Increases ",
            c: "Sampling",
            d: "Cleaning",///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The number of iterations in apriori ___________",  ///// Write the question inside double quotes
      answers: {
        a: "increases with the size of the data",
        b: "decreases with the increase in size of the data",
        c: "increases with the size of the maximum frequent set",
        d: "decreases with increase in size of the maximum frequent set",  
     },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
        question: "3. Significant Bottleneck in the Apriori algorithm is",
        answers:{
            a: "Finding frequent itemsets",
            b: "Pruning",
            c: "Candidate generation",
            d: "Number of iterations",
        },
        correctAnswer: "c"
    },

    {
        question: "4. The apriori property means",
        answers:{
            a: "If a set cannot pass a test, its supersets will also fail the same test",
            b: "To decrease the efficiency, do level-wise generation of frequent item sets",
            c: "To improve the efficiency, do level-wise generation of frequent item sets",
            d: "If a set can pass a test, its supersets will fail the same test",
        },
        correctAnswer: "a"
    },

    {
        question: "5. What is the principle on which Apriori algorithm work?",
        answers:{
            a: "If a rule is infrequent, its specialized rules are also infrequent",
            b: "If a rule is infrequent, its generalized rules are also infrequent",
            c: "Both a and b",
            d: "None of the above",
        },
        correctAnswer: "a"
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
