function setQustion(btnPos,qustionText,rowNum){
	//recieved a id with the id
	document.getElementById('td'+btnPos).textContent=qustionText;	
	
	if(btnPos==1 && rowNum==1){
	document.getElementById('radio11').checked = false;
	document.getElementById('radio111').checked = false;
	document.getElementById('radio1111').checked = false;
	}
	if(btnPos==1 && rowNum==2){
	document.getElementById('radio1').checked = false;
	document.getElementById('radio111').checked = false;
	document.getElementById('radio1111').checked = false;
	}
	if(btnPos==1 && rowNum==3){
	document.getElementById('radio1').checked = false;
	document.getElementById('radio11').checked = false;
	document.getElementById('radio1111').checked = false;
	}
	if(btnPos==1 && rowNum==4){
	document.getElementById('radio1').checked = false;
	document.getElementById('radio11').checked = false;
	document.getElementById('radio111').checked = false;
	}
	
	//==============================
	
	if(btnPos==2 && rowNum==1){
	document.getElementById('radio22').checked = false;
	document.getElementById('radio222').checked = false;
	document.getElementById('radio2222').checked = false;
	}
	if(btnPos==2 && rowNum==2){
	document.getElementById('radio2').checked = false;
	document.getElementById('radio222').checked = false;
	document.getElementById('radio2222').checked = false;
	}
	if(btnPos==2 && rowNum==3){
	document.getElementById('radio2').checked = false;
	document.getElementById('radio22').checked = false;
	document.getElementById('radio2222').checked = false;
	}
	if(btnPos==2 && rowNum==4){
	document.getElementById('radio2').checked = false;
	document.getElementById('radio22').checked = false;
	document.getElementById('radio222').checked = false;
	}
	
	//==============================
	
	if(btnPos==3 && rowNum==1){
	document.getElementById('radio33').checked = false;
	document.getElementById('radio333').checked = false;
	document.getElementById('radio3333').checked = false;
	}
	if(btnPos==3 && rowNum==2){
	document.getElementById('radio3').checked = false;
	document.getElementById('radio333').checked = false;
	document.getElementById('radio3333').checked = false;
	}
	if(btnPos==3 && rowNum==3){
	document.getElementById('radio3').checked = false;
	document.getElementById('radio33').checked = false;
	document.getElementById('radio3333').checked = false;
	}
	if(btnPos==3 && rowNum==4){
	document.getElementById('radio3').checked = false;
	document.getElementById('radio33').checked = false;
	document.getElementById('radio333').checked = false;
	}
	
	//===============4===============
	
	if(btnPos==4 && rowNum==1){
	document.getElementById('radio44').checked = false;
	document.getElementById('radio444').checked = false;
	document.getElementById('radio4444').checked = false;
	}
	if(btnPos==4 && rowNum==2){
	document.getElementById('radio4').checked = false;
	document.getElementById('radio444').checked = false;
	document.getElementById('radio4444').checked = false;
	}
	if(btnPos==4 && rowNum==3){
	document.getElementById('radio4').checked = false;
	document.getElementById('radio44').checked = false;
	document.getElementById('radio4444').checked = false;
	}
	if(btnPos==4 && rowNum==4){
	document.getElementById('radio4').checked = false;
	document.getElementById('radio44').checked = false;
	document.getElementById('radio444').checked = false;
	}	
	

}

        var pos=0,test,test_status,question,choice,choices,chA,chB,chC,correct=0;
		var tableData="";
		var aCount=0,bCount=0,cCount=0,dCount=0;
		var firstColor="";
        var secondColor="";
		var questions=[

			// this is where we wrote the questions and options to play the test
			["When I make decisions:","I do it quickly and go with the first impressions. ","I think about it, consider the options and then decide. ","I listen to my feelings and consider how my decisions will affect others. ","I take it seriously and always try to make the right decision. ","B"],
			["The best way for others to show me they care about me is to: ","Do fun things with me.","Give me space to be myself.","Spend time with me doing whatever.","Do what I want to do; not let me down or go back on their word","D"],
			["When I’m with my friends, I like to provide:","The excitement; the fun; the jokes. ","Questions; answers; a logical way of looking at things.","Concern for others; a lot of caring.","The planning; a sense of security; a good standard.","D"],
			["I like to:","Act on a moment’s notice; do risky things. ","Provide answers or give thought to people’s questions.","Help maintain a sense of harmony and togetherness.","Be responsible, dependable, and helpful to others. ","A"],
			//["I like to:","40","14","13","3","A"] 
			["One thing I am really good at is: ","Acting courageously.","Thinking.","Being sensitive.","Organizing.","A"],
			["Friends who know me best would say that I am: ","Competitive.","Reserved, thoughtful. ","Emotional, friendly. ","Neat, prepared.","A"],
			["My basic approach to life is:","To take one day at a time and have fun. ","To figure out what life is all about. ","To help others and be happy and succeed.","To plan for the future and make it as good as possible.","A"],
			["When I am feeling discouraged or “down in the dumps”:","I often become rude, mad, or sometimes even mean.","I withdraw, don’t talk very much, and try to think my way out of the problem. ","I feel emotional, am sad, and usually like to talk it over with someone close to me. ","I try to figure out what’s causing the problem and fix it.","A"],
			["I feel good about myself when:","I can do things that are difficult.","I can solve problems or figure things out. ","I can help other people. ","I am appreciated or rewarded for things I do. ","A"],
			["Teachers at school who saw me when I wasn’t on my best behavior might describe me as: ","Rowdy or a little wild. ","Arrogant. ","Talkative. ","Someone who wants things my way; dominant; worrying.","A"],
			["Teachers at school (who like me and in whose class I do pretty well) would probably describe me as: ","Charming, a natural leader, clever, someone who is fun to have around.","Thoughtful, someone who has good answers, someone who likes to figure out problems. ","Nice, friendly, someone who gets along with other students and is helpful to the teacher and others. ","Neat, organized, prepared, someone who does assignments and is a good student.","A"]
		];
		function _(shyam)
		{
		return document.getElementById(shyam);
		}
		function renderQuestion()
		{
		hidePopup();
		test=_("test");
		if(pos>=questions.length)
		{
		checkFinalRuselt();		
		
		test.innerHTML="<table style='width:50%;' class='center'><tr><th>Number</th><th>&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;</th>"+tableData+"<td>TOTAL</td><td>"+aCount+"</td><td>"+bCount+"</td><td>"+cCount+"</td><td>"+dCount+"</td></table><br><table class='center'><tr><td>&nbsp;A.<svg width='50' height='20'><rect width='50' height='20' style='fill:#ff5100;stroke-width:3;stroke:rgb(0,0,0)' /></svg> &nbsp;B.<svg width='50' height='20'><rect width='50' height='20' style='fill:#008000; stroke-width:3;stroke:rgb(0,0,0)'/></svg></svg> &nbsp;C.<svg width='50' height='20'><rect width='50' height='20' style='fill:#0000ff;stroke-width:3;stroke:rgb(0,0,0)'/></svg></svg>&nbsp;D.<svg width='50' height='20'><rect width='50' height='20' style='fill:#FFD700;stroke-width:3;stroke:rgb(0,0,0)'/></svg></td></tr></table><br><table style='width:50%;' class='center'><tr><td>First Color</td><td>"+firstColor+"</td></tr><td>Second Color</td><td>"+secondColor+"</td></tr></table>";
		_("test_status").innerHTML="<center>Test is Completed</center>";

		 // Creating a button element
		 var nextPageButton = document.createElement("button");
		 nextPageButton.innerHTML = "To see what you're";
		 nextPageButton.onclick = redirectToAnotherPage;
 
		 // Appending the button to the results page
		 var resultsContainer = document.getElementById("test");
		 resultsContainer.appendChild(nextPageButton);
 
		 // Exiting the function as the test is completed
		 return false;

        
		pos=0;
		correct=0;
		return false;
		}
		_("test_status").innerHTML="Question "+(pos+1)+" of "+questions.length;
		question=questions[pos][0];
		chA=questions[pos][1];
		chB=questions[pos][2];
		chC=questions[pos][3];
		chD=questions[pos][4];
		
       
		// created a table design to display the all results 
		test.innerHTML="<table><tr><th>1</th><th align='center'>2</th><th align='center'>3</th><th align='center'>4</th></tr><tr><td id='td1'></td><td id='td2'></td><td id='td3'></td><td id='td4'></td></tr></table>";
		test.innerHTML+="<h3>" + "Question:"+(pos+1)+")"+" " +question+"</h3>";
		test.innerHTML+="<table><tr><td width='600'>A) "+chA+"</td><td><input type='radio' id='radio1' name='chA' value='1' onclick='setQustion(1,chA,1)'>&nbsp;1<input type='radio' id='radio2' name='chA' value='2' onclick='setQustion(2,chA,1)'>&nbsp;2<input type='radio' id='radio3' name='chA' value='3' onclick='setQustion(3,chA,1)'>&nbsp;3<input type='radio' id='radio4' name='chA' value='4' onclick='setQustion(4,chA,1)'>&nbsp;4</td></tr></table>";
		test.innerHTML+="<table><tr><td width='600'>B) "+chB+"</td><td><input type='radio' id='radio11' name='chB' value='1' onclick='setQustion(1,chB,2)'>&nbsp;1<input type='radio' id='radio22' name='chB' value='2' onclick='setQustion(2,chB,2)'>&nbsp;2<input type='radio' id='radio33' name='chB' value='3' onclick='setQustion(3,chB,2)'>&nbsp;3<input type='radio' id='radio44' name='chB' value='4' onclick='setQustion(4,chB,2)'>&nbsp;4</td></tr></table>";
		test.innerHTML+="<table><tr><td width='600'>C) "+chC+"</td><td><input type='radio' id='radio111' name='chC' value='1' onclick='setQustion(1,chC,3)'>&nbsp;1<input type='radio' id='radio222' name='chC' value='2' onclick='setQustion(2,chC,3)'>&nbsp;2<input type='radio' id='radio333'name='chC' value='3' onclick='setQustion(3,chC,3)'>&nbsp;3<input type='radio' id='radio444' name='chC' value='4' onclick='setQustion(4,chC,3)'>&nbsp;4</td></tr></table>";
		test.innerHTML+="<table><tr><td width='600'>D) "+chD+"</td><td><input type='radio' id='radio1111' name='chD' value='1' onclick='setQustion(1,chD,4)'>&nbsp;1<input type='radio' id='radio2222' name='chD' value='2' onclick='setQustion(2,chD,4)'>&nbsp;2<input type='radio' id='radio3333' name='chD' value='3' onclick='setQustion(3,chD,4)'>&nbsp;3<input type='radio' id='radio4444' name='chD' value='4' onclick='setQustion(4,chD,4)'>&nbsp;4</td></tr></table><br>";
		test.innerHTML+="<button onclick='checkAnswer()'>Next Question</button>"+" ";
		
		}

		// created a function  to calculate answer
function checkAnswer()
{
var a=0,b=0,c=0,d=0;
var chAval=choices=document.getElementsByName("chA");
var chBval=choices=document.getElementsByName("chB");
var chCval=choices=document.getElementsByName("chC");
var chDval=choices=document.getElementsByName("chD");

		for(var i=0;i<chAval.length;i++)
		{
			if (chAval[i].checked)
			{
			a=chAval[i].value
			}
			if (chBval[i].checked)
			{
			b=chBval[i].value
			}
			if (chCval[i].checked)
			{
			c=chCval[i].value
			}
			if (chDval[i].checked)
			{
			d=chDval[i].value
			}
		}

		if(a==0||b==0|c==0|d==0){
		
		showPopup();	
		}else{
			var answer=a+'-'+b+'-'+c+'-'+d;
			//alert(answer);
			var index=pos+1;
			tableData=tableData+"<tr><td>"+index+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td></tr>";
			//alert(tableData);
			pos++;
			aCount=+aCount + +a;
			bCount=+bCount + +b;
			cCount=+cCount + +c;
			dCount=+dCount + +d;
			renderQuestion();
		}
}

var max1;
var max2;
var max3;
var max4;


// created a function to creatre final result
function checkFinalRuselt(){

var array = [aCount, bCount, cCount, dCount];
findSecondLargest(array);

var a=0;
var b=0;
var c=0;
var d=0;

if(a==0 && max1==aCount) a=1;
if(b==0 && max1==bCount) b=1;
if(c==0 && max1==cCount) c=1;
if(d==0 && max1==dCount) d=1;

if(a==0 && max2==aCount) a=2;
if(b==0 && max2==bCount) b=2;
if(c==0 && max2==cCount) c=2;
if(d==0 && max2==dCount) d=2;

if(a==0 && max3==aCount) a=3;
if(b==0 && max3==bCount) b=3;
if(c==0 && max3==cCount) c=3;
if(d==0 && max3==dCount) d=3;

if(a==0 && max4==aCount) a=4;
if(b==0 && max4==bCount) b=4;
if(c==0 && max4==cCount) c=4;
if(d==0 && max4==dCount) d=4;


//alert("A: "+a+" B: "+b+"  C: "+c+" D: "+d);


//these are possiblity of final scores 
if(a==4) secondColor="A"
if(b==4) secondColor="B" 
if(c==4) secondColor="C" 
if(d==4) secondColor="D" 

if(a==3) secondColor="A" 
if(b==3) secondColor="B" 
if(c==3) secondColor="C" 
if(d==3) secondColor="D" 


if(a==2) secondColor="A" 
if(b==2) secondColor="B" 
if(c==2) secondColor="C"
if(d==2) secondColor="D" 

if(a==1) firstColor="A" 
if(b==1) firstColor="B" 
if(c==1) firstColor="C" 
if(d==1) firstColor="D" 

// these are the possibilities of option if the users get morethan one option in his results
if(a==1 && b==1) firstColor="A,B" 
if(a==2 && b==2) secondColor="A,B"
if(a==3 && b==3) secondColor="A,B" 
if(a==4 && b==4) secondColor="A,B" 

if(b==2 && d==2 ) secondColor="B,D" 
if(a==1 && c==1 ) firstColor="A,C" 
if(b==1 && d==1 ) firstColor="B,D" 
if(a==2 && c==2 ) secondColor="A,C" 
if(a==3 && c==3 ) secondColor="A,C" 
if(b==3 && d==3 ) secondColor="B,D" 

if(b==1 && c==1) firstColor="B,C" 
if(b==2 && c==2) secondColor="B,C" 
if(b==3 && c==3) secondColor="B,C" 
if(b==4 && c==4) secondColor="B,C" 

if(c==1 && d==1) firstColor="C,D"
if(c==2 && d==2) secondColor="C,D" 
if(c==3 && d==3) secondColor="C,D" 
if(c==4 && d==4) secondColor="C,D" 

if(d==1 && a==1) firstColor="A,D" 
if(d==2 && a==2) secondColor="A,D" 
if(d==3 && a==3) secondColor="A,D" 
if(d==4 && a==4) secondColor="A,D" 

if(a==1 && b==1 && c==1) firstColor="A,B,C" 
if(b==1 && c==1 && d==1) firstColor="B,C,D" 
if(c==1 && d==1 && a==1) firstColor="A,C,D" 
if(d==1 && b==1 && c==1) firstColor="B,C,D" 
if(a==1 && b==1 && d==1) firstColor="A,B,D" 

if(a==2 && b==2 && c==2) secondColor="A,B,C"
if(b==2 && c==2 && c==2) secondColor="B,C,D" 
if(c==2 && d==2 && a==2) secondColor="A,C,D"
if(d==2 && b==2 && c==2) secondColor="B,C,D" 

if(a==3 && b==3 && c==3) secondColor="A,B,C"
if(b==3 && c==3 && c==3) secondColor="B,C,D"
if(c==3 && d==3 && a==3) secondColor="A,C,D" 
if(d==3 && b==3 && c==3) secondColor="B,C,D" 


if(a==4 && b==4 && c==4) secondColor="A,B,C" 
if(b==4 && c==4 && c==4) secondColor="B,C,D" 
if(c==4 && d==4 && a==4) secondColor="A,C,D"
if(d==4 && b==4 && c==4) secondColor="B,C,D" 

}


function findSecondLargest(stringArray) {
// let's convert it to a real array of numbers, not of strings :
var intArray = stringArray.map(Number);
intArray.sort(function(a,b){return b-a});
max1=intArray[0]; 
max2=intArray[1]; 
max3=intArray[2];
max4=intArray[3]; 
}


window.addEventListener("load",renderQuestion,false);


function hidePopup(){
document.getElementById("pop123").style.display = "none";
}


// this function is used to popout, when the user doesn't selected any option and tried to go to next question
function showPopup() {
    var popup = document.getElementById("pop123");
    popup.style.display = "block";
    popup.style.top = "10px"; 
}

window.addEventListener("load", renderQuestion, false);

function hidePopup() {
    document.getElementById("pop123").style.display = "none";
}

function showPopup() {
    var popup = document.getElementById("pop123");
    popup.style.display = "block";
    popup.style.top = "10px";
}


/*function redirectToAnotherPage() {
    try {
        // Change to the actual HTML page you want to navigate to
        window.location.href = "truecolor.html";
    } catch (error) {
        console.error("Error navigating to another page:", error.message);
    }
}*/

function redirectToAnotherPage() {
    try {
        // Change "your_target_page.html" to the actual HTML page you want to navigate to
        window.location.replace("truecolor.html");
    } catch (error) {
        console.error("Error navigating to another page:", error.message);
    }
}







document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have a button with the id "resultButton", change it accordingly
    var resultButton = document.getElementById("resultButton");

    if (resultButton) {
        resultButton.addEventListener("click", redirectToAnotherPage);
    } else {
        console.error("Button with id 'resultButton' not found");
    }
});
