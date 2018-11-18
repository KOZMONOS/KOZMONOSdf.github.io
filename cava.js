var buton = 1;
function butonart() {
	if (buton <=4) {
		buton++;
	}
	if (buton == 1) {
		document.getElementById("resim").src = "e1.png" ;
	}
	if (buton == 2) {
		document.getElementById("resim").src = "e2.png";
	}
	if (buton == 3) {
		document.getElementById("resim").src = "e3.png";
	}
	if (buton == 4) {
		document.getElementById("resim").src = "e4.png";
	}
	if (buton == 5) {
		document.getElementById("resim").src = "e5.png";
	}
	
}
function butoneksi() {
	if (buton>=2) {
		buton--;
	}
	if (buton == 1) {
		document.getElementById("resim").src = "e1.png";
	}
	if (buton == 2) {
		document.getElementById("resim").src = "e2.png";
	}
	if (buton == 3) {
		document.getElementById("resim").src = "e3.png";
	}
	if (buton == 4) {
		document.getElementById("resim").src = "e4.png";
	}
	if (buton == 5) {
		document.getElementById("resim").src = "e5.png";
	}
	
}
function bir() {
	document.getElementById("resim").src = "e1.png";
}
function iki() {
	document.getElementById("resim").src = "e2.png";
}
function uc() {
	document.getElementById("resim").src = "e3.png";
}
function dort() {
	document.getElementById("resim").src = "e4.png";
}
function bes() {
	document.getElementById("resim").src = "e5.png";
}
var a;
var b;
function ddssa(){
	a = window.innerWidth;
	b = window.innerHeight;
	document.getElementById("yaz").innerHTML = a +" "+ b;
}
document.getElementById("resim").style.maxHeight = window.innerHeight;