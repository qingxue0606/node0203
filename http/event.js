function clickIt(e){
	window.alert('Button is click');
}
var button=document.getElementById('#button');
button.addEventListener('click', clickIt);