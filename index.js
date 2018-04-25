$(document).ready(function(){
	
	
	$( ".popupcontainer1" ).hide();
	$("#popup").click(()=>{
		$( ".popupcontainer" ).toggle();
	})
	$("#popup1").click(()=>{
		$( ".popupcontainer1" ).toggle();
	})
	$(".button").click(()=>{
		$(".container").hide();
		$(".containerMin").toggle();
	})
	$("#expand").click(()=>{
		$(".dropDown").toggle("300");
	})
	$("a").css("color","black");
	$("a").hover(function(){
		$(this).css("color","#00b3b3");
	},
		function(){
			$(this).css("color","black");
		}
	);
})

