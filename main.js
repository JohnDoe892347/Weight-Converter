let btn1 = document.getElementById("kg");
let btn2 = document.getElementById("pound");
let input = document.getElementById("input");
let output = document.getElementById("output");

btn1.addEventListener('click',function(){
	
	let inputValue = document.getElementById("input").value;
	let kg = inputValue / 2.2;
	document.getElementById('output').value = kg;
	
})
btn2.addEventListener('click',function(){
	
	let inputValue = document.getElementById("input").value;
	let lbs = inputValue * 2.2;
	document.getElementById('output').value = lbs;
	
	
})