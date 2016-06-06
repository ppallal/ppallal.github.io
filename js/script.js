
jvars = {}
state = {}
var init = function () {
  jvars.nameHolder = $(".name-holder")
  jvars.optionsHolder = $(".options-holder")
  jvars.optionsHolder.hide()
}

var populateName = function(i) {
  var text = "Prafulla"
  jvars.nameHolder.text(text.slice(0, i))
  if (i<8) setTimeout(function(){ populateName(i+1) }, 100)
  else {
    jvars.optionsHolder.delay(400).fadeIn("fast")
  }
}

var compress = function() {
  jvars.nameHolder.delay(200).animate({top: "10px", 'font-size': "42px", left: "10px"}, "fast")
  jvars.optionsHolder.children("div").animate({'font-size': "0px", height: "25px", width: "25px", padding:"0px"}, "fast")
  jvars.optionsHolder.delay(200).animate({top: "60px", left: "10px"}, "fast");
  state.compressed = true;
}

var deCompress = function() {
  jvars.nameHolder.animate({top: "172px", 'font-size': "100px", left: "215px"}, "fast")
  jvars.optionsHolder.children("div").animate({'font-size': "16px", height: "100px", width: "110px", padding:"40px 10px"}, "fast")
  jvars.optionsHolder.animate({top: "320px", left: "185px"}, "fast");
  state.compressed = false;
  console.log("zzz")
}

var toggleCompression = function () {
  if (!state.compressed) compress()
  else deCompress()
}


$('body').ready(function(){
  init()
  populateName(0)
  jvars.optionsHolder.children("div").click(toggleCompression)
  jvars.nameHolder.click(function() {if (state.compressed) toggleCompression()})

})
