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
             question: "1.Which of the following is true about Manhattan distance?", ///// Write the question inside double quotes
             answers: {
                 a: "It can be used for continuous variables", ///// Write the option 1 inside double quotes
                 b: "It can be used for categorical variables",
                 c: "It can be used for categorical as well as continuous",
                 d: "None of these", ///// Write the option 2 inside double quotes
             },
             correctAnswer: "a" ///// Write the correct option inside double quotes
         },

         {
             question: "2. Which of the following option is true about k-NN algorithm?", ///// Write the question inside double quotes
             answers: {
                 a: "It can be used for classification", ///// Write the option 1 inside double quotes
                 b: "It can be used for regression", ///// Write the option 2 inside double quotes
                 c: "It can be used in both classification and regression",
                 d: "None of these",
             },
             correctAnswer: "c" ///// Write the correct option inside double quotes
         },
         {
             question: "3. Which of the following distance metric can not be used in k-NN?", ///// Write the question inside double quotes
             answers: {
                 a: "Manhattan", ///// Write the option 1 inside double quotes
                 b: "Minkowski", ///// Write the option 2 inside double quotes
                 c: "Tanimoto",
                 d: "Jaccard ",
                 e: "All of the above used",
             },
             correctAnswer: "e" ///// Write the correct option inside double quotes
         },

         {
             question: "4. Which of the following will be Euclidean Distance between the two data point A(1,3) and B(2,3)?", ///// Write the question inside double quotes
             answers: {
                 a: "1", ///// Write the option 1 inside double quotes
                 b: "2", ///// Write the option 2 inside double quotes
                 c: "4",
                 d: "8",

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