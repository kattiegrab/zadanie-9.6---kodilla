var list = document.getElementById('list'),
	x = list.getElementsByTagName('li'),
	add = document.getElementById('addElem');
	

add.addEventListener('click', function() {
	list.innerHTML += '<li>item' + x.length + '</li>'
});