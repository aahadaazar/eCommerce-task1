function total(){
	var a=parseInt(document.getElementById("result").innerHTML);
	var b=parseInt(document.getElementById("resultx").innerHTML);
	var c=parseInt(document.getElementById("resultw").innerHTML);
	document.getElementById("bill").innerHTML=a+b+c;
}
function clear(){
	document.getElementById("bill").innerHTML=null;
}
function multiply(a,c,b){
	var d=parseInt(document.getElementById(b).value);
	document.getElementById(c).innerHTML=a*d;
}
function disable(b,l){
	document.getElementById(b).value=0;
	document.getElementById(b).disabled="disabled";
	document.getElementById(l).innerHTML=0;
}