// $( document ).ready(function() {
	
	
	$("#button").click(function() {
		var question1 = document.qs1.q1.value;
		var question2 = document.qs1.q2.value;
		var question3 = document.qs1.q3.value;
		var question4 = document.qs1.q4.value;
		
		var correct = 0;
		var incorrect = 0;

			if (question1 == "6.2") {
				correct++;
			} 

			if (question2 == "Shaunae Miller") {
				correct++;
			} 

			if (question3 == "200m") {
				correct++;
			}

			if (question == "raw veggies") {
				correct++
			}
		
		document.getElementById("sub").style.visibility = "visible";
		document.getElementById("correct").innerHTML = "Correct: " + correct;
		// document.getElementById("incorrect")innerHTML = "Incorrect: " + incorrect;
	});


		  	function countdown() {
		  		
				var time = setInterval(decrement, 1000);
		  		
		  		function decrement() {
		  			var timer = 20;

					if(timer === 0) {
			  			clearTimeout(timer);
			  			submit();
			  		}

			  		if(timer > 0) {
			  			timer--;
			  		}

			  		$("#display").text("00 : " + 20);
			}

// });


		
