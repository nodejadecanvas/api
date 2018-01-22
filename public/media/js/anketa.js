var form;
function initiate(){
	var button = document.getElementById('send');
	button.addEventListener('click',sendin);
	form = document.getElementById('form_all');
	var fio = document.getElementById('exampleInputSNP');
	form.addEventListener('invalid', validation);
	fio.addEventListener('input',vali);
}
function validation(e) {
	var elem = e.target;
	console.log("invalid");   
	elem.style.background = "#ffdddd";
}
function sendin() {
	var valid = form.checkValidity(); 
	if (valid){
   console.log("OK");
	}
   else {
	console.log(" not OK");   
   }
}
function validation(input){
	
	if (input.value.length < 5) {
		console.log('invalid');
		input.setCustomValidity("Add name or surname");
		input.style.background = '#FFDDDD';
	}
	else {
		console.log('valid');
		input.setCustomValidity("");
		input.style.background = '#FFFFFF';
	}
}
function validation_adress(input){
	  if(input.value.length < 5){
   input.setCustomValidity("Вы ввели менее 5 символов");
  } else {
   // если длина комментария отвечает требованию, очищаем предыдущее сообщение об ошибке
   input.setCustomValidity("");
  }
}

function vali(e){
	elem = e.target;
	var valid = elem.checkValidity();
	console.log(valid);
	  if(!valid){
   console.log("not valid");
   elem.setCustomValidity("Введите ФИО");
  } else {
   console.log("valid");
   // если длина комментария отвечает требованию, очищаем предыдущее сообщение об ошибке
   elem.setCustomValidity("");
  }
}



addEventListener("load", initiate);