$("#my-button").click(function() {
  
    // things to happen when the button is clicked
    console.log("button clicked");
  
    // get color value from input field
    color = $("#username").val();
    
    console.log("color is:" + color);
    
    // output color somewhere on the page
    
    $("body").append('<div id="colorOutput">' + color + '</div');
    
      $("#colorOutput").css("color", color);
  });