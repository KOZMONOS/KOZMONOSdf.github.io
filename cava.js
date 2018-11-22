var buton = 1;
function butonart() {
	
		buton++;
	
	if (buton <= 0) {
		buton = 5;
		document.getElementById("resim").style.background = "url('e5.jpg') center/cover no-repeat";
	}
	if (buton == 1) {
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	if (buton == 2) {
		document.getElementById("resim").style.background = "url('e2.jpg') center/cover no-repeat";
	}
	if (buton == 3) {
		document.getElementById("resim").style.background = "url('e3.jpg') center/cover no-repeat";
	}
	if (buton == 4) {
		document.getElementById("resim").style.background = "url('e4.jpg') center/cover no-repeat";
	}
	if (buton == 5) {
		document.getElementById("resim").style.background = "url('e5.jpg') center/cover no-repeat";
	}
	if (buton >= 6) {
		buton = 1;
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	
}
function butoneksi() {
	
		buton--;
	if (buton <= 0) {
		buton = 5;
		document.getElementById("resim").style.background = "url('e5.jpg') center/cover no-repeat";
	}
	if (buton == 1) {
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	if (buton == 2) {
		document.getElementById("resim").style.background = "url('e2.jpg') center/cover no-repeat";
	}
	if (buton == 3) {
		document.getElementById("resim").style.background = "url('e3.jpg') center/cover no-repeat";
	}
	if (buton == 4) {
		document.getElementById("resim").style.background = "url('e4.jpg') center/cover no-repeat";
	}
	if (buton == 5) {
		document.getElementById("resim").style.background = "url('e5.jpg') center/cover no-repeat";
	}
	if (buton >= 6) {
		buton = 1;
		document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
	}
	
}
function bir() {
	document.getElementById("resim").style.background = "url('o1.jpg') center/cover no-repeat";
}
function iki() {
	document.getElementById("resim").style.background = "url('e2.jpg') center/cover no-repeat";
}
function uc() {
	document.getElementById("resim").style.background = "url('e3.jpg') center/cover no-repeat";
}
function dort() {
	document.getElementById("resim").style.background = "url('e4.jpg') center/cover no-repeat";
}
function bes() {
	document.getElementById("resim").style.background = "url('e5.jpg') center/cover no-repeat";
}
var a;
var b;

var sayfayer=1;
function ddssa(){
	a = window.innerWidth;
	b = window.innerHeight;
	document.getElementById("yaz").innerHTML = a +" "+ b;
}
document.getElementById("resim").style.maxHeight = window.innerHeight;
window.addEventListener('wheel', function (e) {
	if (e.deltaY < 0) {
		if (sayfayer>1) {
			sayfayer--;
		}
	
		document.getElementById('status').innerHTML = sayfayer;
	}
	if (e.deltaY > 0) {
		if (sayfayer<3) {
			sayfayer++;
			
		}
		
		document.getElementById('status').innerHTML = sayfayer;
	}
});
if (sayfayer==2) {
	document.getElementById("asdff").getAttribute("#oyun");
}
window.addEventListener("scroll", function (event) {
	var scroll = this.scrollY;
	var as;
	
	document.getElementById('status').innerHTML = as2;});
if (sayfayer==1) {

}
var acýk=false;
function barkapat() {

	if (acýk==true) {
		document.getElementById("u").style.visibility = 'hidden';
		document.getElementById("siyah").style.marginTop = "-260px";
		document.getElementById("siyah").style.marginLeft = "-50px";
		document.getElementById("siyah").style.width = "110%";
		document.getElementById("siyah").style.transform = "rotate(-5deg)";
		document.getElementById("beyaz").style.transform = "rotate(-5deg)";
		document.getElementById("x").style.visibility = "hidden";
		acýk = false;
	}
	
}
function barac() {
	if (acýk == false) {
	document.getElementById("u").style.visibility = 'hidden';
		document.getElementById("siyah").style.marginTop = "0px";
		document.getElementById("siyah").style.marginLeft = "0px";
		document.getElementById("siyah").style.width = "100%";
		document.getElementById("u").style.visibility = 'visible';
		document.getElementById("siyah").style.transform = "rotate(0deg)";
		document.getElementById("beyaz").style.transform = "rotate(0deg)";
		document.getElementById("x").style.visibility = "visible";
		
		acýk = true;
	}
}
var oyunlarfazlaacýk=false;
function oyunlardahafazlasi() {
	if (oyunlarfazlaacýk==false) {
		document.getElementById("oyunlarbolum").style.transform = "skewY(0deg)";
		document.getElementById("oyun2").style.display = "block";
		document.getElementById("dahafazla").innerHTML = "Daha Azý...";
		oyunlarfazlaacýk = true;
	}
	else {
		document.getElementById("oyunlarbolum").style.transform = "skewY(-5deg)";
		document.getElementById("oyun2").style.display = "none";
		document.getElementById("dahafazla").innerHTML = "DahaFazlasý...";
		oyunlarfazlaacýk = false;
	}

}
var tasarýmlarfazlaacýk = false;
function tasarýmlardahafazlasi() {
	if (tasarýmlarfazlaacýk == false) {
	
		document.getElementById("tasarýmlar2").style.display = "";
		document.getElementById("dahafazlatasarým").innerHTML = "Daha Azý...";
		tasarýmlarfazlaacýk = true;
	}
	else {
		
		document.getElementById("tasarýmlar2").style.display = "none";
		document.getElementById("dahafazlatasarým").innerHTML = "Daha Fazlasý...";
		tasarýmlarfazlaacýk = false;
	}

}