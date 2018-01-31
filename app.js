function total(){
	var a=parseInt(document.getElementById("result").innerHTML);
	var b=parseInt(document.getElementById("resultx").innerHTML);
	var c=parseInt(document.getElementById("resultw").innerHTML);
	document.getElementById("bill").innerHTML=a+b+c;
}
function clear(){
	document.getElementById("bill").innerHTML=null;
}
function multiply(a,c){
	var b=parseInt(document.getElementById("q1").value);
	document.getElementById(c).innerHTML=a*b;
}