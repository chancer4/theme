$(document).ready(function($){


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
	ctx.font = "15px Georgia";
	ctx.fillStyle= "grey";
	ctx.textBaseLine = "top";
	ctx.fillText("CSS",25,25);
	ctx.moveTo(25,50);
	ctx.lineTo(200,50);
	ctx.stroke();

});