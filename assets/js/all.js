/*
 * Accordion Multi Menu
 * 
 * Designed by Nevide (http://codecanyon.net/user/Nevide)
 * Written and customized by Alireza Eskandarpour Shoferi (http://about.me/cyletech)
 * 
 * (c) copyright 2013 under GNU GPLv3 license
 */

$(function(){
	$("#accordion a").click(function(e){
		e.preventDefault();
	});

	$("#items > li >a",$("#accordion")[0]).click(function(){
		if($(this).hasClass("activated"))
		{
			$(this).removeAttr("class");
			$(this).parent().children("ul").stop(true,true).slideUp("normal");
		}
		else
		{
			$("#items a.activated",$("#accordion")[0]).removeAttr("class");
			$(this).addClass("activated");
			$(".sub-items",$("#accordion")[0]).filter(":visible").slideUp("normal");
			$(this).parent().children("ul").stop(true,true).slideDown("normal");
		}
	});

	$(".sub-items a",$("#accordion")[0]).click(function(){
		$(".sub-items a",$("#accordion")[0]).removeAttr("class");
		$(this).addClass("current");
	});
});