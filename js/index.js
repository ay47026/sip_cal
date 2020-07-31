

$(document).ready(function(){
	
let No_of_year = $("#No_of_year").val();
let Expected_Rate = $("#Expected_Rate").val();
let Monthly_SIP = $("#Monthly_SIP").val();


console.log(No_of_year);
let No_of_year_show = $("#No_of_year_show");
let Expected_Rate_show = $("#Expected_Rate_show");
let Monthly_SIP_show = $("#Monthly_SIP_show");


No_of_year_show.val(No_of_year);
Expected_Rate_show.val(Expected_Rate);
Monthly_SIP_show.val(Monthly_SIP);

$("#No_of_year").mousemove(function(){
	No_of_year_show.val( $(this).val());
     
});

$("#Expected_Rate").mousemove(function(){
	Expected_Rate_show.val( $(this).val());
     
});
$("#Monthly_SIP").mousemove(function(){
	Monthly_SIP_show.val( $(this).val());
     
});
     
$(".sub_btn").click(function(){

	let n = No_of_year_show.val();
let i = Expected_Rate_show.val();
let p = Monthly_SIP_show.val();

let  M = eval(p *(((1 + i)*n - 1) / i) * (1 + i));

console.log(M);

$(".Your_Total_Wealth").html(M);


	$(".form_div").fadeOut(function(){
			$(".submited_form").fadeIn();
	});

});


$(".sub_btn_back").click(function(){

	$(".submited_form").fadeOut(function(){
			$(".form_div").fadeIn();
	});

});


//     $('input[type="range"]').rangeslider();

//     $('input[type="range"]').rangeslider('destroy');


//     $('input[type="range"]').rangeslider('update', true);
// $('input[type="range"]').val(10).change();

});



