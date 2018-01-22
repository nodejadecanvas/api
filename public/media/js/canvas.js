function initiation() {
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	//canvas.translate(50,50);
	canvas.strokeStyle = 'red';
	canvas.fillStyle = 'pink';
	canvas.save();
	canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120, 120, 80, 80);
	var grad = canvas.createLinearGradient(310,110,410,210);
    grad.addColorStop(0.5, '#00AAFF');
    grad.addColorStop(1, '#000000');
    canvas.fillStyle = grad;
    canvas.fillRect(310,110,100,100);
	    canvas.fillStyle = 'black'
    // здесь описывается путь.
	canvas.moveTo(450, 100);
	canvas.lineTo(550, 300);
	canvas.lineTo(350, 300);
	//canvas.lineTo(720, 210);
    canvas.clip();
	for(var f = 0; f < 300; f = f + 10){
    canvas.moveTo(0, f);
    canvas.lineTo(800, f);
  }

	canvas.stroke();
    //canvas.fill();
	canvas.restore();
	canvas.beginPath();
	    canvas.arc(100, 100, 50, 0, Math.PI * 2, false);
	canvas.fill();
	
	canvas.beginPath();
    canvas.moveTo(600, 50);
    canvas.quadraticCurveTo(700, 125, 500, 100);
	canvas.stroke();

    canvas.font = "bold 24px verdana, sans-serif";
    canvas.textAlign = "start";
	var text = "Hello Word!";
	var size = canvas.measureText(text);
    canvas.fillText(text, 200, 50);
	canvas.strokeRect(200, 26, size.width, 24);
	canvas.restore();
  canvas.fillStyle = 'green';
  canvas.font = "bold 20px verdana, sans-serif";
  canvas.fillText("TEST", 50, 20);
 
  canvas.translate(50, 70);
  canvas.rotate(Math.PI / 180 * 45);
  canvas.fillText("TEST", 0, 0);
 
  canvas.rotate(-Math.PI / 180 * 45);
  canvas.translate(0, 100);
  canvas.scale(2, 2);
  canvas.fillText("TEST", 0, 0);

	
}
addEventListener('load', initiation);
