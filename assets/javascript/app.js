$(document).ready(function() {

    var triviaArr= [{
        question: "Name the North American city founded by the French in 1764.",
        firstAnswer: "Quebec City",
        secondAnswer: "Saint Louis", 
        thirdAnswer: "Montreal",
        fourthAnswer:"New Orleans", 
        correctAnswer:"Saint Louis",
        image: "assets/images/Saint_Louis.jpg",
        }, {
        question: "Spanish explorers sailed past the future location of this city for over 150 years,likely due to fog.",
        firstAnswer: "Monterey",
        secondAnswer: "Valparaiso", 
        thirdAnswer: "Los Angeles",
        fourthAnswer:"San Francisco", 
        correctAnswer:"San Francisco",
        image: "assets/images/San_Francisco.jpg",
        }, {
        question: "Name the city whose Theodosian Walls kept it safe from Ottoman forces until 1453.",
        firstAnswer: "Baghdad",
        secondAnswer: "Istanbul", 
        thirdAnswer: "Tripoli",
        fourthAnswer:"Damascus", 
        correctAnswer:"Istanbul",
        image: "assets/images/Istanbul.jpg",
        }, {       
        question: "Name the city that served as the imperial capital of Japan for over 1000 years.",
        firstAnswer: "Niigata",
        secondAnswer: "Tokyo", 
        thirdAnswer: "Kyoto",
        fourthAnswer:"Fukuoka", 
        correctAnswer:"Kyoto",
        image: "assets/images/Kyoto.jpg",
        }, {
        question: "This city was the capital of the Incan Empire.",
        firstAnswer: "Cusco",
        secondAnswer: "Chimbote", 
        thirdAnswer: "Lima",
        fourthAnswer:"Machu Picchu", 
        correctAnswer:"Cusco",
        image: "assets/images/Cusco.jpg",
        }, {      
        question: "Name the city in which East met West on November 9, 1989.",
        firstAnswer: "Munich",
        secondAnswer: "Prague", 
        thirdAnswer: "Berlin",
        fourthAnswer:"Budapest", 
        correctAnswer:"Berlin",
        image: "assets/images/Berlin.jpg",
        }, {
        question: "Name te city, whose famous red sandstone walls were built by Ali ibn Yusuf in 1122-1123.",
        firstAnswer: "Marrakesh",
        secondAnswer: "Khartoum", 
        thirdAnswer: "Yaounde",
        fourthAnswer:"Abuja", 
        correctAnswer:"Marrakesh",
        image: "assets/images/Marrakech.jpg",         
    }]

    // Checked and the array console.logs nicely without mistakes.
    // Global variables: 
    var rightAns;   // number of questions right.
    var wrongAns;   // number of questions wrong.
    var unAns;      //number of questions unanswered.
    var count;      //keeps track of position in triviaArr.
    var timeNumber; //sets number counter for the interval timer.
    var intervalId; //holds the interval ID when the run function executes
    var userGuess; // holds the user's choice for the current Q.


    //FUNCTIONS USED
    function initializeGame (){
        rightAns = 0;
        wrongAns = 0;
        unAns = 0;
    };

    function quizRun(){
        count = 0;

        //code below creates the clickable element to start the game.
        //Calls the first half of the looping functions: the displayQuestion.
        var startDiv =$("<div>");
        startDiv.addClass("start-div");
        startDiv.text("Click to Start");
        $("#display-box").append(startDiv);
        $(".start-div").on("click", displayQuestion);
        
    };
    //Function to display the question, the timer, and the clickable answers. 
    //Embeds the run function to start the timer. 
    //Both the the embedded run function and the clickable elements end in a stop function. 
    //The stop function also calls the next displayAnswers to complete a Q&A cycle.
    
    function displayQuestion(){

        $("#display-box").empty(); //clears out initial content


        //This creates the divs for the answers and populates them.
        var firstAnsDiv = $("<div>");
        firstAnsDiv.addClass("answer-divs");
        firstAnsDiv.attr("value", triviaArr[count].firstAnswer);
        firstAnsDiv.text(triviaArr[count].firstAnswer);
        $("#display-box").append(firstAnsDiv);

        var secondAnsDiv = $("<div>");
        secondAnsDiv.addClass("answer-divs");
        secondAnsDiv.attr("value", triviaArr[count].secondAnswer);
        secondAnsDiv.text(triviaArr[count].secondAnswer);
        $("#display-box").append(secondAnsDiv);

        var thirdAnsDiv = $("<div>");
        thirdAnsDiv.addClass("answer-divs");
        thirdAnsDiv.attr("value", triviaArr[count].thirdAnswer);
        thirdAnsDiv.text(triviaArr[count].thirdAnswer);
        $("#display-box").append(thirdAnsDiv);

        var fourthAnsDiv = $("<div>");
        fourthAnsDiv.addClass("answer-divs");
        fourthAnsDiv.attr("value", triviaArr[count].fourthAnswer);
        fourthAnsDiv.text(triviaArr[count].fourthAnswer);
        $("#display-box").append(fourthAnsDiv);

        $("#question-box").text(triviaArr[count].question);

        timeNumber = 20;

        $("#timer-box").text(timeNumber + " Seconds");

        $(".answer-divs").on("click", function () {
            userGuess= $(this).attr("value"); //captures the users answer.
            console.log(userGuess);
            stop();
        });

        run(); 
    };

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
    
    function decrement() {
        timeNumber--;
        $("#timer-box").html(timeNumber + " Seconds");
        if (timeNumber === 0) {
            stop();
        } 
    }

    function stop() {
        clearInterval(intervalId);
        displayAnswer();
    }

     //Function to let the user immediately know if they guessed right.
     //Right guesses, wrong guesses, and no guesses (time runs out) all end here. 
     //Calling the displayQuestion function at the end calls the next question. 
     //alternatively, the gameSummary is called if all questions have been asked. 
    function displayAnswer(){
        
        if (timeNumber === 0){
            $("#question-box").text("Time is up!"); 
            unAns++; 
        } else if (userGuess === triviaArr[count].correctAnswer){
            $("#question-box").text("Correct!"); 
            rightAns++;
        } else if( timeNumber > 0){$("#question-box").text("Nope!"); 
            wrongAns++;
        };

        $("#display-box").empty(); //removes the last set of answers from the screen. 
        
        //adds the div to display the answer and an image. 
        var correctAnsDiv = $("<div>");
        correctAnsDiv.addClass("answer-text");
        correctAnsDiv.text(" The correct answer is: " + triviaArr[count].correctAnswer + ".");
        $("#display-box").append(correctAnsDiv);
       

        var correctImage = $("<img src=" + triviaArr[count].image + " width='300px'>");
        correctImage.addClass("city-image");
        $("#display-box").append(correctImage);

        count ++;
        console.log(count);
        console.log ("Right: " + rightAns+ " Wrong: " + wrongAns + " Unanswered: " + unAns);

        if (count === triviaArr.length) {
            setTimeout(gameSummary, 3000);
        } else {
            setTimeout(displayQuestion, 3000);
        }
    }
    //gameSummary reports the total number of correct, incorrect, and unanswered questions.
    //Sets up the game to be replayed if the user desires. 
    function gameSummary() {
        $ ("#timer-box").text("Want to try again? Click below to retake the trivia quiz!"); 
        $ ("#question-box").text("Here is how you did!"); 
        $("#display-box").empty(); //removes the last set of answers from the screen. 

        var rightAnsDiv = $("<div>");
        rightAnsDiv.addClass("answer-text");
        rightAnsDiv.text("Correct Answers: " + rightAns);
        $("#display-box").append(rightAnsDiv);

        var wrongAnsDiv = $("<div>");
        wrongAnsDiv.addClass("answer-text");
        wrongAnsDiv.text("Incorrect Answers: " + wrongAns);
        $("#display-box").append(wrongAnsDiv);

        var unAnsDiv = $("<div>");
        unAnsDiv.addClass("answer-text");
        unAnsDiv.text("Unanswered: " + unAns);
        $("#display-box").append(unAnsDiv);

        initializeGame();

        quizRun();
    }

    initializeGame();
    quizRun();
});
