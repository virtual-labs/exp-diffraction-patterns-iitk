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
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
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
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
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
            question: "1. Reciprocal lattice vector (a*) is:", ///// Write the question inside double quotes
            answers: {
                a: "Parallel to real lattice", ///// Write the option 1 inside double quotes
                b: "Perpendicular to real lattice vector a", ///// Write the option 2 inside double quotes
                c: "Parallel to real lattice vector plane b-c", ///// Write the option 2 inside double quotes
                d: "Perpendicular to real lattice vector plane b-c", ///// Write the option 2 inside double quotes

            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
        {
            question: "2. Which equivalence hold true:", ///// Write the question inside double quotes
            answers: {
                a: "Lλ=Rd", ///// Write the option 1 inside double quotes
                b: "Ld=Rλ", ///// Write the option 2 inside double quotes
                c: "LR = dλ", ///// Write the option 2 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes

            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
        {
            question: "3. The camera length of the instrument is constant.<br>Note: Camera Length needs to be calculated using a standard (say gold sample) whose lattice parameter is known. ", ///// Write the question inside double quotes
            answers: {
                a: "True", ///// Write the option 1 inside double quotes
                b: "False",
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        {
            question: "4. What is the zone axis for the following diffraction pattern?<br><img src='images/post4.png'>", ///// Write the question inside double quotes
            answers: {
                a: "[001]", ///// Write the option 1 inside double quotes
                b: "[010]", ///// Write the option 2 inside double quotes
                c: "[100]", ///// Write the option 2 inside double quotes
                d: "[110]", ///// Write the option 2 inside double quotes

            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
        {
            question: "5. What is the zone axis for the following diffraction pattern?<br><img src='images/post5.png'>", ///// Write the question inside double quotes
            answers: {
                a: "[001]", ///// Write the option 1 inside double quotes
                b: "[010]", ///// Write the option 2 inside double quotes
                c: "[100]", ///// Write the option 2 inside double quotes
                d: "[110]",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        }, ///// To add more questions, copy the section below 
        {
            question: "6. What is the zone axis for the following diffraction pattern?<br><img src='images/post6.png'>", ///// Write the question inside double quotes
            answers: {
                a: "[111]", ///// Write the option 1 inside double quotes
                b: "[011]", ///// Write the option 2 inside double quotes
                c: "[001]", ///// Write the option 2 inside double quotes
                d: "[100]",
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        }, ///// this line


        /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
            till closing curly braces comma ( }, )

            and paste it below the curly braces comma ( below correct answer }, ) of above 
            question

        Copy below section

        {
          question: "This is question n?",
          answers: {
            a: "Option 1",
            b: "Option 2",
            c: "Option 3",
            d: "Option 4"
          },
          correctAnswer: "c"
        },

        Copy above section

        */




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