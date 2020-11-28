
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
;
  
var giatri = firebase.database().ref('AIO');//gán biến giá trị = với cây B, khai báo sử dụng cây B

var den_1;// Trạng thái đèn 1
var den_2;// Trạng thái đèn 2
var den_3;// Trạng thái đèn 3
var den_4;// Trạng thái đèn 4
var den_5;// Trạng thái đèn 5
var den_6;// Trạng thái đèn 6
var slider_7; // Giá trị volume 1
var slider_8; // Giá trị volume 2




// Thay đổi giá trị của đèn trên server firebase
// Hàm này chạy vào 2 thời điểm:
// 		1. Khi trang web vừa được mở hoặc F5
// 			Hàm này sẽ lấy trạng thái từ server và setup cho từng đèn
// 		2. Khi thay đổi trạng thái đèn
// 			Hàm này sẽ cập nhật lại trạng thái của các đèn
giatri.on('value',function(snapshot){

	// Lấy trạng thái của các đèn từ server
	den_1 = snapshot.child('/data/output/DO01').val();
	den_2 = snapshot.child('/data/output/DO02').val();
	den_3 = snapshot.child('/data/output/DO03').val();
	den_4 = snapshot.child('/data/output/DO04').val();
	den_5 = snapshot.child('/data/output/DO05').val();
	den_6 = snapshot.child('/data/output/DO06').val();

	// Lấy giá trị của slider từ server
	slider_7 = snapshot.child('/data/output/DO07').val();
	slider_8 = snapshot.child('/data/output/DO08').exportVal();

	// Ghi log trong console để theo dõi kết quả
	// Mở web -> F12 -> chọn console để xem
	console.log('\n*************************************');
	console.log('Trạng thái của đèn 1: ' + den_1);
	console.log('Trạng thái của đèn 2: ' + den_2);
	console.log('Trạng thái của đèn 3: ' + den_3);
	console.log('Trạng thái của đèn 4: ' + den_4);
	console.log('Trạng thái của đèn 5: ' + den_5);
	console.log('Trạng thái của đèn 6: ' + den_6);
	console.log('Trạng thái của volume 7: ' + slider_7);
	console.log('Trạng thái của volume 8: ' + slider_8);

	// Set trạng thái của các đèn
	setup_den('1', den_1);
	setup_den('2', den_2);
	setup_den('3', den_3);
	setup_den('4', den_4);
	setup_den('5', den_5);
	setup_den('6', den_6);

	// Set giá trị cho slider
	init_slider(7,slider_7);
	init_slider(8,slider_8);

});



// Hàm này dùng để cập nhật trạng thái đèn
// Tham số truyền vào bao gồm
// den_id: số thứ tự của đèn (1, 2, 3,...)
// status: trạng thái:
// 		1: Bật đèn
// 		0: Tắt đèn
function setup_den(den_id, status){
	if (status === 1){
		$('#btn-toggle-' + den_id).bootstrapToggle('on');
		document.getElementById('hinhanh'+den_id).src = "http://iotcontrol.online/AIO/images/light_on.png";
	} else {
		$('#btn-toggle-' + den_id).bootstrapToggle('off');
		document.getElementById('hinhanh'+den_id).src = "http://iotcontrol.online/AIO/images/light_off.png";
	}
}

// Hàm này dùng để bật tắt đèn
// Tham số truyền vào bao là den_id: số thứ tự của đèn (1, 2, 3,...)
function changeStatus_den(den_id)
{
	var status = document.getElementById('btn-toggle-'+den_id).checked;// checked : true or false.

	if (status === true) /// so sanh tuyet doi
	{
		firebase.database().ref("AIO/data/output/DO0"+den_id).set(1);
	} else {
		firebase.database().ref("AIO/data/output/DO0"+den_id).set(0);
	}
}

// Hàm này dùng để set giá trị cho slider
function init_slider(slider_id, slider_value){

	document.getElementById("slider-range-"+slider_id).value = slider_value;

	document.getElementById("slider-result-"+slider_id).innerHTML = 'Giá trị: ' + slider_value;

}



