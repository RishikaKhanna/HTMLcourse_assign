function validateName(){
	var name=document.getElementById("name").value;
	var reg=/^[a-zA-z]{2,30}$/;
	if (reg.test(name)){
		document.getElementById("nameprompt").style.color="green";
		document.getElementById("nameprompt").innerHTML="<strong>valid</strong>";
	}
	else{
		document.getElementById("nameprompt").style.color="red";
		document.getElementById("nameprompt").innerHTML="<strong>Enter 2-30 characters</strong>";
	}
}

function displayOrder(){
	var username=document.getElementById("name").value;
	var age=document.getElementById("age").value;
	
	
	document.getElementById("order").innerHTML="<h2>Order Summary</h2><p>"+username+"</p><p>"+age+"</p>";
	



}
