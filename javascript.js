$(document).ready(function() {
$(".positive").click(function(){
    $(".positive").hide();
    $("#bar").show();
    $('#bar').css('display','flex');
});
$('#next').click(function() {
  $('.positive').show();
  $('#bar').hide();
});
  
function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "red", 
    "green", 
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");


var negative=[27756, 17482, 17394, 146, 10, 2247, 4193, 2536, 50856, 33348];
var positive=[244330, 9796, 12123, 1895, 173, 2247, 163970, 11351, 32202, 427];

var array =["https://www.youtube.com/embed/XjJQBjWYDTs", "https://www.youtube.com/embed/WWTRwj9t-vU", "https://www.youtube.com/embed/pANqQHv4e3w","https://www.youtube.com/embed/ZKHS4PIVRxg", "https://www.youtube.com/embed/OxhdrVP_L_8", "https://www.youtube.com/embed/Ghl19lJJ_mA", "https://www.youtube.com/embed/XpaOjMXyJGk","https://www.youtube.com/embed/9ilSeJ6B5ro", "https://www.youtube.com/embed/vHGPbl-werw", "https://www.youtube.com/embed/uM19yt7MbN8"];
var index =0;
$("#next").click(function(){
  console.log ('hi')
    index++;
    $(".positive").show();
    $("#progress").animate({
        width:index*10+"%"},1000);
    $("#bar").hide();
    var animation =1500;
    var video= $("iframe");
    $( "iframe" ).slideUp( animation, function(){  
    video.attr('src', array[index]);
    });
    $( "iframe" ).slideDown(animation); 
     $("#positive").html(positive[index]);
   $("#negative").html(negative[index]);
   createPie(".pieID.legend", ".pieID.pie");
   if (index > 9){
       window.location="https://azazail.github.io/dechack_team_M/success.html"
   }
});

$("#startbutton").click(function(){
    $("#pic1").hide();
    $("#start").hide();
    $("#whole").show();
});
$('#post').click(function () {
    $("#comments").append("<p>"+$('input').val ()+"</>");
});
});
