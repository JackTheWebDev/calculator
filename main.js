var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }
function calc(){
	try{
		var feild = document.getElementById('input').value; 
		var output = eval(feild);
		document.getElementById('input').value = output;
	}catch(err){
		document.getElementById('input').value = err;
	}

}
function addToString(number){
	var string = document.getElementById("input").value;
	var final = string + number; 
	document.getElementById('input').value = final;
}
function clearBoard(){
	try{
		document.getElementById('input').value = "";
	}catch(err){
		document.getElementById('input').value = err;
	}
}
