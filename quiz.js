$(document).ready(function() {
	// setting questions' answers and choices
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

	// appending questions and answer choices onto the DOM
	var questions = [ Q1, Q2, Q3, Q4 ];

		for (var i=0; i< questions.length; i++){
			var quest="";
			questions[i].choices.forEach(function(answer, f){
				quest += "<br><input type='radio' class='answer'" + i + "name='answer" + i + "' id='" + questions[i].choices[f] + "' value='" + questions[i].choices[f] + "'> " + questions[i].choices[f];
			});

			var q = "<div class='laneNumber'>" + (i + 1) + "</div>" + questions[i].question + "<br>" 
			q += quest + "<hr>";

			$("#questions").append(q);
		};

	// this function is ran once the quiz has been submitted
	// this function calculates the number a person got correct, incorrect and did not answer
	function score(){
		var correct = 1;
		var incorrect = 1;

		for (var i=0; i< questions.length; i++){
			var naAnswers = document.getElementsByClassName("answer" + i);
			questions[i].choices.forEach(function(answer, f){
				// var naAnswers = document.getElementsByClassName("answer" + i);
				var radio = document.getElementById(questions[i].choices[f]);
				var choices = radio.value;

				if (radio.checked && choices == questions[i].answer){
					$("#correct").html(correct++);
				}

				if (radio.checked && choices != questions[i].answer){
					$("#incorrect").html(incorrect++);
				}; 
		
			});
		}
	};

	// setting a function to the submit button on the DOM
	$("#submission").click(function(){
		$("#quizResults").show();
		$("#questions").hide();
		$("#submission").hide();
		stop();
		score();
	});

	// setting timer 
	var number = 11;
	var interval;

	function run(){
		interval = setInterval(decrement, 1000);
	};

	function decrement(){
		number--;
		$("#display").html("<h1 id='time'><center> 00 : " + number + "</center></h1>");
			if (number < 10){
				$("#display").html("<h1 id='time'><center> 00 : 0" + number + "</center></h1>");
			}
			
			if (number === 0){
				stop();
				$("#quizResults").show();
				$("#questions").hide();
				$("#submission").hide();
				score();
			}
	};

	// stopping the timer
	function stop() {
      clearInterval(interval);
    };

	// calling the run function to start when the page loads
	run();

	// this is the restart click function button 
	$("#restart").click(function(){
		$("#display").empty();
		number = 11;
		correct = 0;
		incorrect = 0;
		$("#questions").show();
		$("#submission").show();
		$("#quizResults").hide();
		run();
	});

});


		
	




		
