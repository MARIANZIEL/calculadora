window.onload=manejarClics;

var cifra1="";





function manejarClics() {
	
	var n1=document.getElementById("n1");
	n1.addEventListener("click",function() {
								clicEn("1");
								});

	var n2=document.getElementById("n2");
	n2.addEventListener("click",function() {
								clicEn("2");
								});

	var n3=document.getElementById("n3");
	n3.addEventListener("click",function() {
								clicEn("3");
								});
	var n4=document.getElementById("n4");
	n4.addEventListener("click",function() {
								clicEn("4");
								});
	var n5=document.getElementById("n5");
	n5.addEventListener("click",function() {
								clicEn("5");
								});
	var n6=document.getElementById("n6");
	n6.addEventListener("click",function() {
								clicEn("6");
								});

	var n7=document.getElementById("n7");
	n7.addEventListener("click",function() {
								clicEn("7");
								});

	var n8=document.getElementById("n8");
	n8.addEventListener("click",function() {
								clicEn("8");
								});
	var n9=document.getElementById("n9");
	n9.addEventListener("click",function() {
								clicEn("9");
								});
	var n0=document.getElementById("n0");
	n0.addEventListener("click",function() {
								clicEn("0");
								});
    var mas =document.getElementById("mas");
	mas.addEventListener("click",function() {
								clicEn("+");
								});

	var menos=document.getElementById("menos");
	menos.addEventListener("click",function() {
								clicEn("-");
								});
	var por=document.getElementById("por");
	por.addEventListener("click",function() {
								clicEn("*");
								});
	var divi=document.getElementById("divi");
	divi.addEventListener("click",function() {
								clicEn("/");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);

	var elimina=document.getElementById("elimina");
	elimina.addEventListener("click",eliminar);

	var borrar1=document.getElementById("borrar1");
	borrar1.addEventListener("click",borrar);


}




function clicEn(num){
	cifra1+=num;
	var pan=document.getElementById("pantalla");
	pan.textContent=cifra1;
}

function calcular()	{
	var rta=eval(cifra1);
	var pan=document.getElementById("pantalla");
	pan.textContent=rta;
}

function eliminar(){
	var total= eval(cifra1="")
	var pan=document.getElementById("pantalla");
	pan.textContent=total;
}

function borrar(){
	var bor=document.getElementById("pantalla");
	var eli= cifra1.slice(0,-1);
	cifra1=eli;
	bor.textContent=cifra1;

}
