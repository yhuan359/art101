function hideHeader() {
  console.log("function");
  $("h1").toggle();
}

$("#LaunchButton").click(function(){
  console.log("button clicked");
  hideHeader();
});