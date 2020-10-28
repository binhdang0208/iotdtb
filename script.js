
  // Your web app's Firebase configuration
  var firebaseConfig = {
  	apiKey: "AIzaSyDtvElzVF2OLX0P4OoV1ttB-5G045Srzyk",
  	authDomain: "thaibinh01912.firebaseapp.com",
  	databaseURL: "https://thaibinh01912.firebaseio.com",
  	projectId: "thaibinh01912",
  	storageBucket: "thaibinh01912.appspot.com",
  	messagingSenderId: "983042065621",
  	appId: "1:983042065621:web:f7a2e0b096fcaabee94e5c",
  	measurementId: "G-F5Q009V166"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var giatri = firebase.database().ref('AIO');
  var tam;
  var tam1;
  giatri.on('value',function(snapshot){
  	tam = snapshot.child('/CB1').val();
  	tam1 = snapshot.child('/CB2').val();
  	document.getElementById('anh').innerHTML= tam;
  	document.getElementById('anh1').innerHTML= tam1;
  });

  
var giatri = firebase.database().ref('AIO');//gán biến giá trị = với cây B, khai báo sử dụng cây B
var bientam;// den 1
var c;// den 3 
var d;// den 4 
var e;// den 5
var f;// den 6 
var g;// den 7 
var h;// den 8




//đèn 1
giatri.on('value',function(snapshot){
	
	bientam = snapshot.child('/data/output/DO01').val();
 	//b=snapshot.child('/data/output/DO02').val();
 	if(bientam == 1){
 		document.getElementById('hinhanh1').src = "http://iotcontrol.online/AIO/images/light_on.png";

 	};
 	if(bientam == 0){
 		document.getElementById('hinhanh1').src = "http://iotcontrol.online/AIO/images/light_off.png"
 	};

 });


function tacdong1 ()
{
	
	if (bientam==1)
	{
		firebase.database().ref("AIO/data/output/DO01").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO01").set(1);
	}

}
//đèn 2
giatri.on('value',function(snapshot){
	
	b = snapshot.child('/data/output/DO02').val();
	if(b == 1){
		document.getElementById('hinhanh2').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(b == 0){
		document.getElementById('hinhanh2').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong2 ()
{
	
	if (b ==1)
	{
		firebase.database().ref("AIO/data/output/DO02").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO02").set(1);
	}
}
//đèn3
giatri.on('value',function(snapshot){
	
	c = snapshot.child('/data/output/DO03').val();
	if(c == 1){
		document.getElementById('hinhanh3').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(c == 0){
		document.getElementById('hinhanh3').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong3()
{
	if (c ==1)
	{
		firebase.database().ref("AIO/data/output/DO03").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO03").set(1);
	}
}
//đèn4
giatri.on('value',function(snapshot){
	
	d = snapshot.child('/data/output/DO04').val();
	if(d == 1){
		document.getElementById('hinhanh4').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(d == 0){
		document.getElementById('hinhanh4').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong4()
{
	if (d ==1)
	{
		firebase.database().ref("AIO/data/output/DO04").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO04").set(1);
	}
}
//đèn5
giatri.on('value',function(snapshot){
	
	e = snapshot.child('/data/output/DO05').val();
	if(e == 1){
		document.getElementById('hinhanh5').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(e == 0){
		document.getElementById('hinhanh5').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong5()
{
	if (e ==1)
	{
		firebase.database().ref("AIO/data/output/DO05").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO05").set(1);
	}
}
//đèn6
giatri.on('value',function(snapshot){
	
	f = snapshot.child('/data/output/DO06').val();
	if(f == 1){
		document.getElementById('hinhanh6').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(f == 0){
		document.getElementById('hinhanh6').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong6()
{
	if (f ==1)
	{
		firebase.database().ref("AIO/data/output/DO06").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO06").set(1);
	}
}
//đèn7
giatri.on('value',function(snapshot){
	
	g = snapshot.child('/data/output/DO07').val();
	if(g == 1){
		document.getElementById('hinhanh7').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(g == 0){
		document.getElementById('hinhanh7').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong7()
{
	if (g ==1)
	{
		firebase.database().ref("AIO/data/output/DO07").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO07").set(1);
	}
}
//đèn8
giatri.on('value',function(snapshot){
	
	h = snapshot.child('/data/output/DO08').val();
	if(h == 1){
		document.getElementById('hinhanh8').src = "http://iotcontrol.online/AIO/images/light_on.png";

	};
	if(h == 0){
		document.getElementById('hinhanh8').src = "http://iotcontrol.online/AIO/images/light_off.png"
	};

});

function tacdong8()
{
	if (h ==1)
	{
		firebase.database().ref("AIO/data/output/DO08").set(0);
	}
	
	else 
	{
		firebase.database().ref("AIO/data/output/DO08").set(1);
	}
}