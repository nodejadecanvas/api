var ship = '/media/img/ship.png', moveX = -150, moveY = 450, width = 150, height = 156;
var bird = '/media/img/bird.png';
var canvas;

function initiation1() {
	var elem = document.getElementById('canvas2');
	canvas = elem.getContext('2d');
	animation();

}
function animation() {
		
	addEventListener('mousemove', birdmove);
	shipmove();
    smile();
}
/*function shipmove() {
	img = document.createElement('img');
	img.setAttribute('src', ship);	

	img.addEventListener("load", function(){
		canvas.clearRect(0, 0, 800, 688);	
		moveX += 2;
		canvas.drawImage(img, moveX, moveY);
    	//console.log(img);
		if (moveX >800) {
			moveX = -150;
		}
		
	});

	requestAnimationFrame(shipmove);

}*/
/*function shipmove() {
	var img = document.createElement('img');
	img.setAttribute('src', ship);	
	//img.setAttribute('width', width);	
	img.addEventListener("load", function(){
		canvas.clearRect(0, 0, 800, 688);	
		moveX += 2;
		moveY -=0.3;
		width -= 0.1;   
		height -= 0.1;

	console.log(width);
		canvas.drawImage(img, moveX, moveY, width, height);
    	//console.log(img);
		if (moveX >800) {
			moveX = -150;
			moveY = 450;
			width = 150;
			height = 156;
		}
		
	});

	requestAnimationFrame(shipmove);
}*/
function shipmove() {
	var img = document.createElement('img');
	//var w = img.width, h = img.height;
	img.setAttribute('src', ship);	
	//img.setAttribute('width', width);	
	img.addEventListener("load", function(){	
		moveX += 2;
		moveY -=0.3;
		width -= 0.1;   
		height -= 0.1;
canvas.clearRect(moveX-5, moveY, width+10, height+10);	
	console.log(width);
		canvas.drawImage(img, moveX, moveY, width, height);
    	//console.log(img);
		if (moveX >800) {
			moveX = -150;
			moveY = 450;
			width = 150;
			height = 156;
		}
		
	});
smile();
	requestAnimationFrame(shipmove);
}
function birdmove(e) {
	var img = document.createElement('img');
	img.setAttribute('src', bird);	
	var w = img.width, h = img.height;
	img.addEventListener("load", function(){	
		var xmouse = e.clientX;
        var ymouse = e.clientY;
		//canvas.clearRect(xmouse-10, ymouse, w+10, h+10);	
		canvas.clearRect(0, 0, 800, 688);	
		canvas.drawImage(img, xmouse, ymouse);
	});

}
function smile() {
		canvas.beginPath();
	canvas.fillStyle = "#faee08";
	canvas.arc(60, 360, 40, 0, Math.PI*2, false);
    canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#dad00f";
	canvas.arc(50, 345, 15, 0, Math.PI*2, false);
	canvas.arc(70, 345, 15, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#fff";
	canvas.arc(50, 345, 10, 0, Math.PI*2, false);
	canvas.arc(70, 345, 10, 0, Math.PI*2, false);
	canvas.fill();

	canvas.beginPath();
	canvas.fillStyle = "#000";
	canvas.arc(50, 345, 4, 0, Math.PI*2, false);
	canvas.arc(70, 345, 4, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.lineWidth = 4;
	canvas.lineCap = "round";
	canvas.strokeStyle = "#000";
	canvas.arc(60, 360, 20, Math.PI/180*35, Math.PI/180*145, false);
	canvas.stroke();
    canvas.closePath();
}


addEventListener('load', initiation1);
