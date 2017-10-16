// 蓝色字
$("#pageHead ul li").on("mouseenter",function(){
				$(this).children().children().css("color","#73adc9");
			});
			$("#pageHead ul li").on("mouseleave",function(){
				$(this).children().children().css("color","#8c8c8c");
			});
//移入背景+箭头+边框
$(".dis").on("mouseenter",function(){
				$(this).css({
					background:"white",
					borderLeft:"1px solid #dfdfdf",
					borderRight:"1px solid #dfdfdf",
					

				});
				$("#pageHead ul li a").css("borderRight","none")
			    var res = $(this).children().children().hasClass("xia");
			   
			    var src =$(this).children().children()[1];
				if(res){
					src.setAttribute("src","img/1.png");
				}
				// $("#pageHead .dis .city").stop().slideToggle(10);
			});	
$(".dis").on("mouseleave",function(){
				$(this).css({
					background:"#fafafa",
					color: "#8c8c8c",
					borderLeft:"none",
					borderRight:"none",
					
				});

				var res = $(this).children().children().hasClass("xia");
			   
			    var src =$(this).children().children()[1];
				if(res){
					src.setAttribute("src","img/箭头.png");
				}
				
			});
//移入下拉
$("#pageHead .only1").on("mouseenter mouseleave",function(ev){
	
	$(".city").stop().slideToggle(10);
});
$("#pageHead .only2").on("mouseenter mouseleave",function(ev){
	
	$(".on2").stop().slideToggle(10);
});
$("#pageHead .only3").on("mouseenter mouseleave",function(ev){
	
	$(".on3").stop().slideToggle(10);
});
$("#pageHead .only4").on("mouseenter mouseleave",function(ev){
	
	$(".on4").stop().slideToggle(10);
});
$("#pageHead .only5").on("mouseenter mouseleave",function(ev){
	
	$(".on5").stop().slideToggle(10);
});
$("#pageHead .only6").on("mouseenter mouseleave",function(ev){
	
	$(".on6").stop().slideToggle(10);
});
$(".dis div p").on("mouseenter",function(){
	$(this).css("background","#f7f7f7");
});
$(".dis div p").on("mouseleave",function(){
	$(this).css("background","white");
});
$("#choose .ml .fenlei ul li a").addClass("underline");
$("#food .f_title ul li a").addClass("underline");
$(".underline").on("mouseenter",function(){
	$(this).css({
	textDecoration:"underline",
	color:"#73adc9"
	});
});
$(".underline").on("mouseleave",function(){
	$(this).css({
	textDecoration:"none",
	color:"#8c8c8c"
	});
});
$(".red").css("color","red");
$(".red").on("mouseleave",function(){
	$(this).css("color","red");
});
//分类的显示隐藏

$("#choose>li").on("mouseenter mouseleave",function(ev){
	$(this).css("background","#fff");
//console.log($(this).index());
var i = $(this).index() + 1;
var xb = ".open"+i;
//console.log(xb)
	$(xb).slideToggle(10);
});
$("#choose>li").on("mouseleave",function(){
	$(this).css("background","#fafafa");

});
$("#Lnav ul li a b").on("mouseenter",function(){
	$(this).css("color","#ff318c");
});
$("#Lnav ul li a b").on("mouseleave",function(){
	$(this).css("color","black");
});
//底部导航移入显示
$("#bottom_nav .remen").on("mouseenter",function(ev){
	
	$(".rm").css("display","block");
	$(this).css({
		background:"#f5f5f5",
		});
		$(".tuangou").css({
		background:"white",
		
		});
	$(".tg").css("display","none");	
});

$("#bottom_nav .tuangou").on("mouseenter",function(ev){
	
	$(".tg").css({
		display:"block"
	});
	$(this).css({
		background:"#f5f5f5",
		borderRight:"1px solid #dfdfdf",
		borderLeft:"1px solid #dfdfdf",
		
	});
	
	
	$(".ct").css("border","none");
	$(".remen").css({
		background:"white",
		});
	$(".rm").css("display","none");
});


