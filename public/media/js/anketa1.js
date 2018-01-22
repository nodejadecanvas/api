
function validation_email(input) {
	var valid = input.checkValidity(); 
	if (valid){
      input.setCustomValidity("");
	}
   else {
	  input.setCustomValidity("Адрес должени содержать символ @");
   }
}
