score = 0;
cross = true;
document.onkeydown = function (e) {
	console.log("key code is: ", e.keyCode)
	if(e.keyCode == 38){
		astronaut = document.querySelector('.astronaut');
		astronaut.classList.add('animateAstronaut');
		setTimeout(() => {
			astronaut.classList.remove('animateAstronaut');
		}, 700);
	}
	if (e.keyCode == 39) {
		astronaut = document.querySelector('.astronaut');
		astronautX = parseInt(window.getComputedStyle(astronaut, null).getPropertyValue('left'));
		astronaut.style.left = astronautX + 112 + "px";
	}
	if (e.keyCode == 37) {
		astronaut = document.querySelector('.astronaut');
		astronautX = parseInt(window.getComputedStyle(astronaut, null).getPropertyValue('left'));
		astronaut.style.left = (astronautX - 112) + "px";
	}
}

setInterval(() => {
	astronaut = document.querySelector('.astronaut');
	gameOver = document.querySelector('.gameOver');
	alien = document.querySelector('.alien');

	asX = parseInt(window.getComputedStyle(astronaut, null).getPropertyValue('left'));
	asY = parseInt(window.getComputedStyle(astronaut, null).getPropertyValue('top'));

	alX = parseInt(window.getComputedStyle(alien, null).getPropertyValue('left'));
	alY = parseInt(window.getComputedStyle(alien, null).getPropertyValue('top'));

	offsetX = Math.abs(asX - alX);
	offsetY = Math.abs(asY - alY);
	//console.log(offsetX, offsetY);

	if (offsetX < 93 && offsetY < 52) {
		gameOver.style.visibility = 'visible';
		alien.classList.remove('alienAni');
	}
	else if(offsetX<145 && cross){	//find out score
		score += 10;
		updateScore(score);
		cross = false;
		setTimeout(() => {
			cross = true;
		}, 1000);
		//increase Time
		setTimeout(() => {
			aniDur = parseFloat(window.getComputedStyle(alien, null).getPropertyValue('animation-duration'));
			newDur = aniDur - 0.1;
			alien.style.animationDuration = newDur + 's';
		},500);	
	}
},10);

function updateScore(score) {
	scoreCount.innerHTML = "Your Score: " + score;
}