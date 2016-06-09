
jvars = {}
state = {}
var init = function () {
  jvars.nameHolder = $(".name-holder")
  jvars.optionsHolder = $(".options-holder")
  jvars.about = $(".about")
  jvars.optionsPanels = {
    "experience": $('#option-experience')
  }
  jvars.optionsHolder.hide()
  jvars.about.hide()
}

var populateName = function(i) {
  var text = "Prafulla"
  jvars.nameHolder.text(text.slice(0, i))
  if (i<8) setTimeout(function(){ populateName(i+1) }, 100)
  else {
    jvars.optionsHolder.delay(400).fadeIn("fast")
    jvars.about.delay(800).fadeIn("fast")
  }
}

var compress = function() {
  jvars.nameHolder.delay(200).animate({top: "10px", 'font-size': "52px", left: "10px"}, "fast")
  jvars.optionsHolder.children("div").animate({'font-size': "0px", height: "25px", width: "25px", padding:"0px"}, "fast")
  jvars.optionsHolder.delay(200).animate({top: "72px", left: "10px"}, "fast");
  jvars.about.fadeOut(100);
  state.compressed = true;
}

var deCompress = function() {
  jvars.nameHolder.animate({top: "172px", 'font-size': "100px", left: "215px"}, "fast")
  jvars.optionsHolder.children("div").animate({'font-size': "16px", height: "100px", width: "110px", padding:"40px 10px"}, "fast")
  jvars.optionsHolder.animate({top: "320px", left: "185px"}, "fast");
//  jvars.about.delay(250).fadeIn("fast")
  state.compressed = false;
}

var toggleCompression = function () {
  if (!state.compressed) compress()
  else deCompress()
}

var optionClicked = function() {
  toggleCompression()
  jvars.optionsPanels.experience.css("display", "none").removeClass("hidden-lg").delay(400).slideDown("fast")
}

$('body').ready(function(){
  init()
  populateName(0)
  jvars.optionsHolder.children("div").click(optionClicked)
  jvars.nameHolder.click(function() {if (state.compressed) toggleCompression()})

})
