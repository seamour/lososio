//alert("Ok");
//load=event. go google events!!! initiate=anyNameForYourFunctions
//getElementsByTagName("")
//getElementsByCalss("")
//querySelector
//querySelectorAll("input[name=111]")
//variables; var smth= local; smth= global;
//&& = and; || = or
addEventListener("load", initiate); 
function initiate (){
	name1=document.getElementById("name");
	name2=document.getElementById("surname");
	name1.addEventListener("input", validation);
	name2.addEventListener("input", validation);
	validation();
}
function validation(){
	//console.log(name1.value + name2.value);
	if (name1.value=="" && name2.value==""){
		name1.setCustomValidity("Fill out at least 1 field, stupid.");
		name1.style.background="orange";
		name2.style.background="orange";
		console.log("bad");
	} else {
		name1.setCustomValidity("");
		name1.style.background="white";
		name2.style.background="white";
		console.log("ok");
	}
}

