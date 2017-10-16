$("#shopping ul li div a").on("mouseenter",function(){
	$(this).children().css("color","#EB1967");
});
$("#shopping ul li div a").on("mouseleave",function(){
	$(this).children().css("color","black");
});
$(".food ul li a").on("mouseenter",function(){
	$(this).children().nextUntil("p").css("color","#EB1967");
	$(this).parents(".food").css("border","1px solid #eb1967");
});
$(".food ul li a").on("mouseleave",function(){
	$(this).children().nextUntil("p").css("color","black");
	$(this).parents(".food").css("border","none");
});