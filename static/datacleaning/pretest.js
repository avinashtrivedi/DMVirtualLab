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
        question: "1. Which of the following activities is NOT a data mining task?",
        answers:{
            a: "Predicting the future stock price of a company using historical records.",
            b: "Monitoring and predicting failures in a hydropower plant.",
            c: "Extracting the frequencies of a sound wave.",
            d: "Monitoring the heart rate of a patient for abnormalities."
         },
        correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. What is the median in the following set of data? 1, 2, 2, 3, 5, 6, 9",  ///// Write the question inside double quotes
            answers: {
              a: "3",
              b: "33",
              c: "2",
              d: "22",  
           },
           correctAnswer: "a"               ///// Write the correct option inside double quotes
    },

    {
        question: "3. Wild-code checking and consistency checking are techniques for :",
        answers:{
            a: " data entry",
            b: "data modification",
            c: "cleaning data",
            d: "coding data"
         },
        correctAnswer: "c"
    },

    {
        question: "4. In a distribution that is positively skewed , the :",
        answers:{
            a: "standard deviation is greater than the range.",
            b: "mean is greater than the median.",
            c: "median is greater than the mean.",
            d: "median and mean are equal."
         },
        correctAnswer: "b"
    },

    {
        question: "5. Which of the following is not a data pre-processing methods :",
        answers:{
            a: "Data Visualization.",
            b: "Data Discretization.",
            c: "Data Cleaning.",
            d: "Data Reduction."
         },
        correctAnswer: "b"
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
