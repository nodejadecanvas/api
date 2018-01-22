function initiation1() {
	var elem = document.getElementById('canvas1');
	var canvas = elem.getContext('2d');
	canvas.translate(0.5, 0.5);
	for (var x = 0.5; x < 800; x +=20) {
		canvas.moveTo(x, 0);
		canvas.lineTo(x, 800);
	}
	for (var y = 0.5; y < 800; y +=20) {
		canvas.moveTo(0, y);
		canvas.lineTo(800, y);
	}
	canvas.strokeStyle = "#eee";
	canvas.stroke();
	canvas.fillStyle = "red";
	canvas.fillRect(100, 0, 200, 200);
	canvas.clearRect(150, 50, 100, 100);
	canvas.beginPath();
	canvas.moveTo(360, 0);
	canvas.lineTo(400, 0);
	canvas.lineTo(440, 40);
	canvas.lineTo(440, 80);
	canvas.lineTo(400, 120);
	canvas.lineTo(360, 120);
	canvas.lineTo(320, 80);
	canvas.lineTo(320, 40);
	canvas.lineTo(360, 0);
	canvas.strokeStyle = "#ed1b24";
	canvas.stroke();
	canvas.closePath();
	canvas.beginPath();
	canvas.arc(60, 260, 40, 0, Math.PI * 2, false);
    canvas.stroke();
	canvas.closePath();
	canvas.beginPath();
	canvas.arc(160, 260, 40, 0, Math.PI, false);
    canvas.stroke();
	canvas.closePath();
	canvas.beginPath();
	canvas.arc(260, 260, 40, -Math.PI/180*90, Math.PI/180*135, false);
	canvas.strokeStyle = "gray";
    canvas.stroke();
	canvas.closePath();
	
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
	
	canvas.translate(120.5, 0.5);
	
	canvas.beginPath();
	canvas.fillStyle = "#faee08";
	canvas.arc(60, 360, 40, 0, Math.PI*2, false);
    canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#eee41b";
	canvas.arc(50, 345, 15, 0, Math.PI*2, false);
	canvas.arc(70, 345, 15, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#fff";
	canvas.arc(50, 345, 10, 0, Math.PI*2, false);
	canvas.arc(70, 345, 10, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#114cb7";
	canvas.arc(50, 345, 4, 0, Math.PI*2, false);
	canvas.arc(70, 345, 4, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.lineWidth = 4;
	canvas.lineCap = "round";
	canvas.strokeStyle = "#000";
	canvas.arc(60, 390, 20, -Math.PI/180*35, -Math.PI/180*145, true);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineWidth = 3;
	canvas.lineCap = "round";
	canvas.strokeStyle = "brown";
	canvas.arc(87, 310, 25, Math.PI/180*100, Math.PI/180*145, false);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(33, 310, 25, Math.PI/180*35, Math.PI/180*80, false);
	canvas.stroke();
    canvas.closePath();
	
	canvas.translate(120.5, 0.5);
	
	canvas.beginPath();
	canvas.fillStyle = "#faee08";
	canvas.arc(60, 360, 40, 0, Math.PI*2, false);
    canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#000";
	canvas.arc(45, 345, 13, 0, Math.PI*2, false);
	canvas.arc(75, 345, 13, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#fff";
	canvas.arc(45, 345, 10, 0, Math.PI*2, false);
	canvas.arc(75, 345, 10, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.fillStyle = "#114cb7";
	canvas.arc(45, 345, 4, 0, Math.PI*2, false);
	canvas.arc(75, 345, 4, 0, Math.PI*2, false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.strokeStyle = "#000";
	canvas.moveTo(58, 345);
	canvas.lineTo(62, 345);
	canvas.moveTo(88, 345);
	canvas.lineTo(94, 345);
	canvas.moveTo(32, 345);
	canvas.lineTo(26, 345);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.fillStyle = "#fff";
	canvas.arc(60, 360, 26, Math.PI/180*20, Math.PI/180*160, false);
	canvas.quadraticCurveTo(60, 360, 82, 368);
	canvas.fill();
	
}
addEventListener('load', initiation1);
