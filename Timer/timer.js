function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

	if (!localStorage.getItem("MS")) {
	var MS = 0;
} else {
	var MS = parseInt(localStorage.getItem("MS"));
}
var S = 0;
var Unit = " Seconds";
var ADDEDMS = 0;

function set_LiveClock() {
	var clock = document.getElementById("time_Display");
	var day_clock = document.getElementById("date_Display");
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var a = new Date();
	var Day = a.getDate();
	var c = a.getHours();
	var d = a.getMinutes();
	var e = a.getMilliseconds();
	var f = a.getSeconds();
	var b_2 = a.getMonth();
	var c_2 = a.getFullYear();
	var am = "AM";
	var Dats = "th";
	if (d < 10) {
		d = "0" + d;
	}
	if (f < 10) {
		f = "0" + f;
	}
	if (c > 12) {
		am = "PM";
		c -= 12;
	}
	if (Day === 1) {
		Dats = Day + "st";
	} else if (Day === 2) {
		Dats = Day + "nd";
	} else if (Day === 3) {
		Dats = Day + "rd";
	} else if (Day === 21) {
		Dats = Day + "st";
	} else if (Day === 22) {
		Dats = Day + "nd";
	} else if (Day === 23) {
		Dats = Day + "rd";
	} else if (Day === 31) {
		Dats = Day + "st";
	} else if (Day === 32) {
		Dats = Day + "nd";
	} else if (Day === 33) {
		Dats = Day + "rd";
	} else {
		Dats = Day + "th";
	}
	var Today = monthNames[b_2] + " the " + Dats + " " + c_2;
	var clock_Info = c + ":" + d + "." + f + " " + am;
	day_clock.innerHTML = Today;
	clock.innerHTML = clock_Info;
}
setInterval(set_LiveClock, 1);

function setMS() {
	MS += 1;
	document.getElementById("MS_Display").innerHTML = MS + Unit + "!";
}
setInterval(setMS, 1000);

function addMS() {
	ADDEDMS += 1;
	document.getElementById("Live_StopWatch").innerHTML = ADDEDMS;
}

function closeAll() {
	document.getElementById("Live_Clocks").style.display = 'none';
	document.getElementById("stopWatch").style.display = 'none';
	document.getElementById("countDown").style.display = 'none';
	document.getElementById("countDown_LI").className = '';
	document.getElementById("Live_Clocks_LI").className = '';
	document.getElementById("stopWatch_LI").className = '';
}

function showSW() {
	closeAll();
	document.getElementById("stopWatch").style.display = 'block';
	document.getElementById("stopWatch_LI").className = 'active';
}

function showLC() {
	closeAll();
	document.getElementById("Live_Clocks").style.display = 'block';
	document.getElementById("Live_Clocks_LI").className = 'active';
}

function showCD() {
	closeAll();
	document.getElementById("countDown").style.display = 'block';
	document.getElementById("countDown_LI").className = 'active';
}
var PPC = 0;

function start() {
	ADDEDMS = 0;
	PPC = 1;
	document.getElementById("SB").innerHTML = "Stop";
	document.getElementById("SB").onclick = stop;
}

var lastData = 0;
var lapN = 1;

function lap() {
	var data = document.getElementById("Live_StopWatch").innerHTML;
	var data_end = " Seconds";
  data -= lastData;
	if (data > 60){
		data /= 60;
		data = data.toFixed(2);
		data_end = " Hours"
	}
	if (data > 24){
		data /= 24;
	  data_end = " Days";
	}
	document.getElementById("lapBox").innerHTML += "<br>Lap: "+lapN+" "+data + data_end;
	lastData = data;
	data = 0;
	data_end = 0;
	lapN++
}

function addMS() {
	ADDEDMS += PPC;
	document.getElementById("Live_StopWatch").innerHTML = ADDEDMS;
}
setInterval(addMS, 1000);

function stop() {
	PPC = 0;
	document.getElementById("SB").innerHTML = "Restart";
	document.getElementById("SB").onclick = start;
}

function setNewCountDown(Event, Date1, Message) {
	document.getElementById("newCD").style.display = 'none';
	document.getElementById("viewCD").style.display = 'block';

	if (Message.length === 0) {
		Message = "Frohes neues Jahr Philip";
	}
	if (Event === "Count down to: " || Event.length === 0) {
		Event = "A undisclosed holiday in germany";
	}
	if (Date1.length === 0) {
		Date1 = "jan 1, 3000 00:00:00";
	}

	var X = new Date();
	Date1 = new Date(Date1).getTime();

	var x = setInterval(function() {
		var now = new Date().getTime();

		var distance = Date1 - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("countDown_Live").innerHTML = days + " Days // " + hours + " Hours //  " +
			minutes + " Minutes // " + seconds + " Seconds";
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("countDown_Live").innerHTML = Message;
		}
	}, 1000);
	document.getElementById("title1").innerHTML = Event;
	for (i = 0; i < Event.length; i++) {
		Event = Event.replace(" ", "%20");
		Event = Event.replace("'", "%27");
	}
	for (i = 0; i < Message.length; i++) {
		Message = Message.replace(" ", "%20");
		Message = Message.replace("'", "%27");
	}
	var link = "https://47Bytes.bitballoon.com/timer/CCD?" + Event + "+" + Date1 + "+" + Message;
	var EB = "<iframe src=&apos;" + link + "&apos; height=&apos;400&apos;  width=&apos;300&apos; style=&apos;border:3px solid black;&apos;></iframe>"
	document.getElementById("EBCD").innerHTML = "<input type='text' value='" + EB + "' id='EBREL'><button onClick='CopyCode()'>Copy Code</button>"
	document.getElementById("URLCD").innerHTML = "<input type='text' value='" + link + "' id='linkREL'><button onClick='CopyLink()'>Copy Link</button>";
}

function CopyCode() {
	var copyText = document.getElementById("EBREL");
	copyText.select();
	document.execCommand("Copy");
	alert("Copied the code");
}

function CopyLink() {
	var copyText = document.getElementById("linkREL");
	copyText.select();
	document.execCommand("Copy");
	alert("Copied the link");
}

function remakeCD() {
	closeAll();
	showCD();
	document.getElementById("newCD").style.display = 'block';
	document.getElementById("viewCD").style.display = 'none';
}
function disclaimer() {
	window.open('win.html', 'popup1', 'width=600,height=300,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0');
}
