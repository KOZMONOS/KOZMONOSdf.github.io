var buton = 1;
function butonart() {
	if (buton <=4) {
		buton++;
	}
	if (buton == 1) {
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	if (buton == 2) {
		document.getElementById("resim").style.background = "url('e2.png') center/cover no-repeat";
	}
	if (buton == 3) {
		document.getElementById("resim").style.background = "url('e3.png') center/cover no-repeat";
	}
	if (buton == 4) {
		document.getElementById("resim").style.background = "url('e4.png') center/cover no-repeat";
	}
	if (buton == 5) {
		document.getElementById("resim").style.background = "url('e5.png') center/cover no-repeat";
	}
	
}
function butoneksi() {
	if (buton>=2) {
		buton--;
	}
	if (buton == 1) {
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	if (buton == 2) {
		document.getElementById("resim").style.background = "url('e2.png') center/cover no-repeat";
	}
	if (buton == 3) {
		document.getElementById("resim").style.background = "url('e3.png') center/cover no-repeat";
	}
	if (buton == 4) {
		document.getElementById("resim").style.background = "url('e4.png') center/cover no-repeat";
	}
	if (buton == 5) {
		document.getElementById("resim").style.background = "url('e5.png') center/cover no-repeat";
	}
	
}
function bir() {
	document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
}
function iki() {
	document.getElementById("resim").style.background = "url('e2.png') center/cover no-repeat";
}
function uc() {
	document.getElementById("resim").style.background = "url('e3.png') center/cover no-repeat";
}
function dort() {
	document.getElementById("resim").style.background = "url('e4.png') center/cover no-repeat";
}
function bes() {
	document.getElementById("resim").style.background = "url('e5.png') center/cover no-repeat";
}
var a;
var b;
function ddssa(){
	a = window.innerWidth;
	b = window.innerHeight;
	document.getElementById("yaz").innerHTML = a +" "+ b;
}
document.getElementById("resim").style.maxHeight = window.innerHeight;