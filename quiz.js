$(document).ready(function() {
	// creating "questions" object for the quiz
	var Q1 = {
		question: "How many miles are in a 10k?",
		answer: 6.2,
		choices: [ 6.2, 8.1, 13.4 ]
	};

	var Q2 = {
		question: "Who won the Gold Medal for the 400m dast at the 2016 Olympics?",
		answer: "Shaunae Miller",
		choices: [ "Allyson Felix", "Cathy Freeman", "Shaunae Miller" ]
	};

	var Q3 = {
		question: "How long is a standard Indoor Track Facility?",
		answer: "200m",
		choices: [ "300m", "200m", "500m"]
	};

	var Q4 = {
		question: "What is not a good after-run snack?",
		answer: "raw veggies",
		choices: [ "bananas", "chocolate milk", "raw veggies" ]
	};

	// combining "questions" objects for the question array for the quiz
	var questions = [ Q1, Q2, Q3, Q4 ];

	function createQuestions(){
		// appending questions and answer choices onto the DOM
		for (var i=0; i< questions.length; i++){
			var quest="";
			questions[i].choices.forEach(function(answer, f){
				quest += "<br><input type='radio' class='answerOptions' name='answer" + i + "' id='" + questions[i].choices[f] + "' value='" + questions[i].choices[f] + "'> " + questions[i].choices[f];
			});

			var q = "<div class='laneNumber'>" + (i + 1) + "</div>" + questions[i].question + "<br>" 
			q += quest + "<hr>";

			$("#questions").append(q);
		};
	}

	//function questionTransitionalDropdown(){
		//document.getElementById("questions").style.opacity = 1;
		//document.getElementById("questions").style.position = initial;
	//}

	// this function is ran once the quiz has been submitted
	// this function calculates the number a person got correct, incorrect and did not answer
	function scoreQuiz(){
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;

		for (var i=0; i< questions.length; i++){
			var blank = 0;

			questions[i].choices.forEach(function(answer, f){
				var radio = document.getElementById(questions[i].choices[f]);
				var choices = radio.value;

				if (radio.checked && choices == questions[i].answer){
					correct++;
				} else if (radio.checked && choices != questions[i].answer){
					incorrect++;
				} 
				
				if (!radio.checked) {
					blank++;
					
					if (blank === 3){
						unanswered++;
					}
				}
			});
		}

		$("#correct").html(correct);
		$("#incorrect").html(incorrect);
		$("#unanswered").html(unanswered);
	};

	function removeInputSelection(){
		var matches = document.querySelectorAll("input");
		for (var i=0; i< matches.length; i++){
			if (matches[i].type == "radio" && matches[i].checked){
				matches[i].checked = false 
			}
		}
	}

	// setting timer 
	var number = 11;
	var interval;

	function run(){
		interval = setInterval(decrement, 1000);
	};

	function decrement(){
		number--;
		$("#display").html("<h1 id='time'> 00 : " + number + "</h1>");
			if (number < 10){
				$("#display").html("<h1 id='time'> 00 : 0" + number + "</h1>");
			}
			
			if (number === 0){
				stop();
				$("#quizResultsDisplay").show();
				$("#questionsDisplay").hide();
				scoreQuiz();
			}
	};

	// stopping the timer
	function stop() {
      clearInterval(interval);
    };

	// start, submission and restart buttons for the runner's quiz
	
	$("#start").click(function(){
		createQuestions();
		number = 11;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$("#titlePageDisplay").hide();
		$("#questionsDisplay").show();
		$("#results").show();
		run();
	});

	// setting a function to the submit button on the DOM
	$("#submission").click(function(){
		$("#questionsDisplay").hide();
		$("#quizResultsDisplay").show();
		stop();
		scoreQuiz();
	});

	// this is the restart click function button 
	$("#restart").click(function(){
		$("#quizResultsDisplay").hide();
		$("#display").empty();
		removeInputSelection();
		number = 11;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$("#questionsDisplay").show();
		run();
	});

});


		
	




		
