let result = document.getElementById('result');
let opra;
let firstNum = 0;

const one = document.getElementById("one");
one.addEventListener("click", () => {
	result.innerHTML+=1;
})
const two = document.getElementById("two");
two.addEventListener("click", () => {
	result.innerHTML+=2;
})
const three = document.getElementById("three");
three.addEventListener("click", () => {
	result.innerHTML+=3;
})
const four = document.getElementById("four");
four.addEventListener("click", () => {
	result.innerHTML+=4;
})
const five = document.getElementById("five");
five.addEventListener("click", () => {
	result.innerHTML+=5;
})
const six = document.getElementById("six");
six.addEventListener("click", () => {
	result.innerHTML+=6;
})
const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
	result.innerHTML+=7;
})
const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
	result.innerHTML+=8;
})
const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
	result.innerHTML+=9;
})
const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
	result.innerHTML+=0;
})
const equ = document.getElementById("equ");
equ.addEventListener("click", () => {
	if (opra == "+") {
		result.innerHTML= Number(firstNum) + Number(result.innerHTML);
	} else if (opra == "-") {
		result.innerHTML= Number(result.innerHTML) - Number(firstNum);
	}else if (opra == "*") {
		result.innerHTML= Number(firstNum) * Number(result.innerHTML);
	}else if (opra == "/") {
		result.innerHTML= Number(firstNum) / Number(result.innerHTML);
	}
})
const oparationP = document.getElementById("oparationP");
oparationP.addEventListener("click", () => {
	opra = "+";
	firstNum = Number(firstNum) + Number(result.innerHTML);
	result.innerHTML= "";
})
const oparationS = document.getElementById("oparationS");
oparationS.addEventListener("click", () => {
	opra = "-";
	firstNum = Number(firstNum) - Number(result.innerHTML);
	result.innerHTML="";
})
const oparationM = document.getElementById("oparationM");
oparationM.addEventListener("click", () => {
	opra = "*";
	firstNum = Number(firstNum) * Number(result.innerHTML);
	result.innerHTML="";
})
const oparationD = document.getElementById("oparationD");
oparationD.addEventListener("click", () => {
	opra = "/";
	firstNum = Number(firstNum) / Number(result.innerHTML);
	result.innerHTML="";
})