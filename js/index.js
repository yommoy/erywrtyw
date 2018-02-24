
//计算各项元素的维度
function contentH(){
	var bodyH = $(window).height();
	//内容高度
	$(".content").height(bodyH);

	//计算标签页的line-height
	var tabUnitH = $(".nav-tab .tab-unit").height()+"px";
	$(".nav-tab .tab-unit").css("line-height",tabUnitH);

	//计算菜单的line-height
	var menuTabH = $(".menu .menu-tab").height()+"px";
	$(".menu .menu-tab").css("line-height",menuTabH);

	//计算滚动区域高度
	var topFixedH = $(".top-fixed").height() + bodyH*0.03;
	var menuH =  $(".menu").height();
	$(".scroll-area").css("margin-top",topFixedH);
	$(".scroll-area").height(bodyH - topFixedH - menuH - bodyH*0.03);

	//计算输入框高度
	var inputH = bodyH*0.1;
	$(".input-box").height(inputH);
	$(".select-box").height(inputH);
	$(".select-box div").css("line-height",inputH+"px");
	$(".btn-box").height(inputH);

	//计算输入框图标的高度
	var borderBoxH = $(".border-box").width();
	$(".border-box").height(borderBoxH);

	//计算输入框连线的位置与高度
	var firstTop = $(".border-box.green").offset().top;
	var lastTop = $(".border-box.red").offset().top;
	var lineH = lastTop - firstTop - borderBoxH;
	$(".form-box .line").height(lineH);
	$(".form-box .line").css("top",firstTop + borderBoxH + 1);
}

//计算字体的大小
function fontSize() {
	var bodyWidth = $(window).width();
    if( bodyWidth >= 414 ) {
        $("body").css("font-size","120%");
    } else if( bodyWidth >= 375 ) {
        $("body").css("font-size","110%");
    } else if( bodyWidth >= 360 )  {
        $("body").css("font-size","100%");
    } else {
        $("body").css("font-size","90%");
    }
}

$(function() {
	contentH();
	fontSize();

	$(window).resize(function() {		
		contentH();
		fontSize();
	})
})
