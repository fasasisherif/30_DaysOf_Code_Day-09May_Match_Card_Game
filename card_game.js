var card1 = document.getElementsByClassName("card1"), card2 = document.getElementsByClassName("card2"), card3 = document.getElementsByClassName("card3"), card4 = document.getElementsByClassName("card4"), card5 = document.getElementsByClassName("card5"), card6 = document.getElementsByClassName("card6"), card7 = document.getElementsByClassName("card7"), card8 = document.getElementsByClassName("card8"), card9 = document.getElementsByClassName("card9"), card10 = document.getElementsByClassName("card10"), card11 = document.getElementsByClassName("card11"), card12 = document.getElementsByClassName("card12"), card13 = document.getElementsByClassName("card13"), card14 = document.getElementsByClassName("card14"), card15 = document.getElementsByClassName("card15"), card16 = document.getElementsByClassName("card16");


var back1 = document.getElementsByClassName("back1"), back2 = document.getElementsByClassName("back2"), back3 = document.getElementsByClassName("back3"), back4 = document.getElementsByClassName("back4"), back5 = document.getElementsByClassName("back5"), back6 = document.getElementsByClassName("back6"), back7 = document.getElementsByClassName("back7"), back8 = document.getElementsByClassName("back8"), back9 = document.getElementsByClassName("back9"), back10 = document.getElementsByClassName("back10"), back11 = document.getElementsByClassName("back11"), back12 = document.getElementsByClassName("back12"), back13 = document.getElementsByClassName("back13"), back14 = document.getElementsByClassName("back14"), back15 = document.getElementsByClassName("back15"), back16 = document.getElementsByClassName("back16");


var inner1 = document.getElementsByClassName("inner_card1"), inner2 = document.getElementsByClassName("inner_card2"), inner3 = document.getElementsByClassName("inner_card3"), inner4 = document.getElementsByClassName("inner_card4"), inner5 = document.getElementsByClassName("inner_card5"), inner6 = document.getElementsByClassName("inner_card6"), inner7 = document.getElementsByClassName("inner_card7"), inner8 = document.getElementsByClassName("inner_card8"), inner9 = document.getElementsByClassName("inner_card9"), inner10 = document.getElementsByClassName("inner_card10"), inner11 = document.getElementsByClassName("inner_card11"), inner12 = document.getElementsByClassName("inner_card12"), inner13 = document.getElementsByClassName("inner_card13"), inner14 = document.getElementsByClassName("inner_card14"), inner15 = document.getElementsByClassName("inner_card15"), inner16 = document.getElementsByClassName("inner_card16");



var timer = document.getElementsByClassName("timer2");
var moves = document.getElementsByClassName("moves2");
var reset = document.getElementsByClassName("reset");
var score2 = document.getElementsByClassName("score2");


card1[0].addEventListener("click",myfunc1)
card2[0].addEventListener("click",myfunc2)
card3[0].addEventListener("click",myfunc3)
card4[0].addEventListener("click",myfunc4)
card5[0].addEventListener("click",myfunc5)
card6[0].addEventListener("click",myfunc6)
card7[0].addEventListener("click",myfunc7)
card8[0].addEventListener("click",myfunc8)
card9[0].addEventListener("click",myfunc9)
card10[0].addEventListener("click",myfunc10)
card11[0].addEventListener("click",myfunc11)
card12[0].addEventListener("click",myfunc12)
card13[0].addEventListener("click",myfunc13)
card14[0].addEventListener("click",myfunc14)
card15[0].addEventListener("click",myfunc15)
card16[0].addEventListener("click",myfunc16);
reset[0].addEventListener("click",myfunc17);


var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;
var q = 0;
/*var z = 0; // counter of moves */
var all_counter = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)


function myfunc1(){
b++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner1[0].style.transform ="rotateY(180deg)";	
if (b%2 === 0){
inner1[0].style.transform ="rotateY(0deg)";		
	}
}


function myfunc2(){		
c++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner2[0].style.transform ="rotateY(180deg)";

if ((b%2 === 1) && (c%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (c%2 === 0){
inner2[0].style.transform ="rotateY(0deg)";				
	 }	
	}

function myfunc3(){
d++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner3[0].style.transform ="rotateY(180deg)";	
if (d%2 === 0){
inner3[0].style.transform ="rotateY(0deg)";		
	}
}

function myfunc4(){
e++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner4[0].style.transform ="rotateY(180deg)";

if ((d%2 === 1) && (e%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (e%2 === 0){
inner4[0].style.transform ="rotateY(0deg)";				
	 }	
	}

function myfunc5(){
f++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner5[0].style.transform ="rotateY(180deg)";	
if (f%2 === 0){
inner5[0].style.transform ="rotateY(0deg)";		
	}	
}

function myfunc6(){
g++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner6[0].style.transform ="rotateY(180deg)";

if ((f%2 === 1) && (g%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (g%2 === 0){
inner6[0].style.transform ="rotateY(0deg)";				
	 }	
	}

function myfunc7(){
h++;
inner7[0].style.transform ="rotateY(180deg)";	
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
if (h%2 === 0){
inner7[0].style.transform ="rotateY(0deg)";		
	}		
}	
	
function myfunc8(){
i++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner8[0].style.transform ="rotateY(180deg)";

if ((h%2 === 1) && (i%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (i%2 === 0){
inner8[0].style.transform ="rotateY(0deg)";				
	 }	
	}	
	
function myfunc9(){
j++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner9[0].style.transform ="rotateY(180deg)";	
if (j%2 === 0){
inner9[0].style.transform ="rotateY(0deg)";		
	}		
}	
	
function myfunc10(){
k++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner10[0].style.transform ="rotateY(180deg)";

if ((j%2 === 1) && (k%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (k%2 === 0){
inner10[0].style.transform ="rotateY(0deg)";				
	 }	
	}	
	
function myfunc11(){
l++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner11[0].style.transform ="rotateY(180deg)";	
if (l%2 === 0){
inner11[0].style.transform ="rotateY(0deg)";		
	}		
}	
	
function myfunc12(){
m++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner12[0].style.transform ="rotateY(180deg)";

if ((l%2 === 1) && (m%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (m%2 === 0){
inner12[0].style.transform ="rotateY(0deg)";				
	 }	
	}	
	
function myfunc13(){
n++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner13[0].style.transform ="rotateY(180deg)";	
if (n%2 === 0){
inner13[0].style.transform ="rotateY(0deg)";		
	}		
}
	
function myfunc14(){
o++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner14[0].style.transform ="rotateY(180deg)";

if ((n%2 === 1) && (o%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (o%2 === 0){
inner14[0].style.transform ="rotateY(0deg)";				
	 }	
	}	
	
function myfunc15(){
p++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner15[0].style.transform ="rotateY(180deg)";	
if (p%2 === 0){
inner15[0].style.transform ="rotateY(0deg)";		
	}		
}	
	
function myfunc16(){
q++;
moves[0].innerHTML = (b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q)
inner16[0].style.transform ="rotateY(180deg)";

if ((p%2 === 1) && (q%2 === 1)){
a += 100;
score2[0].innerHTML = a;
	 }			
if (q%2 === 0){
inner16[0].style.transform ="rotateY(0deg)";				
	 }	
	}	
		
function myfunc17(){
inner1[0].style.transform ="rotateY(0deg)";		
inner2[0].style.transform ="rotateY(0deg)";
inner3[0].style.transform ="rotateY(0deg)";		
inner4[0].style.transform ="rotateY(0deg)";
inner5[0].style.transform ="rotateY(0deg)";		
inner6[0].style.transform ="rotateY(0deg)";
inner7[0].style.transform ="rotateY(0deg)";		
inner8[0].style.transform ="rotateY(0deg)";
inner9[0].style.transform ="rotateY(0deg)";		
inner10[0].style.transform ="rotateY(0deg)";
inner11[0].style.transform ="rotateY(0deg)";		
inner12[0].style.transform ="rotateY(0deg)";
inner13[0].style.transform ="rotateY(0deg)";		
inner14[0].style.transform ="rotateY(0deg)";
inner15[0].style.transform ="rotateY(0deg)";		
inner16[0].style.transform ="rotateY(0deg)";

a = 0;
b = 0;
c = 0;
d = 0;
e = 0;
f = 0;
g = 0;
h = 0;
i = 0;
j = 0;
k = 0;
l = 0;
m = 0;
n = 0;
o = 0;
p = 0;
q = 0;
moves[0].innerHTML ="0";
timer[0].innerHTML = "60";
   }
 
var seconds = 60;

function myfunc18(){

if (timer[0].innerHTML >= 0){
seconds -= 1;
timer[0].innerHTML = seconds;	
		}		
if (seconds == 0){	
alert("Stop, Time up, Check ur score");		
   }	 	
	}
setInterval(myfunc18,1000)

